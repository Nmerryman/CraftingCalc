'use client'

import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData } from "./crafting/units";
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


function devGenResources() {

    return {

    }
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
        craftingDispatch({type: "set resources", recordValue: {}})
    }


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


export default function Main() {
    const [craftingData, dispatchData] = useReducer(craftingReducer, initialCraftingData);
    const [popupState, setPopupState] = useState(false);

    return (
        <div className="">
            <Header craftingDispatch={dispatchData}/>
            <LogButton text="testing" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <PopupEditor popupState={popupState} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
        </div>
    );
}



var initialCraftingData = new CraftingData();

