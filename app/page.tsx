'use client'

import { Dispatch, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData, Stack, chainHuristicsStats } from "./crafting/units";
import { PopupEditor, togglePopupCallback } from "./components/popup";
import { CraftingAction, craftingReducer } from "./components/crafting";
import { OnEnterCall } from "./utils/onEnter";
import { CraftingRequestType, requestMenuReducer, SelectionDisplay } from "./components/selectionMenu";
import { SVGHuristic } from "./components/svgHuristics";
import { gtBackpackPreset, vanillaPickaxePreset } from "./crafting/defaultPresets";



let resetRequestStateFunc: Function;  // Ugly hack to set a function, but in avoids passing a function through a bunch of innocent props/components.


function CheckBackendStatus() {
    // Actually tries to fetch and update the status text
    return (
        <div>
            Backend check missing.
        </div>
    )
}


function PullPreset(craftingDispatch: Dispatch<CraftingAction>) {

    // If we have a way to reset the current state, do it.
    if (resetRequestStateFunc) {
        resetRequestStateFunc();
    }

    const element = document.getElementById("preset_input") as HTMLInputElement;
    var value = element?.value;
    if (!value) {
        value = "Dev";
    }
    console.log("Preset is " + value);
    craftingDispatch({type: "reset"});

    let presetNames = JSON.parse(localStorage.getItem("_available")!) as Array<string>

    if (presetNames.includes(value)) {  // We check this because it's my "best practices", but we can bypass this and just check the value for undifined directly.
        craftingDispatch({type: "replace all", anyValue: JSON.parse(localStorage.getItem(value)!)})
    } else {
        console.log("Unkown preset set: " + value);
    }

    craftingDispatch({type: "log"});

}


function ensureDefaultPresets() {
    
    // DEBUG clear
    localStorage.clear();
    
    let availablePresetNamesStr = localStorage.getItem("_available");  // We assume there is no preset called _available. TODO hard code a check when setting?
    let availablePresetNames = [];

    // Create temp object
    let tempData = new CraftingData();
    function fakeDispatch(action: CraftingAction) {  // Simulate the regular dispatcher without triggering any prop updates.
        tempData = craftingReducer(tempData, action);
    }

    if (!availablePresetNamesStr) {  // If this item is not found in localStorage, that means we haven't loaded anything into it.

        // Add defaults
        // Dev
        fakeDispatch({type: "reset"});
        vanillaPickaxePreset(fakeDispatch)
        localStorage.setItem("Dev", JSON.stringify(tempData));
        availablePresetNames.push("Dev");

        // Empty
        fakeDispatch({type: "reset"});
        localStorage.setItem("Empty", JSON.stringify(tempData));
        availablePresetNames.push("Empty");
        localStorage.setItem("Default", JSON.stringify(tempData));
        availablePresetNames.push("Default")

        // Backpack
        fakeDispatch({type: "reset"});
        gtBackpackPreset(fakeDispatch);
        localStorage.setItem("Backpack", JSON.stringify(tempData));
        availablePresetNames.push("Backpack");
        
        // Store the currently available items
        localStorage.setItem("_available", JSON.stringify(availablePresetNames));

    }
}


function PresetMenu({craftingDispatch, craftingData, currentPresetNames}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData, currentPresetNames: string}) {
    // TODO this will check the backend status and if it exist, add a load/push preset menu buttons

    let availablePresetNames: Array<string> = []
    if (currentPresetNames) {
        availablePresetNames = JSON.parse(currentPresetNames);
    }

    return (
        <div className="w-full">
            <CheckBackendStatus/>
            <div className="text-black">
                <datalist id="preset_names">
                    {
                        availablePresetNames.map(name => {
                            return <option value={name} key={name}/>
                        })
                    }
                </datalist>
                <input autoComplete="on" list="preset_names" placeholder="Preset Name" id="preset_input" onKeyDown={OnEnterCall(PullPreset)}></input>
                <input type="submit" value="Load" onClick={() => {PullPreset(craftingDispatch)}} className="text-center bg-white px-8 outline"></input>
            </div>
        </div>
    )
}


