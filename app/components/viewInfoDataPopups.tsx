import { useState } from "react";
import { chainHuristicsStats, CraftingData, Recipe, Resource, Stack } from "../crafting/units"
import Popup from "reactjs-popup";
import { cloneDeep } from "lodash";


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


export function DisplayRecipe({recipe, ratio}: {recipe: Recipe, ratio: number}) {
    return (
        <div>
            Process: {recipe.processUsed}({ratio}) = {recipe.outputResources.map(stack => <DisplayStackInline stack={stack} key={stack.resourceName}/>)}
            <div>
                {recipe.inputResources.map(stack => <DisplayStack stack={stack} key={stack.resourceName}/>)}
            </div>
        </div>
    )
}


function ProcessesUsedText({goalName, huristic}: {goalName: string, huristic: chainHuristicsStats}) {
    // console.log(goalName)
    // console.log(huristic.recipesUsed[goalName])
    return (
        <div>
            <h1>{`Craft ${goalName} via`}</h1>
            {Object.keys(huristic.recipesUsed[goalName]).map((rId) => {
                let id = parseInt(rId);
                let recipe = cloneDeep(huristic.data.getRecipe(id)!);
                let ratio = huristic.recipesUsed[goalName][id];
                // console.log(id, recipe, ratio)
                for (let r of recipe.inputResources) {
                    r.amount *= ratio;
                }
                for (let r of recipe.outputResources) {
                    r.amount *= ratio;
                }
                return (
                    <div key={rId}>
                        <DisplayRecipe recipe={recipe} ratio={ratio}/>
                    </div>
                )
            })}
        </div>
    )
}


export function CTBStackPopup({pState, pClose, stack, huristic, showProcess}: {pState: boolean, pClose: () => void, stack: Stack, huristic: chainHuristicsStats, showProcess: boolean}) {
    let resourceVal = huristic.data.resources[stack.resourceName];
    return (
        <Popup open={pState} onClose={pClose}>
            <div className="popup-content text-black">
                <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                <ItemPopupText resource={resourceVal}/>
                {(showProcess) ? <ProcessesUsedText goalName={stack.resourceName} huristic={huristic}/> : <></>}
            </div>
            <div className="flex">
                <button className="popup_button ml-auto" onClick={pClose}>Done</button>
            </div>
        </Popup>
    )
}


// An individual item in the CTB
export function DisplayCTBItemStack({stack, huristic, showProcess = true}: {stack: Stack, huristic: chainHuristicsStats, showProcess?: boolean}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <CTBStackPopup pState={popupState} pClose={disablePopup} stack={stack} huristic={huristic} showProcess={showProcess}/>
            <label>
            <input type="checkbox" className="mr-1"/>
            {stack.amount}x {stack.resourceName}
            </label>
        </div>
    )
}
