import { recipeChainNode, chainHuristicsStats } from "../crafting/units";
import { TextCircle, ArrowPath, calcArrows } from "./svg";

class recipeCircle {
    constructor(public node: recipeChainNode, public x: number, public y: number, public base: boolean = false) {}
}

class recipeArrow {
    constructor(public from: recipeCircle, public to: recipeCircle) {}
}

type itemIndex = number;
type drawOffset = number;

export function SVGHuristic({huristic}: {huristic: chainHuristicsStats}) {
    // console.log(huristic);
    let boxStartX = 0;
    // let boxStartY = 0;
    let boxWidth = window.innerWidth;
    let widthPadding = boxWidth / 10;
    let screenHeight = 0.5;
    let boxHeight = window.innerHeight * screenHeight;
    let heightPadding = boxHeight / 10;
    let breadthOffset = (boxHeight - 2 * heightPadding) / huristic.fixed_src.hWidth;  // This one will need to get scaled better latter
    let depthOffset = (boxWidth - 2 * widthPadding) / (Math.max(huristic.longest_depth, 0));
    boxStartX += 2 * depthOffset;
    
    let nodeStateStack: Array<[recipeChainNode, itemIndex, drawOffset]> = [[huristic.fixed_src, 0, 0]];
    let circleStack: Array<recipeCircle> = []
    let lastPop = false;

    let circleCollection: Array<recipeCircle> = [];
    let arrowCollection: Array<recipeArrow> = [];

    while (nodeStateStack.length > 0) {
        // Grab the current top of the stack
        let currentNode = nodeStateStack.at(-1)!;
        let depth = nodeStateStack.length;
        
        let circle: recipeCircle;
        if (!lastPop) {
            // If we aren't returning from an exhausted node (Only happens on new node)
            circle = new recipeCircle(currentNode[0], widthPadding + depth * depthOffset, heightPadding + currentNode[2] + breadthOffset * currentNode[0].hWidth / 2);
            circleCollection.push(circle);
            if (circleStack.length > 1) {
                arrowCollection.push(new recipeArrow(circleStack.at(-1)!, circle));
            }
        } else {
            // Otherwise grab the circle node that we know already exists
            circle = circleStack.pop()!;
        }

        if (currentNode[1] < currentNode[0].src.items.length) {
            // If we haven't exhausted our current node
            // Calculate the breadth offset currently in place
            let currentBreadth = 0;
            for (let itemNum = 0; itemNum < currentNode[1]; itemNum++) {
                currentBreadth += currentNode[0].src.items[itemNum].variants[0].hWidth;
            }
            // Store the next child on the stack
            nodeStateStack.push([currentNode[0].src.items[currentNode[1]].variants[0], 0, currentNode[2] + currentBreadth * breadthOffset]);
            circleStack.push(circle);
            currentNode[1]++;
            lastPop = false;
        } else {
            if (currentNode[1] == 0) {  // This is the end of the recipe line
                let items = huristic.data.getRecipe(currentNode[0].rId)!.inputResources;
                for (let itemIndex = 0; itemIndex < items.length; itemIndex++) { // Hack on circles for the final items in the chain
                    let stack = items[itemIndex];
                    let tempRecipeNode = new recipeChainNode(0, stack.resourceName)
                    tempRecipeNode.hRatio = stack.amount * circle.node.hRatio;  // Store the needed value in the node storage

                    let finalCircle = new recipeCircle(tempRecipeNode, widthPadding + (depth + 1) * depthOffset, heightPadding + currentNode[2] + breadthOffset * (itemIndex + 0.5), true);

                    circleCollection.push(finalCircle);
                    arrowCollection.push(new recipeArrow(circle, finalCircle));
                }

            }
            nodeStateStack.pop();
            lastPop = true;
        }
    }

    return (
        <svg className={`bg-white w-full h-[${Math.round(boxHeight)}px]`} viewBox={`${boxStartX} 0 ${boxWidth} ${boxHeight}`}>
            {arrowCollection.map((arrow) => {
                let lineVals = calcArrows(arrow.from, arrow.to);
                return <ArrowPath start={lineVals.b} end={lineVals.a} key={[lineVals.a.x, lineVals.a.y, lineVals.b.x, lineVals.b.y].join(" ")}/>
            })}
            {circleCollection.map((cir, i) => {
                if (i != 0) { // Remove the root holding node that we don't actually need (for now.)
                    let total: number;
                    if (!cir.base) {
                        let goalStack = huristic.data.getRecipe(cir.node.rId)!.outputResources.find(rec => rec.resourceName == cir.node.goal);
                        total = goalStack!.amount * cir.node.hRatio;
                    } else {
                        total = cir.node.hRatio
                    }
                    return <TextCircle center={{x: cir.x, y: cir.y}} text={`${total}x of ${cir.node.goal}`} key={[cir.node.goal, cir.x, cir.y].join(" ")}/>
                }
            })}
            {/* Debug circles */}
            <TextCircle center={{x: boxStartX, y: 0}} text=""/>
            <TextCircle center={{x: boxStartX + boxWidth, y: boxHeight}} text=""/>
            
        </svg>
    )
}