function Header({craftingDispatch, craftingData, currentPresetNames}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData, currentPresetNames: string}) {
    return (
        <div>
            <div className="text-3xl font-bold underline w-screen bg-slate-950 flex justify-center">
                Crafting Site
            </div>
            <div className="flex justify-around ">
                <LinkBtn kind="link" text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn kind="link" text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
                <PresetMenu craftingDispatch={craftingDispatch} craftingData={craftingData} currentPresetNames={currentPresetNames}/>
            </div>
        </div>
    )
}


function LogButton({text, dis, popupToggle}: {text: string, dis: Dispatch<CraftingAction>, popupToggle: () => void}) {
    return (
        <input type="button" value={text} onClick={() => {dis({type: "log"}); popupToggle()}}/>
    )
}


function CalculateButton({requestState, craftingData}: {requestState: CraftingRequestType, craftingData: CraftingData}) {
    if (Object.keys(requestState).length > 0) {
        let goal = [];
        for (let req of Object.values(requestState)) {
            for (let i = 0; i < req.amount; i++) {
                goal.push(req.resourceName);
            }
        }
        let huristic = craftingData.bestHuristic(craftingData.calcChain(goal), craftingData.defaultHuristic)!;
        if (huristic.longest_depth == 0) {
            return (
                <div className="text-center">
                    No resources in Crafting Request have crafting recipes.
                </div>
            )
        } else {
            return (
                <div>
    
                    <SVGHuristic huristic={huristic}/>
                    <HuristicStats huristic={huristic}/>
                </div>
            )
        }
    } else {
        return (
            <></>
        )
    }
}


function DisplayStack({stack}: {stack: Stack}) {
    return (
        <div>{stack.amount}x {stack.resourceName}</div>
    )
}


function HuristicStats({huristic}: {huristic: chainHuristicsStats}) {
    return (
        <div className="flex justify-around pt-2">
            <span>
                <div>
                    Resulting outputs
                {
                    huristic.output.map(stack => <DisplayStack stack={stack} key={stack.resourceName}/>)   
                }
                </div>
            </span>
            <span>
                <div>
                    Intermediate crafting requirements
                {
                    huristic.intermediate.map(stack => <DisplayStack stack={stack} key={stack.resourceName}/>)
                }
                </div>
            </span>
            <span>
                <div>
                    Required inputs
                {
                    huristic.input.map(stack => <DisplayStack stack={stack} key={stack.resourceName}/>)
                }
                </div>
            </span>
        </div>
    )
}


export default function Main() {
    const [craftingData, dispatchData] = useReducer(craftingReducer, initialCraftingData);
    const [popupState, setPopupState] = useState(false);

    var initialcraftingRequests: Record<string, Stack> = {}
    const [craftingRequestState, dispatchCraftingRequest] = useReducer(requestMenuReducer, initialcraftingRequests)
    resetRequestStateFunc = () => dispatchCraftingRequest({type: "reset", name: ""})  // load the global shortcut
    const [currentPresetNames, setCurrentPresetNames] = useState("");  // By storing the value as a json string, we don't need to use a reducer given that we alway deserialize it.

    useEffect(() => {
        ensureDefaultPresets(); 
        setCurrentPresetNames(localStorage.getItem("_available")!)
        PullPreset(dispatchData); 
    }, []);  // Run update once after main page load

    return (
        <div className="">
            <Header craftingDispatch={dispatchData} craftingData={craftingData} currentPresetNames={currentPresetNames}/>
            <LogButton text="log craftingData" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <PopupEditor craftingDispatch={dispatchData} craftingData={craftingData}></PopupEditor>
            <SelectionDisplay craftingData={craftingData} requestState={craftingRequestState} requestDispatch={dispatchCraftingRequest}/>

            <CalculateButton requestState={craftingRequestState} craftingData={craftingData}/>
        </div>
    );
}



var initialCraftingData = new CraftingData();

