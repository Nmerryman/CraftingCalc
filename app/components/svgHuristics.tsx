import { Dispatch, MouseEvent, useRef, useState } from "react";
import { Stack } from "../crafting/units";
import { svgConfig, svgConfigAction } from "./huristics";
import { TextCircle, ArrowPath, calcArrows, Coordinate } from "./svg";
import { CTBStackPopup } from "./viewInfoDataPopups";
import { PermMeta, RRKey, StepNode, StepNodeType } from "../crafting/solver";


type InfoTextCircleProc = {
    center: Coordinate,
    circleData: StepCircle, 
    text: string, 
    scale?: number, 
    config?: svgConfig, 
}


function InfoTextCircle({center, circleData, text, scale = 1, config = new svgConfig()}: InfoTextCircleProc) {
    const [popupState, setPopupState] = useState(false);
    const disablePopup = () => {setPopupState(false)};
    const togglePopup = () => {setPopupState(!popupState)};

    return (
        <g onContextMenu={(event) => {togglePopup(); event.preventDefault()}}>
            <CTBStackPopup pState={popupState} pClose={disablePopup} stack={new Stack(circleData.stepNode.name as string, circleData.stepNode.countRatio)} permMeta={circleData.mRef} showProcess={!circleData.stepNode.isBase()}/>
            <TextCircle center={center} text={text} config={config} scale={scale}/>
        </g>
    )
}


class StepCircle {
    constructor(public stepNode: StepNode, public x: number, public y: number, public mRef: PermMeta) {}
}


class StepArrow {
    constructor(public from: StepCircle, public to: StepCircle) {}
}


export function SVGHuristic({permMeta, config, configDispatch}: {permMeta: PermMeta, config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    const svgthing = useRef<SVGSVGElement>(null);

    // A lot of this is just matching the interfaces up. There is a high chance that the logic is still broken.
    if (permMeta.root == null || !permMeta.root.possible) {
        console.error("Attempting to draw a meta that isn't possible", permMeta)
        return <></>
    }

    // NOTE: If arrows overlap, maybe something like adding 1 width to resources with multiple parents would fix

    let boxStartX = 0;
    let boxStartY = 0;
    let boxWidth = window.innerWidth;
    let widthPadding = boxWidth / 10;
    let screenHeight = 0.5;
    let boxHeight = window.innerHeight * screenHeight;
    let heightPadding = boxHeight / 10;
    let breadthOffset = (boxHeight - 2 * heightPadding) / permMeta.root.width;  // This one will need to get scaled better latter
    let depthOffset = (boxWidth - 2 * widthPadding) / (permMeta.depth);  
    boxStartX += 2 * depthOffset;
    let originalBoxStartX = boxStartX;
    let originalBoxStartY = boxStartY;
    let originalBoxWidth = boxWidth;
    let originalBoxHeight = boxHeight;
    
    const circleCollection: Array<StepCircle> = [];
    const circleCache: Record<RRKey, StepCircle> = {};
    const arrowCollection: Array<StepArrow> = [];

    let count = 0;
    for (const stepNode of permMeta.leveledNodes) {
        const xOffset = widthPadding + depthOffset * (stepNode.depth - 0.5);    // -0.5 provides centering
        const yOffset = heightPadding + breadthOffset * stepNode.scaledWidthOffset + breadthOffset * stepNode.scaledWidth / 2;
        const stepCircle = new StepCircle(stepNode, xOffset, yOffset, permMeta);
        circleCollection.push(stepCircle);
        circleCache[stepNode.name] = stepCircle;
        count++;
    }
    for (const stepNode of permMeta.leveledNodes) {
        for (const parent of stepNode.parents) {
            if (parent.root) {
                break;
            }
            const newArrow = new StepArrow(circleCache[stepNode.name], circleCache[parent.name]);
            arrowCollection.push(newArrow);
        }
    }

    if (config.useZoom) {
        boxStartX = config.tl!.x;
        boxStartY = config.tl!.y;
        boxWidth = config.br!.x - boxStartX;
        boxHeight = config.br!.y - boxStartY;
    }
    let scale = Math.min(boxWidth / originalBoxWidth, boxHeight / originalBoxHeight);
    
    function svgClickCallback(e: MouseEvent<SVGElement>) {
        let clickLoc = new DOMPoint(e.clientX, e.clientY).matrixTransform(svgthing.current!.getScreenCTM()!.inverse());
        console.log(clickLoc);
        if (config._settingZoomFirst) {
            let clickLoc = new DOMPoint(e.clientX, e.clientY).matrixTransform(svgthing.current!.getScreenCTM()!.inverse());
            configDispatch({type: "set tl", coordinate: {x: clickLoc.x, y: clickLoc.y}})
            configDispatch({type: "set first"});
            
        } else if (config._settingZoomSecond) {
            let clickLoc = new DOMPoint(e.clientX, e.clientY).matrixTransform(svgthing.current!.getScreenCTM()!.inverse());
            configDispatch({type: "set br", coordinate: {x: clickLoc.x, y: clickLoc.y}})
            configDispatch({type: "set second"}); 
        }
    }

    return (
        <svg className={`bg-neutral-100 w-full h-[${Math.round(originalBoxHeight)}px]`} viewBox={`${boxStartX} ${boxStartY} ${boxWidth} ${boxHeight}`} onClick={svgClickCallback} ref={svgthing}>
            {arrowCollection.map((arrow, i) => {
                let lineVals = calcArrows(arrow.from, arrow.to, scale);
                lineVals.a.x += originalBoxStartX;
                lineVals.b.x += originalBoxStartX;
                return <ArrowPath start={lineVals.b} end={lineVals.a} scale={scale} key={[lineVals.a.x, lineVals.a.y, lineVals.b.x, lineVals.b.y, i].join(" ")}/>
            })}
            {circleCollection.map((cir, i) => {
                if (!cir.stepNode.root) { // Remove the root holding node that we don't actually need (for now.)
                    return <InfoTextCircle center={{x: cir.x + originalBoxStartX, y: cir.y}} circleData={cir} text={`${cir.stepNode.countRatio}x of ${cir.stepNode.name}`} config={config} scale={scale} key={[cir.stepNode.name, cir.x, cir.y].join(" ")}/>
                }
            })}
            {/* Debug circles */}
            <TextCircle center={{x: boxStartX, y: 0}} text=""/>
            <TextCircle center={{x: boxStartX + boxWidth, y: boxHeight}} text=""/>
            
        </svg>
    )
}