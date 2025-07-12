import { Permutation } from "./permutations";
import { CraftingData, Recipe, Resource, Stack } from "./units";


export type RRKey = string | number;   // Recipe or Resource name/key

export class PermMeta {
    // Outside data
    craftingData: CraftingData;

    // Build permutation
    permutation: Record<string, number> = {};
    root: StepNode | null = null;
    treeStack: Array<StepNode> = [];
    visitedSet: Set<RRKey> = new Set();

    // Do metadata stuff
    depth: number = -1;
    leveledNodes: Array<StepNode> = [];
    savedLeveledNodes: Set<RRKey> = new Set();
    nodeCache: Record<RRKey, StepNode> = {};

    recipeCounts: Record<RRKey, number> = {};
    recipeOrder: Array<RRKey> = []; // If RRKey is a number then the order can be broken
    resourceCounts: Record<RRKey, number> = {};
    resourceOrder: Array<RRKey> = [];

    inputStacks: Array<Stack> = [];
    intermediateStacks: Array<Stack> = [];
    outputStacks: Array<Stack> = []; 
    cost = 0;

    constructor(perm: Record<string, number>, craftingData: CraftingData) {
        this.loadPermutation(perm);
        this.craftingData = craftingData;
    }

    build() {
        if (this.root == null) {
            console.error("Trying to build PermMeta when root is null");
            return;
        }
        this.root.setDepths();
        this.leveledNodes.sort((a, b) => a.depth - b.depth);  // Sort leveled nodes by depth; 0 comes first
        this.propagateRatios();
        this.calculateSizes();
        this.buildSteps();
    }

    loadPermutation(perm: Record<string, number>) {
        for (const [k, v] of Object.entries(perm)) {
            this.permutation[k] = v
        }
    }
          
    propagateRatios() {
        if (this.root == null) {
            console.error("Permutation root has not been set.", this);
            return;
        }
        for (const node of this.leveledNodes.slice(1)) {    // These have already been set
            if (node.root) {
                continue;
            } else if (node.type == StepNodeType.RESOURCE) {
                // When a resource has multiple parents, that means that it's needed for multiple recipes
                const startingRatio = node.countRatio;
                node.countRatio = 0;
                for (const parentNode of node.parents) {
                    if (!parentNode.root){
                        const recipeInput = this.craftingData.getRecipeInputAmount(parentNode.name as number, node.name as string);
                        node.countRatio += parentNode.countRatio * recipeInput!.amount;
                    } else {
                        node.countRatio += startingRatio;
                    }
                }
            } else if (node.type == StepNodeType.RECIPE) {
                // When a recipe has multiple parents, that means the recipe produces multiple outputs, each of which are used
                const parentRatios: Record<RRKey, number> = {};
                for (const parentNode of node.parents) {
                    parentRatios[parentNode.name] = parentNode.countRatio;
                }
                const nodeRecipe = this.craftingData.getRecipe(node.name as number)!;
                for (const recipeOutput of nodeRecipe.outputResources) {
                    if (recipeOutput.resourceName in parentRatios) {
                        parentRatios[recipeOutput.resourceName] /= recipeOutput.amount;
                    }
                }
                const minRatio = Math.ceil(Math.max(...Object.values(parentRatios)));
                node.countRatio = minRatio;

            }
        }
    }

