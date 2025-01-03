import { Dispatch, MouseEvent, useRef, useState } from "react";
import { postPermRecipeChainNode, chainHuristicsStats, Stack } from "../crafting/units";
import { svgConfig, svgConfigAction } from "./huristics";
import { TextCircle, ArrowPath, calcArrows, Coordinate } from "./svg";
import { CTBStackPopup } from "./viewInfoDataPopups";


type InfoTextCircleProc = {
    center: Coordinate,
    circleData: recipeCircle, 
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
            <CTBStackPopup pState={popupState} pClose={disablePopup} stack={circleData.holds} huristic={circleData.hRef} showProcess={!circleData.base}/>
            <TextCircle center={center} text={text} config={config} scale={scale}/>
        </g>
    )
}


class recipeCircle {
    constructor(public holds: Stack, public x: number, public y: number, public hRef: chainHuristicsStats, public base: boolean = false, public root: boolean = false) {}
}

class recipeArrow {
    constructor(public from: recipeCircle, public to: recipeCircle) {}
}

class nodeState {
    constructor(public recipeNode: postPermRecipeChainNode, public nodeDepthOffset: number, public aboveNodeBreadthOffset: number, public circle: recipeCircle) {}
}


export function SVGHuristic({huristic, config, configDispatch}: {huristic: chainHuristicsStats, config: svgConfig, configDispatch: Dispatch<svgConfigAction>}) {
    let boxStartX = 0;
    let boxStartY = 0;
    let boxWidth = window.innerWidth;
    let widthPadding = boxWidth / 10;
    let screenHeight = 0.5;
    let boxHeight = window.innerHeight * screenHeight;
    let heightPadding = boxHeight / 10;
    let breadthOffset = (boxHeight - 2 * heightPadding) / huristic.fixedSrc.hWidth;  // This one will need to get scaled better latter
    let depthOffset = (boxWidth - 2 * widthPadding) / (Math.max(huristic.longestDepth , 0));  // no -1 on depth because the deepest node still has ingredients
    boxStartX += 2 * depthOffset;
    let originalBoxStartX = boxStartX;
    let originalBoxStartY = boxStartY;
    let originalBoxWidth = boxWidth;
    let originalBoxHeight = boxHeight;
    
    let circleCollection: Array<recipeCircle> = [];
    let arrowCollection: Array<recipeArrow> = [];

    let startRecipeCircle = new recipeCircle(new Stack(""), widthPadding, heightPadding + breadthOffset * huristic.fixedSrc.hWidth / 2, huristic, undefined, true);
    
    // This stack holds the current state off all nodes we need to traverse to get to the current one,
    // -1 because we want the first node base node shouldn't be included
    let nodeStateQueue: Array<nodeState> = [new nodeState(huristic.fixedSrc, -1, 0, startRecipeCircle)]; 
    circleCollection.push(startRecipeCircle);

    while (nodeStateQueue.length > 0) {
        let currentNode = nodeStateQueue.splice(0,1)[0];

        // Add src nodes to the queue
        let breadthCounter = 0;
        for (let srcItem of currentNode.recipeNode.src) {
            let tempDepth = currentNode.nodeDepthOffset + 1;  // Logical depth
            let tempAboveBreath = breadthCounter + currentNode.aboveNodeBreadthOffset;  // logical breadth space count above the new item
            let tempX = widthPadding + tempDepth * depthOffset;  // Depth to x
            let tempY = heightPadding + breadthOffset * (tempAboveBreath + srcItem.hWidth / 2);  // Breadth to y

            let circle = new recipeCircle(new Stack(srcItem.goal, srcItem.hRatio * huristic.data.getRecipeOutputAmount(srcItem.rId, srcItem.goal)!.amount), tempX, tempY, huristic)
            let newNode = new nodeState(srcItem, tempDepth, tempAboveBreath, circle);
            nodeStateQueue.push(newNode);
            
            circleCollection.push(circle);
            if (!currentNode.recipeNode.root) {
                let newArrow = new recipeArrow(currentNode.circle, circle);
                arrowCollection.push(newArrow);
            }

            breadthCounter += srcItem.hWidth;  // Add the size of the current item to be put above the next one
        }

        // Add nodes that don't have any recipes
        if (!currentNode.recipeNode.root) {
            for (let item of huristic.srcItemsWithoutRecipe(currentNode.recipeNode)) {
                let tempDepth = currentNode.nodeDepthOffset + 1;  // Logical depth
                let tempAboveBreath = breadthCounter + currentNode.aboveNodeBreadthOffset;  // logical breadth space count above the new item
                let tempX = widthPadding + tempDepth * depthOffset;  // Depth to x
                let tempY = heightPadding + breadthOffset * (tempAboveBreath + 1 / 2);  // Breadth to y
    
                let circle = new recipeCircle(new Stack(item.resourceName, currentNode.recipeNode.hRatio * item.amount), tempX, tempY, huristic, true)
                
                circleCollection.push(circle);
                let newArrow = new recipeArrow(currentNode.circle, circle);
                arrowCollection.push(newArrow);
    
                breadthCounter += 1;  // Add the size of the current item to be put above the next one
            }
        }
    }

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
                if (!cir.root) { // Remove the root holding node that we don't actually need (for now.)
                    return <InfoTextCircle center={{x: cir.x + originalBoxStartX, y: cir.y}} circleData={cir} text={`${cir.holds.amount}x of ${cir.holds.resourceName}`} config={config} scale={scale} key={[cir.holds.resourceName, cir.x, cir.y].join(" ")}/>
                }
            })}
            {/* Debug circles */}
            <TextCircle center={{x: boxStartX, y: 0}} text=""/>
            <TextCircle center={{x: boxStartX + boxWidth, y: boxHeight}} text=""/>
            
        </svg>
    )
}