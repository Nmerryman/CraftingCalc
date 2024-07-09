'use client'

import { useEffect } from "react";
import { KeyboardEvent } from "react";
import { LinkBtn } from "./components/button";


function CheckBackendStatus() {
    // Actually tries to fetch and update the status text
    return (
        <div>
            Backend check missing.
        </div>
    )
}


function PullPreset() {
    const element = document.getElementById("preset_input") as HTMLInputElement;
    var value = element?.value;
    if (!value) {
        value = "Dev";
    }
    console.log("Preset is " + value);
}


function OnEnterCall(func: Function) {
    return (ele: KeyboardEvent) => {
        if (ele.key == "Enter") {
            func()
        }
    }
}


function PresetMenu() {
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
                <input type="submit" value="Load" onClick={() => {PullPreset()}} className="text-center bg-white px-8 outline"></input>
            </div>
            
        </div>
    )
}


function Header() {
    return (
        <div>
            <div className="text-3xl font-bold underline w-screen bg-slate-950 flex justify-center">
                Crafting Site
            </div>
            <div className="flex justify-around ">
                <LinkBtn text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
                <PresetMenu/>
            </div>
        </div>
    )
}


function FinalItemSelector() {
    return (
        <div>

        </div>
    )
}



export default function Main() {

    return (
        <div className="">
            <Header/>
            <h1>TEXT HERE</h1>
        </div>
    );
}