    calculateSizes() {
        // Calculate widths + complexities
        if (this.root == null) {
            console.error("Trying to calculate sizes without a root?");
            return;
        }
        for (const node of this.leveledNodes.toReversed()) {
            if (node.type == StepNodeType.RESOURCE && node.isBase()) {
                node.width = 1;
                
                this.resourceCounts[node.name] = node.countRatio;
                this.resourceOrder.push(node.name);
                // log2 because the assumtion is that it's easier to get more of an item you already have many of
                // as opposed to adding new items
                this.cost += Math.log2(node.countRatio * this.craftingData.resources[node.name as string].value + 1);
            } else {
                if (node.type == StepNodeType.RECIPE) {
                    this.recipeCounts[node.name] = node.countRatio;
                    this.recipeOrder.push(node.name);
                } else if (node.type == StepNodeType.RESOURCE) {
                    this.resourceCounts[node.name] = node.countRatio;
                    this.resourceOrder.push(node.name);
                }
                // Build accounted set
                for (const child of node.children) {
                    node.widthsAccountedFor = node.widthsAccountedFor.union(child.widthsAccountedFor);
                }
                // Add if not already accounted for
                if (node.isBase()) {
                    node.width = 1;
                } else {
                    node.width = 0;
                    for (const child of node.children) {
                        if (!(node.widthsAccountedFor.has(child.name))) {
                            node.width += child.width;
                            node.widthsAccountedFor.add(child.name);
                        }
                    }
                }
            }
        }
        const maxWidth = this.root.width;
        for (let depthIndex = 0; depthIndex <= this.depth; depthIndex++) {
            const nodesInLevel = this.leveledNodes.filter(node => node.depth == depthIndex);
            const minWidth = nodesInLevel.map(node => node.width).reduce((prev, curr) => prev + curr, 0);
            let accruedOffset = 0;
            
            for (const node of nodesInLevel) {
                node.scaledWidthOffset = accruedOffset;
                const scaledWidth = node.width / minWidth * maxWidth
                node.scaledWidth = scaledWidth;
                accruedOffset += scaledWidth;
            }
        }
    }

    buildSteps() {
        for (const resourceName of this.resourceOrder) {
            const resourceNode = this.nodeCache[resourceName];
            if (resourceNode.children.length == 0) {
                this.inputStacks.push(new Stack(resourceName as string, resourceNode.countRatio));
            }  
        }
        const rootResources: Array<RRKey> = this.nodeCache[-1].children.map(node => node.name);
        const handledParents: Set<RRKey> = new Set();
        for (const recipeName of this.recipeOrder) {
            const recipeNode = this.nodeCache[recipeName];
            if (!recipeNode.root) {
                for (const parentNode of recipeNode.parents) {
                    if (!handledParents.has(parentNode.name)) {
                        handledParents.add(parentNode.name)
                        const producedCount = this.craftingData.getRecipeOutputAmount(recipeName as number, parentNode.name as string)!.amount * recipeNode.countRatio;
                        if (!(rootResources.includes(parentNode.name) && producedCount == parentNode.startingRequestRatio)) {     // Don't want final outputs to be included in the intermediate list
                            this.intermediateStacks.push(new Stack(parentNode.name as string, producedCount));
                        }
                        if (producedCount > parentNode.countRatio) {    // Extra produced by rounding error
                            this.outputStacks.push(new Stack(parentNode.name as string, producedCount - parentNode.countRatio));
                        }
                    }
                }
            } else {    // Special case where children have been manually set
                for (const childNode of recipeNode.children.toReversed()) {
                    this.outputStacks.push(new Stack(childNode.name as string, childNode.startingRequestRatio));
                }
            }
        }
        this.outputStacks.reverse();
    }

}

export class SolveMeta{
    stepNodeCache: Record<RRKey, StepNode> = {};    // Node cache so the full tree can build itself.
    recipeOptions: Record<string, number> = {}; // Number of recipes the resource has
    recipePermutation: Record<string, number> = {};
    
    // Resetable traversal stats after each permutation
    currentPermMeta: PermMeta | null = null
    permMetaCollection: Record<string, PermMeta> = {};
    permLimitHit = false;
    permLimit = 500;

    craftingData: CraftingData;
    constructor(craftingData: CraftingData) {
        this.craftingData = craftingData;
    }

    reset() {
        this.permMetaCollection[JSON.stringify(this.currentPermMeta!.permutation)] = this.currentPermMeta!;
        this.currentPermMeta = null;
    }

    getBest(evalFunc: Function): PermMeta {
        // Lower is considered better
        let score = 1e100;
        let best: PermMeta | null = null;
        for (const perm of Object.values(this.permMetaCollection)) {
            const permScore = evalFunc(perm);
            if (permScore < score) {
                score = permScore;
                best = perm;
            }
        }
        if (best == null) {
            console.error(`There is no best. Either no permutations exist or there are invalid numbers. (best: ${best})`)
        }
        return best!;
    }

