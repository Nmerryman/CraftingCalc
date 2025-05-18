'use client'

import 'reflect-metadata'
import { ChangeEvent, Dispatch, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData, Stack } from "./crafting/units";
import { PopupEditor, togglePopupCallback } from "./components/modifyDataPopup";
import { CraftingAction, craftingReducer } from "./components/crafting";
import { OnEnterCall } from "./utils/onEnter";
import { requestMenuReducer, SelectionDisplay } from "./components/selectionMenu";
import { PresetConfig } from "./components/presetConfig";
import { compressedCobblePreset, gtBackpackPreset, gtBlastFurnace, mmHDPEPellet, vanillaPickaxePreset } from "./crafting/defaultPresets";
import { HuristicsInfoDisplay } from "./components/huristics";
import { TempSolver } from './crafting/solver';



let resetRequestStateFunc: Function;  // Ugly hack to set a function, but in avoids passing a function through a bunch of innocent props/components.


// function CheckBackendStatus() {
//     // Actually tries to fetch and update the status text
//     const [backendStatus, setBackendStatus] = useState("Unchecked");

//     function netCheck() {
//         fetch("http://p8000.hydris.dev/test", {cache: "no-store"})  // no-store to make sure that we don't cache any status (Probably doesn't matter though)
//             .then(resp => {
//                 setBackendStatus("Server is alive!")
//             })
//             .catch(err => {
//                 console.log(err);
//                 setBackendStatus("Backend target is unreachable.")
//             })
//     }

//     return (
//         <div className="my-1">
//             <input type="button" className="checkloadconfig" value="Check" onClick={netCheck}/>
//             {backendStatus}
//         </div>
//     )
// }


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

    let presetNames: Array<string> = JSON.parse(localStorage.getItem("_available_local")!);
    console.log(presetNames)

    if (presetNames.includes(value)) {  // We check this because it's my "best practices", but we can bypass this and just check the value for undifined directly.
        craftingDispatch({type: "replace all", anyValue: JSON.parse(localStorage.getItem(value)!)})
    } else {
        console.log("Unkown preset set: " + value);
    }

    // craftingDispatch({type: "log"});

}


function ensureDefaultPresets() {
    
    // DEBUG clear
    localStorage.clear();
    
    let availablePresetNamesStr = localStorage.getItem("_available_local");  // We assume there is no preset called _available. TODO hard code a check when setting?
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

        // Backpack
        fakeDispatch({type: "reset"});
        gtBackpackPreset(fakeDispatch);
        localStorage.setItem("Backpack", JSON.stringify(tempData));
        availablePresetNames.push("Backpack");

        // BBF
        fakeDispatch({type: "reset"});
        gtBlastFurnace(fakeDispatch);
        localStorage.setItem("BBF", JSON.stringify(tempData));
        availablePresetNames.push("BBF");

        // MM HDPE Pellet 
        fakeDispatch({type: "reset"});
        mmHDPEPellet(fakeDispatch);
        localStorage.setItem(tempData._meta.name, JSON.stringify(tempData));
        availablePresetNames.push(tempData._meta.name);

        // Compressed Cobblestone
        fakeDispatch({type: "reset"});
        compressedCobblePreset(fakeDispatch);
        localStorage.setItem("Comp Cobble", JSON.stringify(tempData));
        availablePresetNames.push("Comp Cobble");

        
        // Store the currently available items
        localStorage.setItem("_available_local", JSON.stringify(availablePresetNames));

    }
}


// Preset Menu of Nav Bar
function PresetMenu({craftingDispatch, craftingData, localAvailPresetNames, setLocalAvailPresetNames}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData, localAvailPresetNames: string, setLocalAvailPresetNames: Dispatch<string>}) {
    // TODO this will check the backend status and if it exist, add a load/push preset menu buttons
    return (
        <div className="w-full">
            {/* <CheckBackendStatus/> */}
            <div className="text-black">
                <input className="pl-2" autoComplete="on" list="preset_names" placeholder="Preset Name" id="preset_input" onKeyDown={OnEnterCall(() => PullPreset(craftingDispatch))}></input>
                <input type="submit" value="Load" onClick={() => {PullPreset(craftingDispatch)}} className="checkloadconfig ml-1"></input>
                <PresetConfig craftingData={craftingData} craftingDispatch={craftingDispatch} localAvailPresetNames={localAvailPresetNames} setLocalAvailPresetNames={setLocalAvailPresetNames}/>
            </div>
        </div>
    )
}


