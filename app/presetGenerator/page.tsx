'use client'

import 'reflect-metadata'
import { ChangeEvent, Dispatch, useReducer, useState } from "react"
import { CraftingData, Resource, Process, Recipe, Stack, craftingMetaData } from "../crafting/units";
import { craftingReducer } from "../components/crafting";
import Popup from 'reactjs-popup';


function Header() {
    return (
        <div className="flex justify-center">
            <h1>
                Preset generator
            </h1>
        </div>
    )
}

function Editor({codeState, setCodeState, setSaveAvail}: {codeState: string, setCodeState: Dispatch<string>, setSaveAvail: Dispatch<boolean>}) {
    function textChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setCodeState(event.target.value);
        setSaveAvail(false);
    }

    return (
        <textarea value={codeState} onChange={textChange} className='w-5/6 h-5/6 readable_text' placeholder='Insert Code here'/>
    )
}


let defaultText = `let data = arguments[0];  // Connection to the outside

// This code isn't necessarily the best, but just to show examples of what is possible.
let resources = {
    "Stick": new Resource("Stick"),
    "Iron Ingot": new Resource("Iron Ingot"),
    "Iron Ore": new Resource("Iron Ore", {isBase: true}),
    "Iron Pickaxe": new Resource("Iron Pickaxe"),
    "Iron Nugget": new Resource("Iron Nugget"),
    "Iron Block": new Resource("Iron Block"),
    "Plank": new Resource("Plank"),
    "Oak Log": new Resource("Oak Log"),
    "Birch Log": new Resource("Birch Log"),
    "Plank Dust": new Resource("Plank Dust"),
    "Bucket": new Resource("Bucket"),
}
resources["Oak Log"].isBase = true;
resources["Birch Log"].isBase = true;
resources["Iron Block"].isBase = true;
resources["Iron Block"].isDisabled = true;

let processes = {
    "Crafting Table": new Process("Crafting Table"),
    "Furnace": new Process("Furnace")
}

let recipes = [
    new Recipe("Furnace", [new Stack("Iron Ore")], [new Stack("Iron Ingot")]),
    new Recipe("Crafting Table", [new Stack("Iron Nugget", 9)], [new Stack("Iron Ingot")]),
    new Recipe("Crafting Table", [new Stack("Iron Block")], [new Stack("Iron Ingot", 9)]),
    new Recipe("Crafting Table", [new Stack("Stick", 3), new Stack("Iron Ingot", 3)], [new Stack("Iron Pickaxe")]),
    new Recipe("Crafting Table", [new Stack("Iron Ingot")], [new Stack("Iron Nugget", 9)]),
    new Recipe("Crafting Table", [new Stack("Plank")], [new Stack("Stick", 2)]), 
    new Recipe("Crafting Table", [new Stack("Oak Log")], [new Stack("Plank", 2), new Stack("Plank Dust")]),
    new Recipe("Crafting Table", [new Stack("Birch Log")], [new Stack("Plank")]),
    new Recipe("Crafting Table", [new Stack("Iron Ingot", 3)], [new Stack("Bucket")]),
    new Recipe("Crafting Table", [new Stack("Oak Log", 2), new Stack("Iron Nugget", 3)], [new Stack("Iron Pickaxe")])
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Pickaxe"};
`


export default function Main() {
    const [codeText, setCodeText] = useState(defaultText);
    const [saveAvail, setSaveAvail] = useState(false);
    const [craftingData, craftingDispatch] = useReducer(craftingReducer, new CraftingData);
    const [firstTry, setFirstTry] = useState(true);
    const [validData, setValidData] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const popupClose = () => setPopupOpen(false);

    function runFunction() {
        setFirstTry(false);

        const func = new Function(codeText);  // It's ok for this to error in the console. I'll just make sure that others know where to look.
        let container = {resources: {}, processes: {}, recipes: [], meta: {}, _meta: {}};
        try {
            func(container)
        } catch {
            console.log("Syntax error in provided script.");
            return;
        }
        container._meta = container.meta;
        craftingDispatch({type: "replace all", anyValue: container});
        const nextData = craftingReducer(craftingData, {type: "replace all", anyValue: container})  // Hack but this should work
        console.log(nextData);
        
        nextData.runHealthChecks();
        if (nextData.passedHealthCheck) {
            setSaveAvail(true);
            setValidData(true);
        } else {
            setValidData(false);
        }
    }

    function saveData() {
        setPopupOpen(true);
    }

    if (typeof window !== "undefined") {
        (window as any).Resource = Resource;
        (window as any).Process = Process;
        (window as any).Recipe = Recipe;
        (window as any).Stack = Stack;
    }


    return (
        <div className='flex flex-col items-center h-screen'>
            <Header/>
            <Editor codeState={codeText} setCodeState={setCodeText} setSaveAvail={setSaveAvail}/>
            <Popup open={popupOpen} onClose={popupClose}>
                <div className='readable_text border border-black'>
                    <div>Data in json form:</div>
                    <input className='border border-black' defaultValue={JSON.stringify(craftingData)}/>
                </div>
            </Popup>
            <div>
                {/* <button className='input_button' onClick={() => console.log(craftingData)}>Log craftingdata</button> */}
                <button className='input_button' onClick={runFunction}>Validate code</button>
                {
                (saveAvail) ? <button className='input_button' onClick={saveData}>Save generated preset (to clipboard)</button> : <></>
                }
            </div>
            {
            (!firstTry) ?
                (validData) ? <div>Code generated a valid object</div> : <div>Code failed to create a valid object. Check the console for error message (f12)</div>
                : <></>
            }
        </div>
    )
}