import { ChangeEvent, Dispatch, useEffect, useReducer, useState } from "react";
import { CraftingRequestType } from "./selectionMenu";
import { SVGHuristic } from "./svgHuristics";
import { Coordinate } from "./svg";
import { DisplayCTBItemStack } from "./viewInfoDataPopups";
import { CraftingData } from "../crafting/units";
import { PermMeta, SolveMeta, TempSolver } from "../crafting/solver";

// If the select number box is checked, create an input that allows the user to enter a number
function HuristicNumberChoice({boxState, permMetaNum, updateMetaNum, metaOptSize}: {boxState: boolean, permMetaNum: number, updateMetaNum: Dispatch<number>, metaOptSize: number}) {

    function numCallback(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value) {
            updateMetaNum(parseInt(e.target.value));
        }
    }
    
    if (boxState) {
        return (
            <></>
        )
    } else {
        return (
            <div>       
                <label>
                    Select Huristic:
                    <input type="number" min={0} max={metaOptSize - 1} value={permMetaNum} onChange={numCallback} className="checkloadconfig"></input>
                </label>
            </div>
        )
    }
}

// Calculation itemized lists
function HuristicStats({permMeta}: {permMeta: PermMeta}) {
    return (
        <div className="flex justify-around mb-4 pt-2 divide-x-2 divide-dashed divide-slate-600/30">
            <span className="px-5">
                <div className="font-bold text-lime-500">
                    Resulting output
                </div>
                <div>
                {
                    permMeta.outputStacks.map((stack, i) => <DisplayCTBItemStack stack={stack} permMeta={permMeta} key={`${stack.resourceName}_${i}`}/>)   
                    
                }
                </div>
            </span>
            <span className="px-5">
                <div className="font-bold text-yellow-300">
                    Intermediate crafting requirements
                </div>
                <div>
                {
                    permMeta.intermediateStacks.map((stack, i) => <DisplayCTBItemStack stack={stack} permMeta={permMeta} key={`${stack.resourceName}_${i}`}/>)
                }
                </div>
            </span>
            <span className="px-5">
                <div className="font-bold text-red-500">
                    Required inputs
                </div>
                <div>
                {
                    permMeta.inputStacks.map((stack, i) => <DisplayCTBItemStack stack={stack} permMeta={permMeta} showProcess={false} key={`${stack.resourceName}_${i}`}/>)
                }
                </div>
            </span>
        </div>
    )
}


type svgConfigActionOptions = "disable zoom" | "enable zoom" | "reset zoom" 
    |  "set tl" | "set br" 
    | "ready set first" | "set first" | "set second" 
    | "disable text" | "enable text"
    | "large svg" | "small svg";


export type svgConfigAction = {
    type: svgConfigActionOptions,
    coordinate?: Coordinate,
    num?: number
}


function svgReducer(state: svgConfig, action: svgConfigAction): svgConfig {
    let temp = state.clone();

    switch (action.type) {
        case "disable zoom":
            temp.useZoom = false;
            break;
        case "enable zoom":
            temp.useZoom = true;
            break
        case "reset zoom":
            temp.useZoom = false;
            temp._zoomAvailable = false;
            break;
        case "disable text":
            temp.showText = false;
            break;
        case "enable text":
            temp.showText = true;
            break;
        case "set tl":
            temp.tl = action.coordinate!;
            break;
        case "set br":
            temp.br = action.coordinate!;
            break;
        case "ready set first":
            temp._settingZoomFirst = true;
            break;
        case "set first":
            temp._settingZoomFirst = false;
            temp._settingZoomSecond = true;
            break;
        case "set second":
            temp._settingZoomSecond = false;
            temp._zoomAvailable = true;
            break
        case "large svg":
            temp.largeSvg = true;
            break;
        case "small svg":
            temp.largeSvg = false;
            break;
    }
    return temp;
}


export class svgConfig {
    useZoom: boolean = false;
    tl: Coordinate | undefined;
    br: Coordinate | undefined;
    showText: boolean = true;
    largeSvg: boolean = false;
    
    // Hidden state stuff
    _zoomAvailable: boolean = false;
    _settingZoomFirst: boolean = false;
    _settingZoomSecond: boolean = false;

    clone() {
        let temp = new svgConfig()
        temp.useZoom = this.useZoom;
        temp.tl = this.tl;
        temp.br = this.br;
        temp.showText = this.showText;
        temp.largeSvg = this.largeSvg;

        temp._zoomAvailable = this._zoomAvailable;
        temp._settingZoomFirst = this._settingZoomFirst;
        temp._settingZoomSecond = this._settingZoomSecond
        return temp
    }
}


