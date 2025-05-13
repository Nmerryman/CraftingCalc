import { CraftingData, Stack } from "./units";


export type recipeVariants = {
    variants: Array<prePermRecipeChainNode>
}


type recipeSources = {
    items: Array<recipeVariants>
}


export class prePermRecipeChainNode {
    // src: [each item][each recipe]  ie. what are the source resources to finish the recipe
    src: recipeSources = {items: []};

    constructor(public rId: number, public goal: string, public root: boolean = false) {}
}


export class postPermRecipeChainNode {
    // src: [each recipe]  ie. what are the source resources to finish the recipe
    src: Array<postPermRecipeChainNode> = []

    // Extra field for carrying data in huristics step
    hRatio: number = 1;
    hWidth: number = 1;

    constructor(public rId: number, public goal: string, public root: boolean = false) {}
}


export type craftingPathPart = {
    goal: string,
    rIdOptions: Array<number>
}


export class craftingPathChoices {
    choices: Record<string, craftingPathPart> = {} // Last choice can also be used to carry the choice count.
}


export class chainHuristicsStats {
    steps: number = 0;
    input: Array<Stack> = [];
    inputStack: Array<Stack> = [];
    output: Array<Stack> = [];
    intermediate: Array<Stack> = [];
    recipesUsed: Record<string, Record<number, number>> = {};  // I think it's possible to produce an item with multiple different recipes if they happen to be byproducts [goal][rId]
    longestDepth: number = 0;
    fixedSrc: postPermRecipeChainNode = new postPermRecipeChainNode(0, "");

    constructor(public src: prePermRecipeChainNode, public choices: craftingPathChoices, public data: CraftingData, public finalReqs: Record<string, Stack>) {
        // Evaluate attributes here
        this.applyChoices();
        this.updateRatioReqs();
        this.extractInfoDepth(this.fixedSrc);
        this.extractInfoRevBreadth();
        this.mergeStacks();
    }

    applyChoices() {
        // Create this.fixed_src. It cleans up the tree by applying the permutation choices onto the src tree.
        let rootFixed = new postPermRecipeChainNode(this.src.rId, this.src.goal, true);

        // Init both the src and fixed to start with a single harness node
        let srcQueue: Array<prePermRecipeChainNode> = [this.src];
        let fixedQueue: Array<postPermRecipeChainNode> = [rootFixed];

        while (srcQueue.length > 0) {
            let currentSrc = srcQueue.pop()!;
            let currentFixed = fixedQueue.pop()!;

            for (let srcItem of currentSrc.src.items) {
                if (srcItem.variants.length == 1) {
                    let srcChild = srcItem.variants[0];
                    let tempPost = new postPermRecipeChainNode(srcChild.rId, srcChild.goal);
                    currentFixed.src.push(tempPost);

                    // Add children to the queue
                    srcQueue.push(srcChild);
                    fixedQueue.push(tempPost);

                } else if (srcItem.variants.length > 1) {  // multiple variants available
                    let exampleSrcChild = srcItem.variants[0];
                    let exampleGoal = exampleSrcChild.goal;
                    let tempPost = new postPermRecipeChainNode(this.choices.choices[exampleGoal].rIdOptions[0], exampleGoal);
                    currentFixed.src.push(tempPost);

                    // Add children to the queue
                    let tempVal = srcItem.variants.find(v => v.rId == this.choices.choices[exampleGoal].rIdOptions[0])!;
                    srcQueue.push(tempVal);
                    fixedQueue.push(tempPost);
                }
            }
        }
        this.fixedSrc = rootFixed;
    }

    updateRatioReqs() {
        // Set the requested ratios for each final item
        for (let node of this.fixedSrc.src) {
            node.hRatio = this.finalReqs[node.goal].amount;
        }
    }

