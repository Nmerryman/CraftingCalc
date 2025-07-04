import { useState } from "react";
import { Process, Recipe, Resource, Stack } from "../crafting/units"
import Popup from "reactjs-popup";
import { PermMeta, StepNodeType } from "../crafting/solver";


function DisplayStackInline({stack}: {stack: Stack}) {
    return (
        <span>
            {stack.amount}x {stack.resourceName}
        </span>
    )
}

// Litterally just display the stack info
// Not sure if the div is good?
export function DisplayStack({stack}: {stack: Stack}) {
    return (
        <div>
            <DisplayStackInline stack={stack}/>
        </div>
    )
}


export function ItemPopupText({resource}: {resource: Resource | Recipe}) {
    const [dummy, setDummy] = useState(false);  // This exists to reload the component on checkbox change to show it did something
    const toggleDummy = () => setDummy(!dummy);
    return (
        <div>
            <label>
                <input type="checkbox" checked={resource.isDisabled} onChange={() => {resource.isDisabled = !resource.isDisabled; toggleDummy()}}/>Disable the resource/recipe
            </label>
            <br/>
            <label>
                <input type="checkbox" checked={resource.isBase} onChange={() => {resource.isBase = !resource.isBase, toggleDummy()}}/>Treat resource/recipe as base
            </label>
        </div>
    )
}


export function DisplayRecipe({recipe, ratio = 1}: {recipe: Recipe, ratio: number}) {
    // Now calculates and inserts the ratio.
    return (
        <div>
            <div className="highlight_bg">
                {recipe.inputResources.map(stack => <div key={stack.resourceName}><DisplayStackInline stack={new Stack(stack.resourceName, stack.amount * ratio)} key={stack.resourceName}/> ({stack.amount}x per)</div>)}
            </div>
            &darr;
            <div className="highlight_bg">
            Into: {recipe.processUsed}({ratio}x) 
            </div>
            &darr;
            <div className="highlight_bg">
                {recipe.outputResources.map(stack => <div key={stack.resourceName}><DisplayStackInline stack={new Stack(stack.resourceName, stack.amount * ratio)} key={stack.resourceName}/> ({stack.amount}x per)</div>)}
            </div>
        </div>
    )
}


function ProcessesUsedText({nodeKey, permMeta}: {nodeKey: string, permMeta: PermMeta}) {
    // RecipeUsedText may be more accurate
    const stepNode = permMeta.nodeCache[nodeKey];
    let stepRatio = 0;
    let recipe = null;
    if (stepNode.type == StepNodeType.RECIPE) {
        recipe = permMeta.craftingData.get(nodeKey) as Recipe;
        stepRatio = stepNode.countRatio;
    } else {
        const childNode = stepNode.children[0];
        recipe = permMeta.craftingData.get(childNode.name) as Recipe;
        stepRatio = childNode.countRatio;
    }

    return (
        <div>
            <h1>{`Craft recipe ${nodeKey} via`}</h1>
            <DisplayRecipe recipe={recipe} ratio={stepRatio}/>
        </div>
    )
}


export function CTBStackPopup({pState, pClose, stack, permMeta, showProcess}: {pState: boolean, pClose: () => void, stack: Stack, permMeta: PermMeta, showProcess: boolean}) {
    let resourceVal = permMeta.craftingData.resources[stack.resourceName];
    if (resourceVal != undefined) {
        return (
            <Popup className="narrow-popup" open={pState} onClose={pClose}>
                <div className="">
                    <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                    <ItemPopupText resource={resourceVal}/>
                    {(showProcess) ? <ProcessesUsedText nodeKey={stack.resourceName} permMeta={permMeta}/> : <></>}
                </div>
                <div className="flex">
                    <button className="dark_thing clickable ml-auto mt-1" onClick={pClose}>Done</button>
                </div>
            </Popup>
        )
    } else {
        return (
            <Popup className="narrow-popup" open={pState} onClose={pClose}>
                <div className="">
                    <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                    <ItemPopupText resource={permMeta.craftingData.recipes[stack.resourceName as unknown as number]}/>
                    <ProcessesUsedText nodeKey={stack.resourceName} permMeta={permMeta}/>
                </div>
                <div className="flex">
                    <button className="popup_button ml-auto" onClick={pClose}>Done</button>
                </div>
            </Popup>
        )
    }
}


// An individual item in the CTB
export function DisplayCTBItemStack({stack, permMeta, showProcess = true}: {stack: Stack, permMeta: PermMeta, showProcess?: boolean}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <CTBStackPopup pState={popupState} pClose={disablePopup} stack={stack} permMeta={permMeta} showProcess={showProcess}/>
            <label>
            <input type="checkbox" className="mr-1"/>
            {stack.amount}x {stack.resourceName}
            </label>
        </div>
    )
}
