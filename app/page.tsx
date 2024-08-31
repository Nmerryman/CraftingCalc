'use client'

import { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { LinkBtn } from "./components/button";
import { CraftingData, Process, Recipe, Resource, Stack, chainHuristicsStats, recipeChainNode } from "./crafting/units";
import { PopupEditor, togglePopupCallback } from "./components/popup";
import { CraftingAction, craftingReducer } from "./components/crafting";
import { OnEnterCall } from "./utils/onEnter";
import { CraftingRequestType, requestMenuReducer, SelectionDisplay } from "./components/selectionMenu";
import { ArrowPath, calcArrows, TextCircle } from "./components/svg";



let resetRequestStateFunc: Function;  // Ugly hack to set a function, but in avoids passing a function through a bunch of innocent props.

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
        "birch logs": new Resource("birch logs"),
        "plank dust": new Resource("plank dust")
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
        new Recipe("crafting table", [new Stack("stick", 3), new Stack("iron", 3)], [new Stack("pickaxe")]),
        new Recipe("crafting table", [new Stack("iron")], [new Stack("iron nuggets", 9)]),
        new Recipe("crafting table", [new Stack("planks")], [new Stack("stick", 2)]), 
        new Recipe("crafting table", [new Stack("oak logs")], [new Stack("planks", 2), new Stack("plank dust")]),
        new Recipe("crafting table", [new Stack("birch logs")], [new Stack("planks")]),
        // new Recipe("crafting table", [new Stack("oak logs", 2), new Stack("iron nuggets", 3)], [new Stack("pickaxe")])
    ]
}

function gtBackpackPreset(dispatch: Dispatch<CraftingAction>) {

    function addResources(r: Record<string, Resource>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Resource(name);
        }
    }

    function addProcesses(r: Record<string, Process>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Process(name);
        }
    }

    let resources = {}
    addResources(resources, ["leather", "stone", "tanned leather", "woven cotton", "bound leather", "string", "cotton", "cobble stone", "backpack"]);

    let processes = {}
    addProcesses(processes, ["crafting", "drying", "smelting"]);

    let recipes = [
        new Recipe("crafting", [new Stack("stone", 2), new Stack("leather", 4), new Stack("woven cotton", 2), new Stack("tanned leather", 1)], [new Stack("backpack", 1)]),
        new Recipe("smelting", [new Stack("cobble stone", 1)], [new Stack("stone", 1)]),
        new Recipe("drying", [new Stack("bound leather", 1)], [new Stack("tanned leather", 1)]),
        new Recipe("crafting", [new Stack("string", 5), new Stack("cotton", 4)], [new Stack("woven cotton", 1)]),
        new Recipe("crafting", [new Stack("cotton", 3)], [new Stack("string", 1)]),
        new Recipe("crafting", [new Stack("woven cotton", 1), new Stack("string", 4), new Stack("leather", 4)], [new Stack("bound leather", 1)])
    ]

    dispatch({type: "set resources", recordValue: resources});
    dispatch({type: "set processes", recordValue: processes});
    dispatch({type: "set recipes", arrayValue: recipes});

}

function PullPreset(craftingDispatch: Dispatch<CraftingAction>) {

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
    console.log(1)
    // craftingDispatch({type: "log"});

    if (value == "Empty" || value == "Default") {
        return
    } else if (value == "Dev") {
        craftingDispatch({type: "set resources", recordValue: devGenResources()});
        craftingDispatch({type: "set processes", recordValue: devGenProcesses()});
        craftingDispatch({type: "set recipes", arrayValue: devGenRecipes()});
    } else if (value == "backpack") {
        gtBackpackPreset(craftingDispatch);
    } else {
        console.log("Unkown preset set: " + value);
    }

    craftingDispatch({type: "log"});


}