    extractInfoDepth(current: postPermRecipeChainNode | null, depth: number = 0) {
        // Extract info from current node and iterate in a depth first recursive method.
        // We have the current parameter so we can call this function recursively.
        if (!current) {
            return;
        }
        
        // Sure whatever
        this.steps++;
        this.longestDepth = Math.max(this.longestDepth, depth);

        // Handle the head
        if (current.root) {
            for (let item of current.src) {
                let recipeStack = this.data.getRecipeOutputAmount(item.rId, item.goal)
                let tempTargetStack = new Stack(item.goal, item.hRatio / recipeStack!.amount);  // FIXME I bet that just using hRatio is not enough. Check else statement.
                // Add the ones needed into the processing stack
                this.inputStack.push(tempTargetStack);
                // Also make sure we keep the ones that get finished(Later iterations don't store the goal)
                this.output.push(tempTargetStack)
                // Recurse
                this.extractInfoDepth(item, depth + 1);
            }
        } else {
            // Get the last item put into the stack so we can calculate things like ratios
            let recipeTarget = this.inputStack.pop()!;
            // Grab the recipe that this node represents
            let recipe = this.data.getRecipe(current.rId)!;
            let targetOutput = recipe.outputResources.find((resource) => {return resource.resourceName == recipeTarget.resourceName})!;
            let ratio = Math.max(current.hRatio, recipeTarget.amount) / targetOutput.amount;
            current.hRatio = ratio;  // How many times we need to run the recipe
            
            for (let recipeOutput of recipe.outputResources) {
                if (recipeOutput.resourceName != recipeTarget.resourceName) {
                    // All extra items get put into the output
                    this.output.push(new Stack(recipeOutput.resourceName, recipeOutput.amount * ratio));
                }
            }
            for (let recipeInput of recipe.inputResources) {
                // Match up the recipe input with a recipeChainNode
                let node = current.src.find((item) => {
                    return item.goal == recipeInput.resourceName;
                });
                let tempRecipeInput = new Stack(recipeInput.resourceName, recipeInput.amount * ratio)

                if (node) {
                    // The input has a crafting recipe
                    this.inputStack.push(tempRecipeInput);
                    this.extractInfoDepth(node, depth + 1);

                } else {
                    // This input does not have a crafting recipe
                    this.input.push(tempRecipeInput);
                }
            }
        }
    }

    extractInfoRevBreadth() {
        // Loop through all nodes from the bottom up.
        // This could have been done through postorder traversal, but I wanted to try this way.

        // Flatten the tree via bfs
        let nodes: Array<postPermRecipeChainNode> = [];
        let queue = [this.fixedSrc];
        let index = 0;

        while (index < queue.length) {
            let current = queue[index];
            nodes.push(current);

            for (let item of current.src) {
                queue.push(item);
            }
            index++;
        }

        // Reversing lets us gaurentee we work all children before the parent
        nodes.reverse(); 

        // Calculate the width of each node including child nodes
        for (let node of nodes) {
            node.hWidth = node.src.reduce((acc: number, val: postPermRecipeChainNode) => acc + val.hWidth, 0)

            if (!node.root) { // Check for unaccounted ingredients when not at root
                node.hWidth += this.srcItemsWithoutRecipe(node).length;
            }
            if (!node.root){
                // Store all intermediate crafts
                // This could be done in the depth traversal, but then I lose the ordering
                let recipe = this.data.getRecipe(node.rId)!
                let count = recipe.outputResources.find(r => r.resourceName == node.goal)!.amount;
                this.intermediate.push(new Stack(node.goal, count * node.hRatio))
                if (!(node.goal in this.recipesUsed)){
                    this.recipesUsed[node.goal] = {};
                    this.recipesUsed[node.goal][recipe.id!] = 0;
                }
                this.recipesUsed[node.goal][recipe.id!] += node.hRatio;
            }
        }
    }

    mergeStacks() {
        // Take input, output and other applicaple stacks and merge ones that can be. 
        for (let sArray of [this.input, this.output, this.intermediate]) {
            let a = 0;

            while (a < sArray.length) {
                let b = a + 1;

                while (b < sArray.length) {
                    if (sArray[a].resourceName == sArray[b].resourceName) {
                        sArray[a].amount += sArray[b].amount;
                        sArray.splice(b, 1);

                    } else {
                        b++;
                    }
                }
                a++;
            }
        }
    }

    srcItemsWithoutRecipe(node: postPermRecipeChainNode) {
        const expected = this.data.getRecipe(node.rId)!.inputResources;
        const remaining = expected.filter((val: Stack) => {
            for (const item of node.src) {
                if (item.goal == val.resourceName) {
                    return false;
                }
            }
            return true;
        })
        return remaining;
    }
}