function ToggleText({config, configDispatch}: {config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    if (config.showText) {
        return (
            <label className="input_button">
                <button className="input_button" onClick={() => configDispatch({type: "disable text"})}/>Hide text
            </label>
        )
    } else {
        return (
            <label className="input_button">
                <button className="input_button" onClick={() => configDispatch({type: "enable text"})}/>Show text
            </label>
        )
    }
}


function LargeSvg({config, configDispatch}: {config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    if (config.largeSvg) {
        return (
            <label className="input_button">
                <button className="input_button" onClick={() => configDispatch({type: "small svg"})}/>Small Svg
            </label>
        )
    } else {
        return (
            <label className="input_button">
                <button className="input_button" onClick={() => configDispatch({type: "large svg"})}/>Large Svg
            </label>
        )
    }
}


function ToggleZoom({config, configDispatch}: {config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    if (config._zoomAvailable) {
        if (config.useZoom) {
            return (
                <label className="input_button">
                    <button className="input_button" onClick={() => configDispatch({type: "disable zoom"})}/>Disable Zoom
                </label>
            )
        } else {
            return (
                <label className="input_button">
                    <button className="input_button" onClick={() => configDispatch({type: "enable zoom"})}/>Enable Zoom
                </label>
            )
        }
    } else {
        return (
            <></>
        )
    }
}


function ChangeZoom({config, configDispatch}: {config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    if (!config._settingZoomFirst && !config._settingZoomSecond) {
        return (
            <label className="input_button">
                <button onClick={() => configDispatch({type: "ready set first"})}/>Change zoom
            </label>
        )
    }
}


function ConfigButtons({config, configDispatch}: {config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    return (
        <span className="ml-auto">
            <ToggleText config={config} configDispatch={configDispatch}/>
            <LargeSvg config={config} configDispatch={configDispatch}/>
            <ToggleZoom config={config} configDispatch={configDispatch}/>
            <ChangeZoom config={config} configDispatch={configDispatch}/>
        </span>
    )

}



export function HuristicsInfoDisplay({requestState, craftingData}: {requestState: CraftingRequestType, craftingData: CraftingData}) {
    const [modeCheckbox, updateModeCheckbox] = useState(true);
    const [huristicNum, updateHuristicNum] = useState(0);
    const [svgConfigObj, dispatchConfig] = useReducer(svgReducer, new svgConfig());

    useEffect(() => {
        // dispatchConfig({type: "disable text"});
        // dispatchConfig({type: "ready set first"});
        // dispatchConfig({type: "set tl", coordinate: {x: 540, y: 125}})
        // dispatchConfig({type: "set br", coordinate: {x: 610, y: 155}})
        // dispatchConfig({type: "enable zoom"});
    }, [])

    if (Object.keys(requestState).length > 0) {
        
        const solver = new TempSolver(craftingData);
        const rootSolve = solver.solve(Object.values(requestState));
        const metaSolves = rootSolve.solveMeta;
        if (Object.keys(metaSolves.permMetaCollection).length == 0) {
            return (
                <div className="error_mess">
                    No results from calculation. Console likely lists why.
                </div>
            )
        }
        // console.log(huristicList)
        // let bestHuristic = solver.bestHuristic(huristicList, solver.defaultHuristic)!;
        let bestMeta = metaSolves.getBest(SolveMeta.minCostFunc);
        let chosenMetaText = "";
        if (!modeCheckbox) {
            chosenMetaText = Object.keys(metaSolves.permMetaCollection)[huristicNum];
            bestMeta = metaSolves.permMetaCollection[chosenMetaText];
        }
        const chosenMetaCost = "Costs: " + bestMeta.cost.toPrecision(4).toString();
        return (
            <div>
                <div className="flex">
                    <label><button onClick={() => console.log(svgConfigObj)}/>logging svgConfigObj</label>
                    <label><button onClick={() => console.log(bestMeta)}/>(Log best huristic)</label>
                    <label><input type="checkbox" checked={modeCheckbox} onChange={() => {updateModeCheckbox(!modeCheckbox)}}/>{"Use \"Best\" Huristic"}</label>
                    <HuristicNumberChoice boxState={modeCheckbox} permMetaNum={huristicNum} updateMetaNum={updateHuristicNum} metaOptSize={Object.keys(metaSolves.permMetaCollection).length}/>
                    {chosenMetaCost}
                    <ConfigButtons config={svgConfigObj} configDispatch={dispatchConfig}/>
                </div>
                <div>
                    {chosenMetaText}
                </div>
                <SVGHuristic permMeta={bestMeta} config={svgConfigObj} configDispatch={dispatchConfig}/>
                <HuristicStats permMeta={bestMeta}/>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}
