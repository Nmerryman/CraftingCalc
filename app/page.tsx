'use client'

import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData, Process, Recipe, Resource, Stack } from "./crafting/units";
import { PopupEditor, togglePopupCallback } from "./components/popup";
import { CraftingAction, craftingReducer } from "./components/crafting";
import { OnEnterCall } from "./utils/onEnter";
import { CraftingRequestType, requestMenuReducer, SelectionDisplay } from "./components/selectionMenu";
import { ArrowPath, calcArrows, TextCircle } from "./components/svg";


function CheckBackendStatus() {
    // Actually tries to fetch and update the status text
    return (
        <div>
            Backend check missing.
        </div>
    )
}


// These three functions exist to make dev testing not as messy.
function devGenResources(): Record<string, Resource> {
    return {
        "stick": new Resource("stick"),
        "iron": new Resource("iron"),
        "iron ore": new Resource("iron ore", {isBase: true}),
        "pickaxe": new Resource("pickaxe"),
        "iron nuggets": new Resource("iron nuggets"),
        "planks": new Resource("planks"),
        "oak logs": new Resource("oak logs"),
        "birch logs": new Resource("birch logs")
    }
}

function devGenProcesses(): Record<string, Process> {
    return {
        "crafting table": new Process("crafting table"),
        "furnace": new Process("furnace")
    }
}

function devGenRecipes(): Array<Recipe> {
    return [
        new Recipe("furnace", [new Stack("iron ore")], [new Stack("iron")]),
        new Recipe("crafting table", [new Stack("iron nuggets", 9)], [new Stack("iron")]),
        new Recipe("crafting table", [new Stack("stick", 2), new Stack("iron", 3)], [new Stack("pickaxe")]),
        new Recipe("crafting table", [new Stack("iron")], [new Stack("iron nuggets", 9)]),
        new Recipe("crafting table", [new Stack("planks")], [new Stack("stick")]), 
        new Recipe("crafting table", [new Stack("oak logs")], [new Stack("planks")]),
        new Recipe("crafting table", [new Stack("birch logs")], [new Stack("planks")])
    ]
}


function PullPreset(craftingDispatch: Dispatch<CraftingAction>) {
    const element = document.getElementById("preset_input") as HTMLInputElement;
    var value = element?.value;
    if (!value) {
        value = "Dev";
    }
    console.log("Preset is " + value);
    craftingDispatch({type: "reset"});
    // craftingDispatch({type: "log"});

    if (value == "Empty" || value == "Default") {
        return
    } else if (value == "Dev") {
        craftingDispatch({type: "set resources", recordValue: devGenResources()});
        craftingDispatch({type: "set processes", recordValue: devGenProcesses()});
        craftingDispatch({type: "set recipes", arrayValue: devGenRecipes()});
    } else {
        console.log("Unkown preset set: " + value);
    }

    craftingDispatch({type: "log"});


}


function PresetMenu({craftingDispatch}: {craftingDispatch: Dispatch<CraftingAction>}) {
    // TODO this will check the backend status and if it exist, add a load/push preset menu buttons

    // useEffect(() => {
    //     // The default is set to dev while we are in dev mode for now
    //     const element = document.getElementById("preset_input") as HTMLInputElement;
    //     element.value = "Dev";
    //     PullPreset(craftingDispatch);
    // })

    return (
        <div className="w-full">
            <CheckBackendStatus/>
            <div className="text-black">
                <datalist id="preset_names">
                    <option value="Dev"/>
                    <option value="Empty"/>
                    <option value="Default"/>
                </datalist>
                <input autoComplete="on" list="preset_names" placeholder="Preset Name" id="preset_input" onKeyDown={OnEnterCall(PullPreset)}></input>
                <input type="submit" value="Load" onClick={() => {PullPreset(craftingDispatch)}} className="text-center bg-white px-8 outline"></input>
            </div>
            
        </div>
    )
}


function Header({craftingDispatch}: {craftingDispatch: Dispatch<CraftingAction>}) {
    return (
        <div>
            <div className="text-3xl font-bold underline w-screen bg-slate-950 flex justify-center">
                Crafting Site
            </div>
            <div className="flex justify-around ">
                <LinkBtn kind="link" text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn kind="link" text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
                <PresetMenu craftingDispatch={craftingDispatch}/>
            </div>
        </div>
    )
}


function LogButton({text, dis, popupToggle}: {text: string, dis: Dispatch<CraftingAction>, popupToggle: () => void}) {
    return (
        <input type="button" value={text} onClick={() => {dis({type: "log"}); popupToggle()}}/>
    )
}


function CalculateButton({requestState}: {requestState: CraftingRequestType}) {
    if (Object.keys(requestState).length > 0) {
        return (
            <div className="flex justify-center">
                <LinkBtn kind="callback" text="Calculate" callback={() => {console.log("Start calculating, probably by updating some state.")}}/>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}



function SVGTest() {
    // 600 x 200 seems to be a decent svg size
    let aCir = {x: 20, y: 100};
    let bCir = {x: 250, y: 140};
    let lineCalc = calcArrows(aCir, bCir);
    return (
        <svg className="bg-white w-full h-[50vh]" viewBox="0 0 600 200">
            <TextCircle center={aCir} text="A Circle"/>
            <TextCircle center={bCir} text="B Circle"/>
            <ArrowPath start={lineCalc.a} end={lineCalc.b}/>
        </svg>
    )
}


export default function Main() {
    const [craftingData, dispatchData] = useReducer(craftingReducer, initialCraftingData);
    const [popupState, setPopupState] = useState(false);

    var initialcraftingRequests: Record<string, Stack> = {}
    const [craftingRequestState, dispatchCraftingRequest] = useReducer(requestMenuReducer, initialcraftingRequests)

    useEffect(() => {PullPreset(dispatchData)}, []);  // Run update once

    return (
        <div className="">
            {/* <Header craftingDispatch={dispatchData}/>
            <LogButton text="testing" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <PopupEditor popupState={popupState} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <SelectionDisplay craftingData={craftingData} requestState={craftingRequestState} requestDispatch={dispatchCraftingRequest}/>

            <SVGTest/>
            <CalculateButton requestState={craftingRequestState}/> */}
            <LinkBtn kind="callback" text="test thing" callback={() => {
                craftingData.calcChain("pickaxe")}}/>
        </div>
    );
}



var initialCraftingData = new CraftingData();

