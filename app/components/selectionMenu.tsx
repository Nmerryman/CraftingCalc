import { Dispatch, SyntheticEvent, useEffect, useState } from "react"
import { CraftingData, Process, Recipe, Resource, Stack } from "../crafting/units"
import xIcon from "./xIcon.png"
import { OnEnterCall, onlyNumbers } from "../utils/keyboardUtil"
import Popup from "reactjs-popup"
import { DisplayRecipe, DisplayStack, ItemPopupText } from "./viewInfoDataPopups"
import { simmilarityScoreFunc } from "./searchBarFunctionality"
import Image from "next/image"
import { CraftingAction, useCraftingData } from "./contexts/craftingContext"


export type RequestMenuAction = {
    type: "toggle"|"set"|"remove"|"reset"|"refresh",
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
        console.log("Resetting request menu state.");
        return {};
    case "refresh":
        return temp;
    }
}

function ItemPopup({pState, pClose, stack, resource}: {pState: boolean, pClose: () => void, stack: Stack, resource: Resource}) {
    return (
        <Popup className="narrow-popup" open={pState} onClose={pClose}>
            <div className="">
                <DisplayStack stack={stack}/>  {/*Not sure if this recursion is bad or not */}
                <ItemPopupText resource={resource}/>
            </div>
            <div className="flex">
                <button className="dark_thing clickable lclickable ml-auto" onClick={pClose}>Close</button>
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
            <li key={resource.name} className="bclickable" {...{"score": debugScore}} onClick={() => dispatch({type: "toggle", name: resource.name})}>({debugScore}){resource.name}</li>
        </div>
    )
}


function ListResources({requestDispatch}: {requestDispatch: Dispatch<RequestMenuAction>}) {
    const craftingData = useCraftingData();
    const [textState, setText] = useState("");
    let topName = "";
    const [topScoresState, setTopScores] = useState<Array<Resource>>([]);

    function updateText() {
        let selectTextBox = document.getElementById("resource_search") as HTMLInputElement;
        setText(selectTextBox.value);

        const resourceScores: Record<number, Array<Resource>> = {}
        let maxScore = 0;
        for (const resource of Object.values(craftingData.resources)) {
            const score = simmilarityScoreFunc(textState, resource.name);
            if (resourceScores[score] == undefined) {
                resourceScores[score] = [];
            }
            resourceScores[score].push(resource);
            maxScore = Math.max(maxScore, score);;
        }
        let topScores: Array<Resource> = [];
        for (let i = 0; i <= maxScore; i++) {
            if (resourceScores[i] != undefined) {
                topScores = topScores.concat(resourceScores[i]);
            }
            if (topScores.length > 50) {   // This should be long enough to fill element
                break;
            }
        }
        setTopScores(topScores);
    }

    useEffect(() => {
        updateText();
    }, [craftingData]);

    return (
        <ul>
            <div className="font-bold text-lime-500 mb-1">Resource List</div>
            <input placeholder="Resource" id="resource_search" className="dark_thing pl-1" onChange={() => updateText()} onKeyDown={OnEnterCall(() => requestDispatch({type: "toggle", name: topName}))}/>
            <div className="scrollable_list">
                {topScoresState
                    .map((rval, rIndex) => {
                        if (rIndex == 0) {  // Store the name of the top item in the sort so that we can reference it in an enter toggle later.
                            topName = rval.name;
                        }
                        return <ResourceListItem key={rval.name} resource={rval} debugScore={simmilarityScoreFunc(textState, rval.name)} dispatch={requestDispatch}/>
                        })}
            </div>
        </ul>
    )
}


function ProcessPopup({pState, pClose, process}: {pState: boolean, pClose: () => void, process: Process}) {
    return (
        <Popup className="narrow-popup" open={pState} onClose={pClose}>
            <div className="">
                {/* <DisplayStack stack={stack}/>  Not sure if this recursion is bad or not */}
                {process.name}
                <ItemPopupText resource={process}/>
                
                {/* <DisplayRecipe recipe={recipe} ratio={1}/> */}
            </div>
            <div className="flex">
                <button className="dark_thing clickable lclickable ml-auto" onClick={pClose}>Close</button>
            </div>
        </Popup>
    )
}


export function ProcessListItem({process}: {process: Process}) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};
    return (
        <div className="rclickable" onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <ProcessPopup pState={popupState} pClose={disablePopup} process={process}/>
            <li>{process.getKey()}</li>
        </div>
    )
}

function ListProcesses() {
    const craftingData = useCraftingData();
    return (
        <ul className="px-5">
            <div className="mb-1">
                <span className="font-bold text-yellow-300">Process List</span>
            </div>
            <div className="scrollable_list">
                {Object.values(craftingData.processes).map((pval) => {return <ProcessListItem process={pval} key={pval.name}/>})}
            </div>
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
                <input className="dark_thing px-1 mr-1" type="number" defaultValue={item.amount} onChange={(e) => { updateRequestMenu(e, item.resourceName, requestDispatch)}}/>
                x {item.resourceName}
            </label>
            {/* <Image src={xIcon.src} 
                onClick={() => requestDispatch({type: "remove", name: item.resourceName})} className="float-right object-contain h-8 hover:cursor-pointer" alt="X Icon"/> */}
            <img src={xIcon.src} 
                onClick={() => requestDispatch({type: "remove", name: item.resourceName})} className="float-right object-contain h-8 lclickable ml-1" alt="X Icon"/>
        </li>
    )

}


function ListRequests({requestState, requestDispatch}: {requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    const craftingData = useCraftingData();
    return (
        <ul className="px-5">
            <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-red-500">Crafting Request</span><button className="dark_thing lclickable clickable" onClick={() => {craftingData.passedHealthCheck = false; requestDispatch({type: "refresh", name: ""})}}> refresh calculations</button>
            </div>
            <div className="scrollable_list">
                {Object.values(requestState).map((rval) => {return <RequestListItem key={rval.resourceName} item={rval} requestDispatch={requestDispatch}/>})}
            </div>
        </ul>
    )
}



export function SelectionDisplay({requestState, requestDispatch}: {requestState: CraftingRequestType, requestDispatch: Dispatch<RequestMenuAction>}) {
    return (
        <>
        <div className="flex justify-around h-[40vh] max-h-[40vh] overflow-hidden divide-x-2 divide-dashed divide-slate-600/30">
            <ListResources requestDispatch={requestDispatch}/>
            <ListProcesses/>
            <ListRequests requestState={requestState} requestDispatch={requestDispatch}/>
        </div>
        {/* <input type="button" className="cursor-pointer" onClick={() => {console.log(requestState)}} value="(debug) Log request state."/> */}
        </>

    )
}

