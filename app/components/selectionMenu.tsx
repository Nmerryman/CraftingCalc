import { Dispatch, SyntheticEvent, useState } from "react"
import { CraftingData, Resource, Stack } from "../crafting/units"
import xIcon from "./xIcon.png"
// import * as levenshtein from "js-levenshtein"
import { OnEnterCall } from "../utils/onEnter"
import levenshtein from "js-levenshtein"


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



function ResourceListItem({resource, dispatch}: {resource: Resource, dispatch: Dispatch<RequestMenuAction>}) {
    return (
        <li key={resource.name} className="cursor-pointer" onClick={() => dispatch({type: "toggle", name: resource.name})}>{resource.name}</li>
    )
}


function textMatch(pattern: string, onTo: string): boolean {
    // Semi fuzzy match for putting the pattern on the target string.
    // The entire pattern must match, but it can skip characters on the onTo string.
    pattern = pattern.toLowerCase();
    onTo = onTo.toLowerCase();
    let pIndex = 0;
    let oIndex = 0;

    while (pIndex < pattern.length && oIndex < onTo.length) {
        if (pattern[pIndex] == onTo[oIndex]) {
            oIndex++;
        }
        pIndex++;
    }

    if (pIndex == pattern.length) {
        return true;
    }
    
    return false;
}


function ListResources({craftingData, requestDispatch}: {craftingData: CraftingData, requestDispatch: Dispatch<RequestMenuAction>}) {
    const [textState, setText] = useState("");
    let topName = "";

    function updateText() {
        let selectTextBox = document.getElementById("resource_search") as HTMLInputElement;
        setText(selectTextBox.value);
    }

    return (
        <ul>
            <div className="font-bold">Resource List</div>
            <input placeholder="Resource" id="resource_search" className="text-black" onChange={() => updateText()} onKeyDown={OnEnterCall(() => requestDispatch({type: "toggle", name: topName}))}/>
            {Object.values(craftingData.resources)
                .sort((rValA, rValB) => { 
                    // This works, but I think I'd rather use a filter via the TextMatch function defined above. 
                    // This method does not handle shortened versions of text comparisons well (leather vs tanned leather)
                    if (levenshtein(textState, rValA.name) < levenshtein(textState, rValB.name)) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                .map((rval, rIndex) => {
                    if (rIndex == 0) {  // Store the name of the top item in the sort so that we can reference it in an enter toggle later.
                        topName = rval.name;
                    }
                    return <ResourceListItem key={rval.name} resource={rval} dispatch={requestDispatch}/>
                    })}
        </ul>
    )
}


function ListProcesses({craftingData}: {craftingData: CraftingData}) {
    return (
        <ul>
            <span className="font-bold">Process List</span>
            {Object.values(craftingData.processes).map((pval) => {return <li key={pval.name}>{pval.name}</li>})}
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
                <input className="bg-slate-900" type="number" defaultValue={item.amount} onChange={(e) => {updateRequestMenu(e, item.resourceName, requestDispatch)}}/>
                x {item.resourceName}
            </label>
            <img src={xIcon.src} 
                onClick={() => requestDispatch({type: "remove", name: item.resourceName})} className="float-right object-contain h-8"/>
        </li>
    )

}


function ListRequests({requestState, requestDispatch}: {requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <ul>
            <span className="font-bold">Crafting Request</span>
            {Object.values(requestState).map((rval) => {return <RequestListItem key={rval.resourceName} item={rval} requestDispatch={requestDispatch}/>})}
        </ul>
    )
}



export function SelectionDisplay({craftingData, requestState, requestDispatch}: {craftingData: CraftingData, requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <>
        <div className="flex justify-around h-[40vh] overflow-hidden">
            <ListResources craftingData={craftingData} requestDispatch={requestDispatch}/>
            <ListProcesses craftingData={craftingData}/>
            <ListRequests requestState={requestState} requestDispatch={requestDispatch}/>
        </div>
        <input type="button" className="cursor-pointer" onClick={() => {console.log(requestState)}} value="(debug) Log request state."/>
        </>

    )
}