    static minCostFunc(perm: PermMeta) {
        return perm.cost;
    }
}

export enum StepNodeType {
    RECIPE,
    RESOURCE,
}

export class StepNode {
    // Stage 1: Building the graph
    type: StepNodeType;
    name: RRKey;
    parents: Array<StepNode> = [];
    children: Array<StepNode> = [];
    root: boolean = false;
    possible: boolean = true;
    
    // Stage 2: Depth count
    depth: number = -1;
    
    // Stage 3: Analysis and Propagation
    countRatio: number = -1;    // Number of times this node is used in the recipe
    startingRequestRatio = -1;
    width: number = -1;      // How much width is needed
    widthsAccountedFor: Set<RRKey> = new Set();
    scaledWidth: number = -1;   // Basically rendering coordinates
    scaledWidthOffset: number = -1;
    
    // Data from outside
    craftingData: CraftingData;
    solveMeta: SolveMeta;
    
    _testingId: number;    // For testing purposes
    
    constructor(type: StepNodeType, name: RRKey, craftingData: CraftingData, solveMeta: SolveMeta) {
        this.type = type;
        this.name = name;
        
        this.craftingData = craftingData;
        this.solveMeta = solveMeta;

        this._testingId = Math.round(Math.random() * 1000000);  // For testing purposes
    }

    addChild(child: StepNode) {
        this.children.push(child);
        child.parents.push(this);
    }

    getSrcs() {
        if (this.type == StepNodeType.RESOURCE) {
            return this.craftingData.findRecipesFor(this.name as string);
        } else if (this.type == StepNodeType.RECIPE) {
            return this.craftingData.getRecipe(this.name as number)?.getInputNames() || [];
        } else {
            throw new Error("Invalid StepNode type");
        }
    }

    swapType(): StepNodeType {
        if (this.type == StepNodeType.RESOURCE) {
            return StepNodeType.RECIPE;
        } else if (this.type == StepNodeType.RECIPE) {
            return StepNodeType.RESOURCE;
        } else {
            throw new Error("Invalid StepNode type");
        }
    }

    populateChildren() {
        // Builds an acyclic graph of all possible recipes and resources
        if (!this.root) {
            console.log("base check")
            console.log(this)
        }
        if (this.root) {
            for (let child of this.children) {
                this.solveMeta.stepNodeCache[child.name] = child;
                child.populateChildren();
            }
        } else if (!this.isBase()) {    // Add children as long as:
            let parents = this.parentNames();   // Names of all possible parents to make sure we haven't seen this node before
            for (let srcName of this.getSrcs()) {
                const srcThing = this.craftingData.get(srcName)!;
                if (!parents.has(srcName)   // Skip this src child if: 
                    && !srcThing.isDisabled 
                    && !(this.type == StepNodeType.RESOURCE && this.craftingData.processes[(srcThing as Recipe).processUsed].isDisabled)) {
                    if (srcName in this.solveMeta.stepNodeCache) {
                        let childNode = this.solveMeta.stepNodeCache[srcName];
                        this.addChild(childNode);
                    } else {
                        let childNode = new StepNode(this.swapType(), srcName, this.craftingData, this.solveMeta);
                        this.addChild(childNode);
                        this.solveMeta.stepNodeCache[srcName] = childNode;
                        if (!srcThing.isBase) {
                            childNode.populateChildren();
                        }
                    }
                }
            }
        }
    }

    parentNames(collection: Set<RRKey> | undefined = undefined): Set<RRKey> {
        if (!collection) {
            collection = new Set<RRKey>();
        } else {
            collection.add(this.name);
        }
        for (let parent of this.parents) {
            parent.parentNames(collection);
        }
        return collection;
    }

