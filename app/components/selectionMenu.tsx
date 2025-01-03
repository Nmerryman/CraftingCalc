import { Dispatch, SyntheticEvent, useState } from "react"
import { CraftingData, Process, Resource, Stack } from "../crafting/units"
import xIcon from "./xIcon.png"
// import * as levenshtein from "js-levenshtein"
import { OnEnterCall } from "../utils/onEnter"
import levenshtein from "js-levenshtein"
import Popup from "reactjs-popup"
import { DisplayRecipe, DisplayStack, ItemPopupText } from "./viewInfoDataPopups"


type RequestMenuAction = {
    type: "toggle"|"set"|"remove"|"reset",
    name: string,
    value?: number
}

export type CraftingRequestType = Record<string, Stack>;


export function requestMenuReducer(currentState: CraftingRequestType, action: RequestMenuAction): CraftingRequestType {
    let temp = {...currentState};
    switch (action.type) {
    case "set":
        temp[action.name] = new Stack(action.name, action.value);
        return temp;
    case "remove":
        delete temp[action.name];
        return temp
    case "toggle":
        if (currentState.hasOwnProperty(action.name)) {
            delete temp[action.name];
        } else {
            temp[action.name] = new Stack(action.name, action.value);
        }
        return temp;
    case "reset":
        return {};
    }
}

function ItemPopup({pState, pClose, stack, resource}: {pState: boolean, pClose: () => void, stack: Stack, resource: Resource}) {
    return (
        <Popup open={pState} onClose={pClose}>
            <div className="popup-content text-black">
                <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                <ItemPopupText resource={resource}/>
            </div>
            <div className="flex">
                <button className="popup_button ml-auto" onClick={pClose}>Done</button>
            </div>
        </Popup>
    )
}

function ResourceListItem({resource, dispatch, debugScore}: {resource: Resource, dispatch: Dispatch<RequestMenuAction>, debugScore: number}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <ItemPopup pState={popupState} pClose={disablePopup} stack={new Stack(resource.name)} resource={resource}/>
            <li key={resource.name} className="cursor-pointer" {...{"score": debugScore}} onClick={() => dispatch({type: "toggle", name: resource.name})}>{resource.name}</li>
        </div>
    )
}


function ListResources({craftingData, requestDispatch}: {craftingData: CraftingData, requestDispatch: Dispatch<RequestMenuAction>}) {
    const [textState, setText] = useState("");
    let topName = "";

    function updateText() {
        let selectTextBox = document.getElementById("resource_search") as HTMLInputElement;
        setText(selectTextBox.value);
    }

    function simmilarityScore(fromString: string, toString: string): number {
        let inputVal = fromString.toLowerCase();
        let testItem = toString.toLowerCase();
        let inputParts = inputVal.split(" ");
        let testParts = testItem.split(" ");
        let currentScore = inputVal.length + testItem.length;
        let matchedWords = 0;
        // console.log(inputVal, " vs ", testItem.slice(0, inputVal.length))

        for (let iparts of inputParts) {
            for (let tpart of testParts) {
                if (iparts.length <= tpart.length && iparts == tpart.slice(0, iparts.length)) {
                    currentScore -= 2 * iparts.length;
                    matchedWords += 1;
                }
            }
        }
        return currentScore ** (1 / (matchedWords + 1)) + levenshtein(inputVal, testItem) ** 2;
    }

    return (
        <ul>
            <div className="font-bold text-lime-500">Resource List</div>
            <input placeholder="Resource" id="resource_search" className="text-black pl-1" onChange={() => updateText()} onKeyDown={OnEnterCall(() => requestDispatch({type: "toggle", name: topName}))}/>
            {Object.values(craftingData.resources)
                .sort((rValA, rValB) => { 
                    // This works, but I think I'd rather use a filter via the TextMatch function defined above. 
                    // This method does not handle shortened versions of text comparisons well (leather vs tanned leather)
                    if (simmilarityScore(textState, rValA.name) < simmilarityScore(textState, rValB.name)) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                .map((rval, rIndex) => {
                    if (rIndex == 0) {  // Store the name of the top item in the sort so that we can reference it in an enter toggle later.
                        topName = rval.name;
                    }
                    return <ResourceListItem key={rval.name} resource={rval} debugScore={simmilarityScore(textState, rval.name)} dispatch={requestDispatch}/>
                    })}
        </ul>
    )
}


function ProcessPopup({pState, pClose, processName}: {pState: boolean, pClose: () => void, processName: string}) {
    return (
        <Popup open={pState} onClose={pClose}>
            <div className="popup-content text-black">
                {/* <DisplayStack stack={stack}/>  Not sure if this recursion is bad or not */}
                <ItemPopupText resource={new Resource(processName)}/>
                
                {/* <DisplayRecipe recipe={recipe} ratio={1}/> */}
            </div>
            <div className="flex">
                <button className="popup_button ml-auto" onClick={pClose}>Done</button>
            </div>
        </Popup>
    )
}


function ProcessListItem({name}: {name: string}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <ProcessPopup pState={popupState} pClose={disablePopup} processName={name}/>
            <li key={name}>{name}</li>
        </div>
    )
}

function ListProcesses({craftingData}: {craftingData: CraftingData}) {
    return (
        <ul className="px-5">
            <span className="font-bold text-yellow-300">Process List</span>
            {Object.values(craftingData.processes).map((pval) => {return <ProcessListItem name={pval.name} key={pval.name}/>})}
        </ul>
    )
}


function updateRequestMenu(e: SyntheticEvent, name: string, requestDispatch: Dispatch<RequestMenuAction>) {
    let target = e.target as HTMLInputElement
    let value = Number(target.value)
    
    // Force value to be positive
    if (value < 0) {
        value = 0;
        target.value = "0";
    }

    requestDispatch({type: "set", name: name, value: value})
}


function RequestListItem({item, requestDispatch}: {item: Stack, requestDispatch: Dispatch<RequestMenuAction>}) {
    // li height has to be hard coded to be the same size as the image. Otherwise wierd scaling happens
    return (
        <li key={item.resourceName} className="h-8">
            <label>
                <input className="bg-slate-900 px-2" type="number" defaultValue={item.amount} onChange={(e) => {updateRequestMenu(e, item.resourceName, requestDispatch)}}/>
                x {item.resourceName}
            </label>
            <img src={xIcon.src} 
                onClick={() => requestDispatch({type: "remove", name: item.resourceName})} className="float-right object-contain h-8 hover:cursor-pointer"/>
        </li>
    )

}


function ListRequests({requestState, requestDispatch}: {requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <ul className="px-5">
            <span className="font-bold text-red-500">Crafting Request</span>
            {Object.values(requestState).map((rval) => {return <RequestListItem key={rval.resourceName} item={rval} requestDispatch={requestDispatch}/>})}
        </ul>
    )
}



export function SelectionDisplay({craftingData, requestState, requestDispatch}: {craftingData: CraftingData, requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <>
        <div className="flex justify-around h-[40vh] overflow-hidden divide-x-2 divide-dashed divide-slate-600/30">
            <ListResources craftingData={craftingData} requestDispatch={requestDispatch}/>
            <ListProcesses craftingData={craftingData}/>
            <ListRequests requestState={requestState} requestDispatch={requestDispatch}/>
        </div>
        <input type="button" className="cursor-pointer" onClick={() => {console.log(requestState)}} value="(debug) Log request state."/>
        </>

    )
}

