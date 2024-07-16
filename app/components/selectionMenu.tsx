import { Dispatch, SyntheticEvent } from "react"
import { CraftingData, Resource, Stack } from "../crafting/units"
import xIcon from "./xIcon.png"


type RequestMenuAction = {
    type: "toggle"|"set"|"remove",
    name: string,
    value?: number
}


export function requestMenuReducer(currentState: Record<string, Stack>, action: RequestMenuAction): Record<string, Stack> {
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
    }
}



function ResourceListItem({resource, dispatch}: {resource: Resource, dispatch: Dispatch<RequestMenuAction>}) {
    return (
        <li key={resource.name} className="cursor-pointer" onClick={() => dispatch({type: "toggle", name: resource.name})}>{resource.name}</li>
    )
}


function ListResources({craftingData, requestDispatch}: {craftingData: CraftingData, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <ul>
            <span className="font-bold">Resource List</span>
            {Object.values(craftingData.resources).map((rval) => {return <ResourceListItem key={rval.name} resource={rval} dispatch={requestDispatch}/>})}
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


function ListRequests({requestState, requestDispatch}: {requestState: Record<string, Stack>, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <ul>
            <span className="font-bold">Crafting Request</span>
            {Object.values(requestState).map((rval) => {return <RequestListItem key={rval.resourceName} item={rval} requestDispatch={requestDispatch}/>})}
        </ul>
    )
}



export function SelectionDisplay({craftingData, requestState, requestDispatch}: {craftingData: CraftingData, requestState: Record<string, Stack>, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <>
        <div className="flex justify-around">
            <ListResources craftingData={craftingData} requestDispatch={requestDispatch}/>
            <ListProcesses craftingData={craftingData}/>
            <ListRequests requestState={requestState} requestDispatch={requestDispatch}/>
        </div>
        <input type="button" className="cursor-pointer" onClick={() => {console.log(requestState)}} value="(debug) Log request state."/>
        </>

    )
}