function PresetMenu({craftingDispatch, craftingData}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData}) {
    // TODO this will check the backend status and if it exist, add a load/push preset menu buttons

    let availablePresetNamesStr = localStorage.getItem("_available");  // We assume there is no preset called _available. TODO hard code a check when setting?
    let availablePresetNames: Array<string> = [];

    if (!availablePresetNamesStr) {  // When I wake back up. Chop this out of the rendering function. It updates itself and loops
        // I'm probably putting way to much logic in the preset menu area in general. Just move more stuff closer to main

        // Add defaults
        // Dev
        craftingDispatch({type: "reset"});
        craftingDispatch({type: "set resources", recordValue: devGenResources()});
        craftingDispatch({type: "set processes", recordValue: devGenProcesses()});
        craftingDispatch({type: "set recipes", arrayValue: devGenRecipes()}); 
        localStorage.setItem("Dev", JSON.stringify(craftingData));
        availablePresetNames.push("Dev");

        // Empty
        craftingDispatch({type: "reset"});
        localStorage.setItem("Empty", JSON.stringify(craftingData));
        availablePresetNames.push("Empty");
        localStorage.setItem("Default", JSON.stringify(craftingData));
        availablePresetNames.push("Default")

        // Backpack
        craftingDispatch({type: "reset"});
        gtBackpackPreset(craftingDispatch);
        localStorage.setItem("Backpack", JSON.stringify(craftingData));
        availablePresetNames.push("Backpack");
        
    }

    return (
        <div className="w-full">
            <CheckBackendStatus/>
            <div className="text-black">
                <datalist id="preset_names">
                    {
                        availablePresetNames.map(name => {
                            return <option value={name}/>
                        })
                    }
                </datalist>
                <input autoComplete="on" list="preset_names" placeholder="Preset Name" id="preset_input" onKeyDown={OnEnterCall(PullPreset)}></input>
                <input type="submit" value="Load" onClick={() => {PullPreset(craftingDispatch)}} className="text-center bg-white px-8 outline"></input>
            </div>
            
        </div>
    )
}