    buildPermTree() {
        // ATM Each node handles it's own mutations to the permStack
        if (this.solveMeta.currentPermMeta == null) {
            console.error("BuildPermTree called without currentPermMeta set.")
            return;
        }
        // Skip recipes already traversed. This is the recursion check as well
        let newNode = null;
        let alreadyVisited = false;

        if (this.type == StepNodeType.RECIPE) {
            if (this.solveMeta.currentPermMeta.visitedSet.has(this.name)) {
                newNode = this.solveMeta.currentPermMeta.nodeCache[this.name];
                alreadyVisited = true;
            } else {
                this.solveMeta.currentPermMeta.visitedSet.add(this.name);
                newNode = new StepNode(this.type, this.name, this.craftingData, this.solveMeta);
                newNode.startingRequestRatio = this.startingRequestRatio;
                this.solveMeta.currentPermMeta.nodeCache[this.name] = newNode;
            }
        } else if (this.type == StepNodeType.RESOURCE) {
            if (this.solveMeta.currentPermMeta.visitedSet.has(this.name)) {
                newNode = this.solveMeta.currentPermMeta.nodeCache[this.name];
            } else {
                newNode = new StepNode(this.type, this.name, this.craftingData, this.solveMeta);
                newNode.startingRequestRatio = this.startingRequestRatio;
                this.solveMeta.currentPermMeta.nodeCache[this.name] = newNode;
            }
            this.solveMeta.currentPermMeta.visitedSet.add(this.name);
        } else {
            console.error("Invalid node type when building perm tree", this);
            return;
        }
        
        newNode.countRatio = this.countRatio;
        if (this.root) {        // Set up first/root node
            newNode.root = true;
            this.solveMeta.currentPermMeta.root = newNode
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            for (const child of this.children) {
                child.buildPermTree();
            }
            this.solveMeta.currentPermMeta.treeStack.pop();
        } else if (this.type == StepNodeType.RECIPE) {  // Add recipe node to parent and iterate all children
            const parent = this.solveMeta.currentPermMeta.treeStack[this.solveMeta.currentPermMeta.treeStack.length - 1];
            parent.addChild(newNode);
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            if (!alreadyVisited) {
                for (const child of this.children) {
                    child.buildPermTree();
                }
            }
            this.solveMeta.currentPermMeta.treeStack.pop();
        } else if (this.type == StepNodeType.RESOURCE) {    // Registers resource node and only recurses into permutation recipe
            const parent = this.solveMeta.currentPermMeta.treeStack[this.solveMeta.currentPermMeta.treeStack.length - 1];
            parent.addChild(newNode);
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            if (this.children.length == 1) {        // This avoids an extra perm lookup
                this.children[0].buildPermTree();                
            } else if (this.children.length > 1) {
                if (this.solveMeta.recipePermutation[this.name] == undefined) {
                    console.log(this.name, "doesn't exist in", this.solveMeta.recipePermutation)
                    console.log(this);
                }
                this.children[this.solveMeta.recipePermutation[this.name]].buildPermTree();
            }
            this.solveMeta.currentPermMeta.treeStack.pop();
        }
    }

    pruneBadNodes() {
        // Takes the approach of removing self from parents if invalid
        // Recurse first, builder gaurentees no loops.
        let rootChildren = 0;
        if (this.root) {
            rootChildren = this.children.length;
        }
        for (const child of this.children) {
            child.pruneBadNodes();
        }

        let removeSelf = false;
        if (this.root && this.children.length != rootChildren) {
            this.children = [];
            this.possible = false;
        } else if (this.root) {     // I don't like this, but we don't have anything to do after this.
            return;
        } else if (this.type == StepNodeType.RECIPE && this.children.length != this.craftingData.getRecipe(this.name as number)!.inputResources.length) {    // This also handles the root
            const tempRecipe = this.craftingData.getRecipe(this.name as number);
            // console.log("pruning recipe, in:", tempRecipe?.inputResources, "out", tempRecipe?.outputResources);
            removeSelf = true;
        } else if (this.type == StepNodeType.RESOURCE && this.children.length == 0 && !this.craftingData.resources[this.name]!.isBase) {
            // console.log("pruning resource", this.craftingData.get(this.name));
            removeSelf = true;
        }
        if (removeSelf) {
            for (const parent of this.parents) {
                parent.children = parent.children.filter(child => child.name != this.name);
            }
        }
    }

