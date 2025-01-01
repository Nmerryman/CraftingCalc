import { postPermRecipeChainNode, chainHuristicsStats, Stack } from "../crafting/units";
import { TextCircle, ArrowPath, calcArrows } from "./svg";

class recipeCircle {
    constructor(public holds: Stack, public x: number, public y: number, public base: boolean = false) {}
}

class recipeArrow {
    constructor(public from: recipeCircle, public to: recipeCircle) {}
}

class nodeState {
    constructor(public recipeNode: postPermRecipeChainNode, public nodeDepthOffset: number, public aboveNodeBreadthOffset: number, public circle: recipeCircle) {}
}


export function SVGHuristic({huristic}: {huristic: chainHuristicsStats}) {
    let boxStartX = 0;
    // let boxStartY = 0;
    let boxWidth = window.innerWidth;
    let widthPadding = boxWidth / 10;
    let screenHeight = 0.5;
    let boxHeight = window.innerHeight * screenHeight;
    let heightPadding = boxHeight / 10;
    let breadthOffset = (boxHeight - 2 * heightPadding) / huristic.fixedSrc.hWidth;  // This one will need to get scaled better latter
    let depthOffset = (boxWidth - 2 * widthPadding) / (Math.max(huristic.longestDepth , 0));  // no -1 on depth because the deepest node still has ingredients
    boxStartX += 2 * depthOffset;
    
    let circleCollection: Array<recipeCircle> = [];
    let arrowCollection: Array<recipeArrow> = [];

    let startRecipeCircle = new recipeCircle(new Stack(""), widthPadding, heightPadding + breadthOffset * huristic.fixedSrc.hWidth / 2, true) 
    
    // This stack holds the current state off all nodes we need to traverse to get to the current one,
    // -1 because we want the first node base node shouldn't be included
    let nodeStateQueue: Array<nodeState> = [new nodeState(huristic.fixedSrc, -1, 0, startRecipeCircle)]; 
    circleCollection.push(startRecipeCircle);

    while (nodeStateQueue.length > 0) {
        let currentNode = nodeStateQueue.pop()!;

        // Add src nodes to the todo
        let breadthCounter = 0;
        for (let srcItem of currentNode.recipeNode.src) {
            let tempDepth = currentNode.nodeDepthOffset + 1;  // Logical depth
            let tempAboveBreath = breadthCounter + currentNode.aboveNodeBreadthOffset;  // logical breadth space count above the new item
            let tempX = widthPadding + tempDepth * depthOffset;  // Depth to x
            let tempY = heightPadding + breadthOffset * (tempAboveBreath + srcItem.hWidth / 2);  // Breadth to y

            let circle = new recipeCircle(new Stack(srcItem.goal, srcItem.hRatio * huristic.data.getRecipeOutputAmount(srcItem.rId, srcItem.goal)!.amount), tempX, tempY)
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
    
                let circle = new recipeCircle(new Stack(item.resourceName, currentNode.recipeNode.hRatio * item.amount), tempX, tempY)
                
                circleCollection.push(circle);
                let newArrow = new recipeArrow(currentNode.circle, circle);
                arrowCollection.push(newArrow);
    
                breadthCounter += 1;  // Add the size of the current item to be put above the next one
            }
        }
    }

    return (
        <svg className={`bg-neutral-100 w-full h-[${Math.round(boxHeight)}px]`} viewBox={`${boxStartX} 0 ${boxWidth} ${boxHeight}`}>
            {arrowCollection.map((arrow) => {
                let lineVals = calcArrows(arrow.from, arrow.to);
                lineVals.a.x += boxStartX;
                lineVals.b.x += boxStartX;
                return <ArrowPath start={lineVals.b} end={lineVals.a} key={[lineVals.a.x, lineVals.a.y, lineVals.b.x, lineVals.b.y].join(" ")}/>
            })}
            {circleCollection.map((cir, i) => {
                if (!cir.base) { // Remove the root holding node that we don't actually need (for now.)
                    // let total: number;
                    // if (!cir.base) {
                    //     let goalStack = huristic.data.getRecipe(cir.node.rId)!.outputResources.find(rec => rec.resourceName == cir.node.goal);
                    //     total = goalStack!.amount * cir.node.hRatio;
                    // } else {
                    //     total = cir.node.hRatio
                    // }
                    return <TextCircle center={{x: cir.x + boxStartX, y: cir.y}} text={`${cir.holds.amount}x of ${cir.holds.resourceName}`} key={[cir.holds.resourceName, cir.x, cir.y].join(" ")}/>
                }
            })}
            {/* Debug circles */}
            <TextCircle center={{x: boxStartX, y: 0}} text=""/>
            <TextCircle center={{x: boxStartX + boxWidth, y: boxHeight}} text=""/>
            
        </svg>
    )
}