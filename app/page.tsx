'use client'

import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData, Process, Recipe, Resource, Stack } from "./crafting/units";
import { PopupEditor, togglePopupCallback } from "./components/popup";
import { CraftingAction, craftingReducer } from "./components/crafting";
import { OnEnterCall } from "./utils/onEnter";


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
        "iron ore": new Resource("iron ore"),
        "pickaxe": new Resource("pickaxe"),
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
        new Recipe("furnace", [new Stack("iron ore")], [new Stack("iron")])
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
    craftingDispatch({type: "log"});

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
    //     PullPreset();
    // })

    return (
        <div>
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
                <LinkBtn text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
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


function ListResources({craftingData}: {craftingData: CraftingData}) {
    return (
        <ul>
            <span className="font-bold">Resource List</span>
            {Object.keys(craftingData.resources).map((rkey) => {return <li key={craftingData.resources[rkey].name}>{craftingData.resources[rkey].name}</li>})}
        </ul>
    )
}


function ListProcesses({craftingData}: {craftingData: CraftingData}) {
    return (
        <ul>
            <span className="font-bold">Process List</span>
            {Object.keys(craftingData.processes).map((pkey) => {return <li key={craftingData.processes[pkey].name}>{craftingData.processes[pkey].name}</li>})}
        </ul>
    )
}





function SelectionDisplay({craftingData}: {craftingData: CraftingData}) {
    return (
        <div className="flex justify-around">
            <ListResources craftingData={craftingData}/>
            <ListProcesses craftingData={craftingData}/>
        </div>
    )
}


export default function Main() {
    const [craftingData, dispatchData] = useReducer(craftingReducer, initialCraftingData);
    const [popupState, setPopupState] = useState(false);

    return (
        <div className="">
            <Header craftingDispatch={dispatchData}/>
            <LogButton text="testing" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <PopupEditor popupState={popupState} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <SelectionDisplay craftingData={craftingData}/>
        </div>
    );
}



var initialCraftingData = new CraftingData();