    findPermOptions() {
        if (this.root) {
            for (const child of this.children) {
                child.findPermOptions();
            }
        } else {
            if (this.children.length > 1 && this.type == StepNodeType.RESOURCE && this.solveMeta.recipeOptions[this.name] == undefined) {
                this.solveMeta.recipeOptions[this.name] = this.children.length;
                // console.log("adding permutation", this.name, this.solveMeta.recipeOptions)
            }
            for (const child of this.children) {
                child.findPermOptions();
            }
        }

    }

    setDepths() {
        if (this.solveMeta.currentPermMeta == null) {
            console.error("SolveMeta.currentPermMeta is not set in setDepths");
            return;
        }

        // Also use this function to store flattened nodes. Order does not matter yet as long as unique
        if (!this.solveMeta.currentPermMeta.savedLeveledNodes.has(this.name)) {            
            this.solveMeta.currentPermMeta.savedLeveledNodes.add(this.name);
            this.solveMeta.currentPermMeta.leveledNodes.push(this);
        }
        if (!(this.name in this.solveMeta.currentPermMeta.nodeCache)) {
            this.solveMeta.currentPermMeta.nodeCache[this.name] = this;
        }

        if (this.root) {
            this.depth = 0;
        } else {
            this.depth = Math.max(...this.parents.map(p => p.depth)) + 1;
        }
        // Log the longest depth if new max
        if (this.children.length == 0) {
            this.solveMeta.currentPermMeta.depth = Math.max(this.solveMeta.currentPermMeta.depth, this.depth);
        }

        for (const child of this.children) {
            child.setDepths()
        }
    }
    
    isBase() {
        // // I'm lazy and I think this looks nicer.
        // // This is ok because health checks already passed.
        // return this.children.length == 0;
        return !this.root && this.craftingData.get(this.name)!.isBase;
    }
}


export class TempSolver {

    constructor(public data: CraftingData) {
        this.data = data;
        this.healthCheck();
    }

    healthCheck() {
        if (!this.data.passedHealthCheck) {
            console.error("CraftingData has not passed health check. Please run data.healthCheck() before using the solver.");
            return false;
        }
        return true;
    }

    solve(request: Array<Stack>) {
        console.log("health", this.data.passedHealthCheck);
        if (!this.healthCheck()) {
            return null;
        }
        let meta = new SolveMeta(this.data);
        let rootNode = this.createGraph(request, meta);
        console.log("root node", rootNode);
        if (!rootNode.possible) {
            console.error("Request has invalid items. (Items that cannot be crafted based on available base items.) Not sure how you did that. (Maybe you disabled items that were needed)")
            return rootNode;
        }
        let permutation = new Permutation(meta.recipeOptions);
        for (meta.recipePermutation = permutation.get(); 
            !permutation.done && Object.keys(meta.permMetaCollection).length < meta.permLimit; 
            permutation.incrementPermutation(), meta.recipePermutation = permutation.get()) {

            const permMeta = new PermMeta(meta.recipePermutation, this.data);
            meta.currentPermMeta = permMeta;

            rootNode.buildPermTree();       // Based on rootNode, build the perm tree using perm info
            
            permMeta.build();

            meta.reset();
        }

        if (Object.keys(meta.permMetaCollection).length >= meta.permLimit) {
            console.warn("Permutations exceeded collection size limit of " + meta.permLimit + ". Some permutations may not have been evaluated.");
            rootNode.solveMeta.permLimitHit = true;
        }


        return rootNode;
    }

    createGraph(request: Array<Stack>, meta: SolveMeta) {
        let rootNode = new StepNode(StepNodeType.RECIPE, -1, this.data, meta);
        rootNode.root = true;
        rootNode.countRatio = 1;
        for (let stack of request) {
            if (this.data.resources[stack.resourceName] == undefined) {
                rootNode.possible = false;
                return rootNode;
            }
            let resourceNode = new StepNode(StepNodeType.RESOURCE, stack.resourceName, this.data, meta);
            resourceNode.countRatio = stack.amount;
            resourceNode.startingRequestRatio = stack.amount;
            rootNode.addChild(resourceNode);
            meta.stepNodeCache[stack.resourceName] = resourceNode;
        }
        rootNode.populateChildren();
        rootNode.pruneBadNodes();
        rootNode.findPermOptions();
        return rootNode;
    }


}

