import { useState } from "react";
import { Recipe, Resource, Stack } from "../crafting/units"
import Popup from "reactjs-popup";
import { PermMeta } from "../crafting/solver";


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


export function ItemPopupText({resource}: {resource: Resource}) {
    const [dummy, setDummy] = useState(false);  // This exists to reload the component on checkbox change to show it did something
    const toggleDummy = () => setDummy(!dummy);
    return (
        <div>
            <label>
                <input type="checkbox" checked={resource.isDisabled} onChange={() => {resource.isDisabled = !resource.isDisabled; toggleDummy()}}/>Disable the resource
            </label>
            <br/>
            <label>
                <input type="checkbox" checked={resource.isAvailable} onChange={() => {resource.isAvailable = !resource.isAvailable, toggleDummy()}}/>Is the resource available?
            </label>
            <br/>
            <label>
                <input type="checkbox" checked={resource.isBase} onChange={() => {resource.isBase = !resource.isBase, toggleDummy()}}/>Treat resource as base
            </label>
        </div>
    )
}


export function DisplayRecipe({recipe, ratio = 1}: {recipe: Recipe, ratio: number}) {
    // Now calculates and inserts the ratio.
    return (
        <div>
            Process: {recipe.processUsed}({ratio}) = {recipe.outputResources.map(stack => <DisplayStackInline stack={new Stack(stack.resourceName, stack.amount * ratio)} key={stack.resourceName}/>)}
            <div>
                {recipe.inputResources.map(stack => <DisplayStack stack={new Stack(stack.resourceName, stack.amount * ratio)} key={stack.resourceName}/>)}
            </div>
        </div>
    )
}


function ProcessesUsedText({goalName, permMeta}: {goalName: string, permMeta: PermMeta}) {
    // console.log(goalName)
    // console.log(huristic.recipesUsed[goalName])
    if (permMeta.nodeCache[goalName].children.length > 1) {
        console.error(`${goalName} resource node has too many recipe children.`);
    }
    const goalRecipeNode = permMeta.nodeCache[goalName].children[0];
    const recipe = permMeta.craftingData.get(goalRecipeNode.name) as Recipe;
    return (
        <div>
            <h1>{`Craft ${goalName} via`}</h1>
            <DisplayRecipe recipe={recipe} ratio={goalRecipeNode.countRatio}/>
        </div>
    )
}


export function CTBStackPopup({pState, pClose, stack, permMeta, showProcess}: {pState: boolean, pClose: () => void, stack: Stack, permMeta: PermMeta, showProcess: boolean}) {
    let resourceVal = permMeta.craftingData.resources[stack.resourceName];
    return (
        <Popup open={pState} onClose={pClose}>
            <div className="popup-content text-black">
                <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                <ItemPopupText resource={resourceVal}/>
                {(showProcess) ? <ProcessesUsedText goalName={stack.resourceName} permMeta={permMeta}/> : <></>}
            </div>
            <div className="flex">
                <button className="popup_button ml-auto" onClick={pClose}>Done</button>
            </div>
        </Popup>
    )
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