function Header({craftingDispatch, craftingData}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData}) {
    return (
        <div>
            <div className="text-3xl font-bold underline w-screen bg-slate-950 flex justify-center">
                Crafting Site
            </div>
            <div className="flex justify-around ">
                <LinkBtn kind="link" text="Help" url="wiki" debugText="Clicked Help"/>
                <LinkBtn kind="link" text="Source" url="https://github.com/Nmerryman/CraftingCalc-Frontend"/>
                <PresetMenu craftingDispatch={craftingDispatch} craftingData={craftingData}/>
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



function SVGTest() {
    // 600 x 200 seems to be a decent svg size
    let startX = 0;
    let startY = 0;
    let width = window.innerWidth;
    let height = 0.5 * window.innerHeight;

    let tl = {x: startX, y: startY};
    let br = {x: startX + width, y: startY + height};
    console.log(`x: ${window.innerWidth}, y: ${window.innerHeight}`);
    console.log(window.screen)
    // console.log(window.)

    let aCir = {x: 20, y: 100};
    let bCir = {x: 250, y: 140};
    let lineCalc = calcArrows(aCir, bCir);
    return (
        <svg className="bg-white w-full h-[50vh]" viewBox={`${startX} ${startY} ${width} ${height}`}>
            <TextCircle center={aCir} text="A Circle"/>
            <TextCircle center={bCir} text="B Circle"/>
            <TextCircle center={tl} text=""/>
            <TextCircle center={br} text=""/>
            <ArrowPath start={lineCalc.a} end={lineCalc.b}/>
        </svg>
    )
}


class recipeCircle {
    constructor(public node: recipeChainNode, public x: number, public y: number, public base: boolean = false) {}
}

class recipeArrow {
    constructor(public from: recipeCircle, public to: recipeCircle) {}
}

type itemIndex = number;
type drawOffset = number;

function SVGHuristic({huristic}: {huristic: chainHuristicsStats}) {
    console.log(huristic);
    let boxStartX = 0;
    // let boxStartY = 0;
    let boxWidth = window.innerWidth;
    let widthPadding = boxWidth / 10;
    let screenHeight = 0.5;
    let boxHeight = window.innerHeight * screenHeight;
    let heightPadding = boxHeight / 10;
    let breadthOffset = (boxHeight - 2 * heightPadding) / huristic.fixed_src.hWidth;  // This one will need to get scaled better latter
    let depthOffset = (boxWidth - 2 * widthPadding) / (Math.max(huristic.longest_depth, 0));
    boxStartX += 2 * depthOffset;
    
    let nodeStateStack: Array<[recipeChainNode, itemIndex, drawOffset]> = [[huristic.fixed_src, 0, 0]];
    let circleStack: Array<recipeCircle> = []
    let lastPop = false;

    let circleCollection: Array<recipeCircle> = [];
    let arrowCollection: Array<recipeArrow> = [];

    while (nodeStateStack.length > 0) {
        // Grab the current top of the stack
        let currentNode = nodeStateStack.at(-1)!;
        let depth = nodeStateStack.length;
        
        let circle: recipeCircle;
        if (!lastPop) {
            // If we aren't returning from an exhausted node (Only happens on new node)
            circle = new recipeCircle(currentNode[0], widthPadding + depth * depthOffset, heightPadding + currentNode[2] + breadthOffset * currentNode[0].hWidth / 2);
            circleCollection.push(circle);
            if (circleStack.length > 1) {
                arrowCollection.push(new recipeArrow(circleStack.at(-1)!, circle));
            }
        } else {
            // Otherwise grab the circle node that we know already exists
            circle = circleStack.pop()!;
        }

        if (currentNode[1] < currentNode[0].src.items.length) {
            // If we haven't exhausted our current node
            // Calculate the breadth offset currently in place
            let currentBreadth = 0;
            for (let itemNum = 0; itemNum < currentNode[1]; itemNum++) {
                currentBreadth += currentNode[0].src.items[itemNum].variants[0].hWidth;
            }
            console.log(currentBreadth)
            // Store the next child on the stack
            nodeStateStack.push([currentNode[0].src.items[currentNode[1]].variants[0], 0, currentNode[2] + currentBreadth * breadthOffset]);
            circleStack.push(circle);
            currentNode[1]++;
            lastPop = false;
        } else {
            if (currentNode[1] == 0) {  // This is the end of the recipe line
                let items = huristic.data.getRecipe(currentNode[0].rId)!.inputResources;
                for (let itemIndex = 0; itemIndex < items.length; itemIndex++) { // Hack on circles for the final items in the chain
                    let stack = items[itemIndex];
                    let tempRecipeNode = new recipeChainNode(0, stack.resourceName)
                    tempRecipeNode.hRatio = stack.amount * circle.node.hRatio;  // Store the needed value in the node storage

                    let finalCircle = new recipeCircle(tempRecipeNode, widthPadding + (depth + 1) * depthOffset, heightPadding + currentNode[2] + breadthOffset * (itemIndex + 0.5), true);

                    circleCollection.push(finalCircle);
                    arrowCollection.push(new recipeArrow(circle, finalCircle));
                }

            }
            nodeStateStack.pop();
            lastPop = true;
        }
    }

    return (
        <svg className={`bg-white w-full h-[${Math.round(boxHeight)}px]`} viewBox={`${boxStartX} 0 ${boxWidth} ${boxHeight}`}>
            {circleCollection.map((cir, i) => {
                if (i != 0) { // Remove the root holding node that we don't actually need (for now.)
                    let total: number;
                    if (!cir.base) {
                        let goalStack = huristic.data.getRecipe(cir.node.rId)!.outputResources.find(rec => rec.resourceName == cir.node.goal);
                        total = goalStack!.amount * cir.node.hRatio;
                    } else {
                        total = cir.node.hRatio
                    }
                    return <TextCircle center={{x: cir.x, y: cir.y}} text={`${total}x of ${cir.node.goal}`} key={[cir.node.goal, cir.x, cir.y].join(" ")}/>
                }
            })}
            {arrowCollection.map((arrow) => {
                let lineVals = calcArrows(arrow.from, arrow.to);
                return <ArrowPath start={lineVals.b} end={lineVals.a} key={[lineVals.a.x, lineVals.a.y, lineVals.b.x, lineVals.b.y].join(" ")}/>
            })}
            {/* Debug circles */}
            <TextCircle center={{x: boxStartX, y: 0}} text=""/>
            <TextCircle center={{x: boxStartX + boxWidth, y: boxHeight}} text=""/>
            
        </svg>
    )
}

// This wraps the component so that it can be generated after everything else loads
function DEVSVGHuristic({data, state}: {data: CraftingData, state: boolean}) {
    if (state) {
        let huristic = data.calcChain(["pickaxe"])[3];
        return (
            <>
            <SVGHuristic huristic={huristic}/>
            <HuristicStats huristic={huristic}/>
            </>
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

    const [svgState, setSvgState] = useState(false);  // For dev automation

    useEffect(() => {PullPreset(dispatchData); setSvgState(true);}, []);  // Run update once

    return (
        <div className="">
            <Header craftingDispatch={dispatchData} craftingData={craftingData}/>
            <LogButton text="log craftingData" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/>
            <PopupEditor craftingDispatch={dispatchData} craftingData={craftingData}></PopupEditor>
            <SelectionDisplay craftingData={craftingData} requestState={craftingRequestState} requestDispatch={dispatchCraftingRequest}/>

            {/* <SVGTest/> */}
            <CalculateButton requestState={craftingRequestState} craftingData={craftingData}/>
            {/* <LinkBtn kind="callback" text="test thing" callback={() => {
                // let best = craftingData.bestHuristic(craftingData.calcChain(["pickaxe"]), craftingData.defaultHuristic);
                console.log(craftingData.calcChain(["pickaxe"]));
                // console.log(best);
                }}/> */}
            {/* <DEVSVGHuristic data={craftingData} state={svgState}/> */}
        </div>
    );
}



var initialCraftingData = new CraftingData();

