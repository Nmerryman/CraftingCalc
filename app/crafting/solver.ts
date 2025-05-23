
import { chainHuristicsStats, craftingPathChoices, craftingPathPart, prePermRecipeChainNode, recipeVariants } from "./craftingChain";
import { Permutation } from "./permutations";
import { CraftingData, Stack } from "./units";
import _ from "lodash";


type RRKey = string | number;   // Recipe or Resource name/key

class PermMeta {
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

    uniqueRecipeCount = 0;
    recipeCount = 0;
    uniqueResourceCount = 0;
    resourceCount = 0;
    cost = 0;

    constructor(perm: Record<string, number>, craftingData: CraftingData) {
        this.loadPermutation(perm);
        this.craftingData = craftingData;
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
        for (const node of this.leveledNodes.slice(1 + this.root.children.length)) {    // These have already been set
            if (node.type == StepNodeType.RESOURCE) {
                // When a resource has multiple parents, that means that it's needed for multiple recipes
                node.countRatio = 0;
                for (const parentNode of node.parents) {
                    const recipeInput = this.craftingData.getRecipeInputAmount(parentNode.name as number, node.name as string);
                    node.countRatio += parentNode.countRatio * recipeInput!.amount;
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
        
        for (const node of this.leveledNodes.toReversed()) {
            if (node.children.length == 0) {
                node.width = 1;
                // We know that childless nodes will be resources
                this.uniqueResourceCount += 1;
                this.resourceCount += node.countRatio;
                console.log("CS name", node.name)
                this.cost += node.countRatio * this.craftingData.resources[node.name as string].value;
            } else {
                if (node.type == StepNodeType.RECIPE) {
                    this.uniqueRecipeCount += 1;
                    this.recipeCount += node.countRatio;
                } else if (node.type == StepNodeType.RESOURCE) {
                    this.uniqueResourceCount += 1;
                    this.resourceCount += node.countRatio;
                }
                // Build accounted set
                for (const child of node.children) {
                    node.widthsAccountedFor = node.widthsAccountedFor.union(child.widthsAccountedFor);
                }
                // Add if not already accounted for
                node.width = 0;
                for (const child of node.children) {
                    if (!(child.name in node.widthsAccountedFor)) {
                        node.width += child.width;
                        node.widthsAccountedFor.add(child.name);
                    }
                }
            }
        }
    }


}

class SolveMeta{
    nodeCache: Record<RRKey, StepNode> = {};    // Cache of the recipe
    recipeOptions: Record<string, number> = {}; // Number of recipes the resource has
    recipePermutation: Record<string, number> = {};
    
    // Resetable traversal stats after each permutation
    currentPermMeta: PermMeta | null = null
    permMetaCollection: Record<string, PermMeta> = {};

    reset() {
        this.permMetaCollection[JSON.stringify(this.currentPermMeta!.permutation)] = this.currentPermMeta!;
        this.currentPermMeta = null;

    }
}

enum StepNodeType {
    RECIPE,
    RESOURCE,
}

class StepNode {
    // Stage 1: Building the graph
    type: StepNodeType;
    name: string | number;
    parents: Array<StepNode> = [];
    children: Array<StepNode> = [];
    root: boolean = false;
    possible: boolean = true;
    
    // Stage 2: Depth count
    depth: number = -1;
    
    // Stage 3: Analysis and Propagation
    countRatio: number = -1;    // Number of times this node is used in the recipe
    width: number = -1;      // How much width is needed
    widthsAccountedFor: Set<RRKey> = new Set();
    
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
        if (this.root) {
            for (let child of this.children) {
                this.solveMeta.nodeCache[child.name] = child;
                child.populateChildren();
            }
        } else {
            let parents = this.parentNames();
            for (let srcName of this.getSrcs()) {
                if (!parents.has(srcName) && !this.craftingData.get(srcName)!.isDisabled) {
                    if (srcName in this.solveMeta.nodeCache) {
                        let childNode = this.solveMeta.nodeCache[srcName];
                        this.addChild(childNode);
                    } else {
                        let childNode = new StepNode(this.swapType(), srcName, this.craftingData, this.solveMeta);
                        this.addChild(childNode);
                        this.solveMeta.nodeCache[srcName] = childNode;
                        childNode.populateChildren();
                    }
                }
            }
            if (this.children.length > 0 && this.children[0].type == StepNodeType.RECIPE) {
                // console.log("adding", this.name)
                this.solveMeta.recipeOptions[this.name] = this.children.length;
                console.log("adding permutation", this.name, this.solveMeta.recipeOptions)
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
        // Skip nodes already traversed. This is thte recursion check as well
        if (this.name in this.solveMeta.currentPermMeta.visitedSet) {
            return;
        } else {
            this.solveMeta.currentPermMeta.visitedSet.add(this.name);
        }
        const newNode = new StepNode(this.type, this.name, this.craftingData, this.solveMeta);
        newNode.countRatio = this.countRatio;
        if (this.root) {
            newNode.root = true;
            this.solveMeta.currentPermMeta.root = newNode
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            for (const child of this.children) {
                child.buildPermTree();
            }
            this.solveMeta.currentPermMeta.treeStack.pop();
        } else if (this.type == StepNodeType.RECIPE) {
            const parent = this.solveMeta.currentPermMeta.treeStack[this.solveMeta.currentPermMeta.treeStack.length - 1];
            parent.addChild(newNode);
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            for (const child of this.children) {
                child.buildPermTree();
            }
            this.solveMeta.currentPermMeta.treeStack.pop();
        } else if (this.type == StepNodeType.RESOURCE) {
            const parent = this.solveMeta.currentPermMeta.treeStack[this.solveMeta.currentPermMeta.treeStack.length - 1];
            parent.addChild(newNode);
            this.solveMeta.currentPermMeta.treeStack.push(newNode);
            if (this.children.length == 1) {        // This avoids an extra perm lookup
                this.children[0].buildPermTree();                
            } else if (this.children.length > 1) {
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
        console.log("in", this.name);
        for (const child of this.children) {
            child.pruneBadNodes();
        }
        console.log("checking", this.name)

        let removeSelf = false;
        if (this.root && this.children.length != rootChildren) {
            this.children = [];
            this.possible = false;
        } else if (this.root) {     // I don't like this, but we don't have anything to do after this.
            return;
        } else if (this.type == StepNodeType.RECIPE && this.children.length != this.craftingData.getRecipe(this.name as number)!.inputResources.length) {    // This also handles the root
            console.log("rr name", this.name)
            console.log("rr length", this.children)
            console.log("rr recipe", this.craftingData.getRecipe(this.name as number))
            removeSelf = true;
        } else if (this.type == StepNodeType.RESOURCE && this.children.length == 0 && !this.craftingData.resources[this.name]!.isBase) {
            removeSelf = true;
        }
        if (removeSelf) {
            console.log("removing", this.name)
            for (const parent of this.parents) {
                parent.children = parent.children.filter(child => child.name != this.name);
            }
        }
        console.log("out", this.name)
    }

    setDepths() {
        if (this.solveMeta.currentPermMeta == null) {
            console.error("SolveMeta.currentPermMeta is not set in setDepths");
            return;
        }
        // console.log(this._testingId, this.solveMeta.recipePermutation)
        if (this.root) {
            this.depth = 0;
        }
        // Log the longest depth
        if (this.children.length == 0) {
            this.solveMeta.currentPermMeta.depth = Math.max(this.solveMeta.currentPermMeta.depth, this.depth);
        }
        // Also use this function to store flattened nodes
        if (!this.solveMeta.currentPermMeta.savedLeveledNodes.has(this.name)) {            
            this.solveMeta.currentPermMeta.savedLeveledNodes.add(this.name);
            this.solveMeta.currentPermMeta.leveledNodes.push(this);
        }
        // Split up so that it gets updated in level order
        for (let child of this.children) {
            child.depth = this.depth + 1;
        }

        // if (this.children.length > 0 && this.type == StepNodeType.RESOURCE) {
        //     console.log("name", this.name)
        //     console.log("perm", this.solveMeta.recipePermutation)
        //     console.log("children", this.children)
        //     this.children[this.solveMeta.recipePermutation[this.name]].setDepths()
        // } else {
        // }
        for (const child of this.children) {
            child.setDepths()
        }
    }
}


export class TempSolver {

    constructor(public data: CraftingData) {
        this.data = data;

    }

    solve(request: Array<Stack>) {
        let meta = new SolveMeta();
        let rootNode = this.createGraph(request, meta);
        console.log("root node", rootNode);
        let permutation = new Permutation(meta.recipeOptions);
        for (meta.recipePermutation = permutation.get(); 
            !permutation.done; 
            permutation.incrementPermutation(), meta.recipePermutation = permutation.get()) {

            const permMeta = new PermMeta(meta.recipePermutation, this.data);
            meta.currentPermMeta = permMeta;

            console.log("depths set", meta.recipePermutation)
            rootNode.buildPermTree();       // Based on rootNode, build the perm tree using perm info
            
            permMeta.root!.setDepths();     // Gets set in buildPermTree()
            permMeta.leveledNodes.sort((a, b) => a.depth - b.depth);  // Sort leveled nodes by depth
            permMeta.propagateRatios();
            console.log("perm", permMeta)
            permMeta.calculateSizes();

            console.log("meta", rootNode.solveMeta)
            console.log("-------")
            // return
            meta.reset();
        }


        return rootNode;
    }

    createGraph(request: Array<Stack>, meta: SolveMeta) {
        let rootNode = new StepNode(StepNodeType.RECIPE, -1, this.data, meta);
        rootNode.root = true;
        rootNode.countRatio = 1;
        for (let stack of request) {
            let resourceNode = new StepNode(StepNodeType.RESOURCE, stack.resourceName, this.data, meta);
            resourceNode.countRatio = stack.amount;
            rootNode.addChild(resourceNode);
        }
        rootNode.populateChildren();
        rootNode.pruneBadNodes();
        return rootNode;
    }


}

interface HuristicEval {(huristic: chainHuristicsStats): number}


export class Solver {


    constructor(public data: CraftingData) {
        this.data = data;
    }

    // Build the initial recipeChainNode tree based on a single starting node
    // Returns if this node is considered "valid". Not sure if this ruins the function structure
    createChainGraph(start: prePermRecipeChainNode, dupePathCheck: Set<string> = new Set(), prePermCache: Record<number, prePermRecipeChainNode> = {}): boolean {
        // We assume that the start has the recipe id and we are trying to fill in all of the src children
        if (!this.data.getRecipe(start.rId)) {
            console.log("Something went very wrong. This starting recipe doesn't exist");
            console.log(start, this.data.recipes);
        } 

        if (dupePathCheck.size > 20) {
            console.log("dupeCheck is going deeper than expected. (20 recipes deep) Killing.")
            return false; 
        }

        for (let resourceName of this.data.getRecipe(start.rId)!.getInputNames()) {  // for every resource needed to complete the recipe
            if (this.data.resources[resourceName].isDisabled) {  // Check if this recipe tries to use a disabled resource
                return false;
            }

            let tempItemRecipes = this.data.findRecipesFor(resourceName);  // Collect all recipes that could be used for this resource
            let variantArray: recipeVariants = {variants: []};

            for (let recipeId of tempItemRecipes) {
                let dupeVal = `[${recipeId}, ${resourceName}]`;  // Check value for which recipe and for which item it's used for

                if (!dupePathCheck.has(dupeVal)) {  // Check if this part of the recipe has already been used in the chain
                    let tempDupeCheck = new Set(dupePathCheck);
                    tempDupeCheck.add(dupeVal);  // Add current use to the dupe check
                    let tempNode = new prePermRecipeChainNode(recipeId, resourceName);
                    prePermCache[recipeId] = tempNode;  // Add to the cache for this recipe id

                    if (this.createChainGraph(tempNode, tempDupeCheck)) {
                        variantArray.variants.push(tempNode);
                    }
                }
            }
            if (variantArray.variants.length == 0 && tempItemRecipes.length > 0) {
                return false;
            }
            if (variantArray.variants.length > 0) {
                start.src.items.push(variantArray);
            }
        }
        return true;
    }

    // Explore the node to find all places that have multiple variants
    collectDecisionHashes(start: prePermRecipeChainNode, collectionData: craftingPathChoices) {
        for (let item of start.src.items) {
            if (item.variants.length > 1 && !(item.variants[0].goal in collectionData.choices)) {  // If there are choices to make and we haven't already handled this case
                let variantCollection: craftingPathPart = {goal: item.variants[0].goal, rIdOptions: item.variants.map(r => r.rId)};  // [0].goal is ok because we have at least 2 here
                collectionData.choices[variantCollection.goal] = variantCollection;
            }
            for (let recipe of item.variants) {
                this.collectDecisionHashes(recipe, collectionData);
            }
        }
    } 

    // Expand a list of available permutations into each possible iteration
    generateChoicePermutations(choiceCollection: craftingPathChoices): Array<craftingPathChoices> {
        // Check for no choice case
        if (Object.keys(choiceCollection.choices).length == 0) {
            return []
        }

        let maxes: Array<number> = [];
        let indexes: Array<number> = [];
        let nameOrder: Array<string> = Object.keys(choiceCollection.choices);

        // Extract data to set up state arrays
        for(let name of nameOrder) {
            maxes.push(choiceCollection.choices[name].rIdOptions.length);
            indexes.push(0);
        }
        
        // Loop stoping info
        let start_state = _.clone(indexes);
        let result: Array<craftingPathChoices> = [];
        let iteration_count = 0;

        while (!_.isEqual(indexes, start_state) || iteration_count == 0) {
            if (iteration_count > 10002) { // This will stop insanely high numbers of permutations. Not sure if needed. At this size, lag spikes are ~5s
                console.error("Permutation generation iteration count limit (10002) reached.");
                break;
            }
            iteration_count++;

            // Save current permutation state
            let temp_perm: craftingPathChoices = new craftingPathChoices();
            for (let i = 0; i < indexes.length; i++) {  // For each permutation entry
                temp_perm.choices[nameOrder[i]] = {goal: nameOrder[i], rIdOptions: [choiceCollection.choices[nameOrder[i]].rIdOptions[indexes[i]]]};
            }
            result.push(temp_perm);

            // Increment the permutation
            let mutIndex = 0;
            while (true) {
                indexes[mutIndex]++;

                if (indexes[mutIndex] == maxes[mutIndex]) {
                    indexes[mutIndex] = 0;
                    mutIndex++;

                } else {
                    break;
                }

                // We reach the end of the "number"
                if (mutIndex == indexes.length) {
                    break;
                }
            }
        }
        return result;
    }

    // A basic wrapper function to apply the eval function to each huristic and return the best one. Lower is better
    bestHuristic(options: Array<chainHuristicsStats>, evalFunc: HuristicEval) {
        // We want lowest cost rn
        let bestScore = null;
        let bestOption: chainHuristicsStats|null = null;

        for (let option of options) {
            if (!bestOption) {
                bestOption = option;
                bestScore = evalFunc(option);

            } else {
                let tempScore = evalFunc(option);

                if (tempScore < bestScore!) {
                    bestScore = tempScore;
                    bestOption = option;
                }
            }
        }

        if (!bestOption) {
            console.log("FAILED TO FIND ANY WORKING OPTION.")
        }
        return bestOption!;
    }

    // A default implementation of a huristic eval function. It seems good enough for now. In order of impact: total number of input items > total number of resulting items > depth of longest chain > total nodes
    defaultHuristic(huristic: chainHuristicsStats): number {
        let inputCount = 0;
        
        for (let h of huristic.input) {
            inputCount += Math.ceil(h.amount);
        }
        let outputCount = 0;

        for (let h of huristic.output) {
            outputCount += Math.ceil(h.amount)
        }
        return inputCount * 1000 + outputCount * 100 + huristic.longestDepth * 10 + huristic.steps;
    }

    // This does the work
    // Based on a list of requested items, return all huristic analysis
    calcChain(start: Array<string>) {
        // Make sure we can run
        if (!this.data.passedHealthCheck) {
            this.data.runHealthChecks();

            if (!this.data.passedHealthCheck) {
                console.error("Failed health checks, not running CraftingData.calcChain");
                return [];
            }
        }

        // Merge all identical requests into a single larger one
        let startConsolidate: Record<string, Stack> = {}
        for (let s of start) {
            if (s in startConsolidate) {
                startConsolidate[s].amount++;

            } else {
                startConsolidate[s] = new Stack(s, 1)
            }
        }

        // Options hold all found paths to get to the item.
        let options = new prePermRecipeChainNode(0, "", true)  // Name is unique enough to not hit anything
        for (let startingRecipes of Object.values(startConsolidate)) {
            let variantsArray: recipeVariants = {variants: []};

            for (let possibleRecipes of this.data.findRecipesFor(startingRecipes.resourceName)) {
                let tempNode = new prePermRecipeChainNode(possibleRecipes, startingRecipes.resourceName);
                this.createChainGraph(tempNode);
                variantsArray.variants.push(tempNode);
            }
            if (variantsArray.variants.length > 0) {
                options.src.items.push(variantsArray);
            }
        }

        // Find decisions
        let collectionStore = new craftingPathChoices();

        this.collectDecisionHashes(options, collectionStore)

        // Optimize to create the best tree
        // I think we recommend the path that has the highest ratio of base items and if tied, the shortest path.
        let permutations = this.generateChoicePermutations(collectionStore)

        let huristicOptions: Array<chainHuristicsStats> = [];
        if (permutations.length == 0) {
            huristicOptions.push(new chainHuristicsStats(options, collectionStore, this.data, startConsolidate))

        } else {
            for (let perm of permutations) {
                let huristics = new chainHuristicsStats(options, perm, this.data, startConsolidate);
                huristicOptions.push(huristics);
            }
        }
        return huristicOptions;
    }
}
