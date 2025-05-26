import { Dispatch, MouseEvent, useRef, useState } from "react";
import { Stack } from "../crafting/units";
import { svgConfig, svgConfigAction } from "./huristics";
import { TextCircle, ArrowPath, calcArrows, Coordinate } from "./svg";
import { CTBStackPopup } from "./viewInfoDataPopups";
import { PermMeta, RRKey, StepNode, StepNodeType } from "../crafting/solver";
import { metadata } from "../layout";


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

class NodeState {
    constructor(public recipeNode: StepNode, public nodeDepthOffset: number, public aboveNodeBreadthOffset: number, public circle: StepCircle) {}
}


export function SVGHuristic({permMeta, config, configDispatch}: {permMeta: PermMeta, config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
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
    let depthOffset = (boxWidth - 2 * widthPadding) / (permMeta.depth - 1);  
    boxStartX += 2 * depthOffset;
    let originalBoxStartX = boxStartX;
    let originalBoxStartY = boxStartY;
    let originalBoxWidth = boxWidth;
    let originalBoxHeight = boxHeight;
    
    const circleCollection: Array<StepCircle> = [];
    const circleCache: Record<RRKey, StepCircle> = {};
    const arrowCollection: Array<StepArrow> = [];

    for (const stepNode of permMeta.leveledNodes) {
        const xOffset = widthPadding + depthOffset * (stepNode.depth - 1);
        const yOffset = heightPadding + breadthOffset * stepNode.scaledWidthOffset + breadthOffset * stepNode.scaledWidth / 2;
        const stepCircle = new StepCircle(stepNode, xOffset, yOffset, permMeta);
        circleCollection.push(stepCircle);
        circleCache[stepNode.name] = stepCircle;
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

    // let startRecipeCircle = new recipeCircle(new Stack(""), widthPadding, heightPadding + breadthOffset * permMeta.root.width / 2, permMeta, undefined, true);
    
    // This stack holds the current state off all nodes we need to traverse to get to the current one,
    // -1 because we want the first node base node shouldn't be included
    // let nodeStateQueue: Array<nodeState> = [new nodeState(permMeta.root, -1, 0, startRecipeCircle)]; 
    // circleCollection.push(startRecipeCircle);

    // while (nodeStateQueue.length > 0) {
    //     let currentNode = nodeStateQueue.splice(0,1)[0];

    //     // Add src nodes to the queue
    //     let breadthCounter = 0;
    //     for (let srcItem of currentNode.recipeNode.children) {
    //         let tempDepth = currentNode.nodeDepthOffset + 1;  // Logical depth
    //         let tempAboveBreath = breadthCounter + currentNode.aboveNodeBreadthOffset;  // logical breadth space count above the new item
    //         let tempX = widthPadding + tempDepth * depthOffset;  // Depth to x
    //         let tempY = heightPadding + breadthOffset * (tempAboveBreath + srcItem.width / 2);  // Breadth to y

    //         let circle = new recipeCircle(new Stack(srcItem.name as string, srcItem.countRatio * permMeta.craftingData.getRecipeOutputAmount(srcItem.rId, srcItem.goal)!.amount), tempX, tempY, metadata)
    //         let newNode = new nodeState(srcItem, tempDepth, tempAboveBreath, circle);
    //         nodeStateQueue.push(newNode);
            
    //         circleCollection.push(circle);
    //         if (!currentNode.recipeNode.root) {
    //             let newArrow = new recipeArrow(currentNode.circle, circle);
    //             arrowCollection.push(newArrow);
    //         }

    //         breadthCounter += srcItem.hWidth;  // Add the size of the current item to be put above the next one
    //     }

    //     // Add nodes that don't have any recipes
    //     if (!currentNode.recipeNode.root) {
    //         for (let item of huristic.srcItemsWithoutRecipe(currentNode.recipeNode)) {
    //             let tempDepth = currentNode.nodeDepthOffset + 1;  // Logical depth
    //             let tempAboveBreath = breadthCounter + currentNode.aboveNodeBreadthOffset;  // logical breadth space count above the new item
    //             let tempX = widthPadding + tempDepth * depthOffset;  // Depth to x
    //             let tempY = heightPadding + breadthOffset * (tempAboveBreath + 1 / 2);  // Breadth to y
    
    //             let circle = new recipeCircle(new Stack(item.resourceName, currentNode.recipeNode.hRatio * item.amount), tempX, tempY, huristic, true)
                
    //             circleCollection.push(circle);
    //             let newArrow = new recipeArrow(currentNode.circle, circle);
    //             arrowCollection.push(newArrow);
    
    //             breadthCounter += 1;  // Add the size of the current item to be put above the next one
    //         }
    //     }
    // }

    if (config.useZoom) {
        boxStartX = config.tl!.x;
        boxStartY = config.tl!.y;
        boxWidth = config.br!.x - boxStartX;
        boxHeight = config.br!.y - boxStartY;
    }
    let scale = Math.min(boxWidth / originalBoxWidth, boxHeight / originalBoxHeight);
    
    const svgthing = useRef<SVGSVGElement>(null);

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
            {arrowCollection.map((arrow) => {
                let lineVals = calcArrows(arrow.from, arrow.to, scale);
                lineVals.a.x += originalBoxStartX;
                lineVals.b.x += originalBoxStartX;
                return <ArrowPath start={lineVals.b} end={lineVals.a} scale={scale} key={[lineVals.a.x, lineVals.a.y, lineVals.b.x, lineVals.b.y].join(" ")}/>
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