// Header and Nav Bar
function Header({craftingDispatch, craftingData, localAvailPresetNames, setLocalAvailPresetNames}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData, localAvailPresetNames: string, setLocalAvailPresetNames: Dispatch<string>}) {
    return (
        <div>
            <div className="text-3xl font-bold underline w-screen bg-slate-700 flex justify-center pb-2">
                Crafting Site
            </div>
            <div className="flex justify-around ">
                <LinkBtn kind="link" text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn kind="link" text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
                <PresetMenu craftingDispatch={craftingDispatch} craftingData={craftingData} localAvailPresetNames={localAvailPresetNames} setLocalAvailPresetNames={setLocalAvailPresetNames}/>
            </div>
        </div>
    )
}


function LogButton({text, dis, popupToggle}: {text: string, dis: Dispatch<CraftingAction>, popupToggle: () => void}) {
    return (
        <input type="button" value={text} onClick={() => {dis({type: "log"}); popupToggle()}}/>
    )
}


// Homepage Displays and general root
export default function Main() {
    const [craftingData, dispatchData] = useReducer(craftingReducer, initialCraftingData);
    const [popupState, setPopupState] = useState(false);

    var initialcraftingRequests: Record<string, Stack> = {}
    const [craftingRequestState, dispatchCraftingRequest] = useReducer(requestMenuReducer, initialcraftingRequests)
    resetRequestStateFunc = () => dispatchCraftingRequest({type: "reset", name: ""})  // load the global shortcut
    const [localAvailPresetNames, setLocalAvailPresetNames] = useState("");  // By storing the value as a json string, we don't need to use a reducer given that we alway deserialize it.
    let pVals: Array<string> = [];
    if (localAvailPresetNames) {
        pVals = JSON.parse(localAvailPresetNames);
    }

    const testResourceName = "Iron Pickaxe";
    useEffect(() => {
        ensureDefaultPresets(); 
        setLocalAvailPresetNames(localStorage.getItem("_available_local")!)
        PullPreset(dispatchData); 
        // dispatchCraftingRequest({type: "toggle", name: "HDPE Pellet"})
        dispatchCraftingRequest({type: "toggle", name: testResourceName})
    }, []);  // Run update once after main page load

    return (  // we can define the datalist early so that it can be used everywhere.
        <div className="">
            {(localAvailPresetNames) ?
                <datalist id="preset_names">
                    {
                        pVals.map(name => {
                            return <option value={name} key={name}/>
                        })
                    }
                </datalist>
                :
                <></>
            }
            <button onClick={() => {
                craftingData.runHealthChecks();
                let tempSolver = new TempSolver(craftingData);
                console.log("Solver: ", tempSolver);
                console.log("Solved: ", tempSolver.solve([new Stack(testResourceName, 1)]));
            }}>test temp solver</button>
            <Header craftingDispatch={dispatchData} craftingData={craftingData} localAvailPresetNames={localAvailPresetNames} setLocalAvailPresetNames={setLocalAvailPresetNames}/>
            <LogButton text="log craftingData" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            {/* <PopupEditor craftingDispatch={dispatchData} craftingData={craftingData}></PopupEditor> */}
            <SelectionDisplay craftingData={craftingData} requestState={craftingRequestState} requestDispatch={dispatchCraftingRequest}/>
            <button onClick={() => craftingData.healthCheckBaseItems()}>(Health check debug button)</button>
            <HuristicsInfoDisplay requestState={craftingRequestState} craftingData={craftingData}/>
        </div>
    );
}



var initialCraftingData = new CraftingData();

