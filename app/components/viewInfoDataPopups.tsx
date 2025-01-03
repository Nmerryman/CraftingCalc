import { useState } from "react";
import { chainHuristicsStats, CraftingData, Resource, Stack } from "../crafting/units"
import Popup from "reactjs-popup";


function ItemPopupText({resource}: {resource: Resource}) {
    const [dummy, setDummy] = useState(false);  // This exists to reload the component
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


function RecipeOfItem({rId, data}: {rId: number, data: CraftingData}) {
    let recipe = data.getRecipe(rId)!;
    return (
        <div>
            Process: {recipe.processUsed}
            <p>
                {recipe.inputResources.map(stack => <DisplayStack stack={stack} key={stack.resourceName}/>)}
            </p>

        </div>
    )
}

function ProcessesUsedText({goalName, huristic}: {goalName: string, huristic: chainHuristicsStats}) {
    console.log(goalName)
    console.log(huristic.recipesUsed[goalName])
    return (
        <div>
            <h1>{`Craft ${goalName} by`}</h1>
            {Object.keys(Object.keys(huristic.recipesUsed[goalName])).map((rId) => {
                let id = parseInt(rId);
                return (
                    <div key={rId}>
                        <RecipeOfItem rId={id} data={huristic.data}/>
                    </div>
                )
            })}
        </div>
    )
}

function HuristicPopup({pState, pClose, stack, huristic, showProcess}: {pState: boolean, pClose: () => void, stack: Stack, huristic: chainHuristicsStats, showProcess: boolean}) {
    // console.log(stack);
    // console.log(huristic.data.resources[stack.resourceName]);
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



export function DisplayClickableItemStack({stack, huristic, showProcess = true}: {stack: Stack, huristic: chainHuristicsStats, showProcess?: boolean}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <HuristicPopup pState={popupState} pClose={disablePopup} stack={stack} huristic={huristic} showProcess={showProcess}/>
            <label>
            <input type="checkbox" className="mr-1"/>
            {stack.amount}x {stack.resourceName}
            </label>
        </div>
    )

}

// Litterally just display the stack info
// Not sure if the div is good?
function DisplayStack({stack}: {stack: Stack}) {
    return (
        <div>
            {stack.amount}x {stack.resourceName}
        </div>
    )
}
