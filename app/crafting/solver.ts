
import { chainHuristicsStats, craftingPathChoices, craftingPathPart, prePermRecipeChainNode, recipeVariants } from "./craftingChain";
import { CraftingData, Stack } from "./units";
import _, { create, get } from "lodash";


type recipeCache = Record<string, Array<recipeSolve>>; // Cache is [target+rId][perm#]


type solvePermInfo = {
    intermediateSolves: Set<string>;  // All solves needed loading up to current (Both used and unused and including extra from rId) TODO make into a function
    uses: Array<recipeSolve>;
    aids: Array<recipeSolve>;
}



class ResourceSolve {
    name: string;    // Resource name
    srcComplexitiesCosts: Array<number>;    // Complexity of the src recipes
    srcSolves: Array<recipeSolve>;    // Which recipe is used for the src complexity
    
    constructor(name: string, srcComplexitiesCosts: Array<number>, srcSolves: Array<recipeSolve>) {
        this.name = name;
        this.srcComplexitiesCosts = srcComplexitiesCosts;
        this.srcSolves = srcSolves;
    }

    hash() {
        return this.name;
    }
}

class recipeSolve {
    rId: number;    // Recipe id
    solveTarget: string;    // What we want out of the recipe
    srcResources: Array<ResourceSolve>;    // All resources that are used to make this recipe
    // perms: Array<solvePermInfo> = [];
    // permCount: number = 0;
    // cache: recipeCache;

    constructor(rid: number, goal: string, srcResources: Array<ResourceSolve>) {
        this.rId = rid;
        this.solveTarget = goal;
        this.srcResources = srcResources;
    }
    
    hash() {
        return `${this.rId}-${this.solveTarget}`;
    }
}

type RRKey = string | number;   // Recipe or Resource name/key

class SolveMeta{
    depth: number;    // Depth of the recipe
    nodeCache: Record<RRKey, PreNode>;    // Cache of the recipe
    leveledNodes: Array<PreNode>;    // Nodes but in order of depth so that dependencies work
    savedLeveledNodes: Set<RRKey>;    // Set of leveled nodes to prevent duplicates
    

    constructor() {
        this.depth = 0;
        this.nodeCache = {};
        this.leveledNodes = [];
        this.savedLeveledNodes = new Set<RRKey>();
    }
}

enum PreNodeType {
    RECIPE,
    RESOURCE,
}

class PreNode {
    // Stage 1: Building the graph
    type: PreNodeType;
    name: string | number;
    parents: Array<PreNode>;
    children: Array<PreNode>;
    root: boolean;
    
    // Stage 2: Depth count
    depth: number;
    
    // Stage 3: Analysis and Propagation
    countRatio: number;    // Number of times this node is used in the recipe
    complexity: number;    // Complexity sum by counting number of nodes
    cost: number;    // Cost sum of all nodes
    
    // Data from outside
    craftingData: CraftingData;
    solveMeta: SolveMeta;
    
    _testingId: number;    // For testing purposes
    
    constructor(type: PreNodeType, name: RRKey, craftingData: CraftingData, solveMeta: SolveMeta) {
        this.type = type;
        this.name = name;
        this.parents = [];
        this.children = [];
        this.root = false;
        
        this.depth = -1;
        
        this.countRatio = -1;
        this.complexity = -1;
        this.cost = -1;
        
        this.craftingData = craftingData;
        this.solveMeta = solveMeta;

        this._testingId = Math.round(Math.random() * 1000000);  // For testing purposes
    }

    addChild(child: PreNode) {
        this.children.push(child);
        child.parents.push(this);
    }

    getSrcs() {
        if (this.type == PreNodeType.RESOURCE) {
            return this.craftingData.findRecipesFor(this.name as string);
        } else if (this.type == PreNodeType.RECIPE) {
            return this.craftingData.getRecipe(this.name as number)?.getInputNames() || [];
        } else {
            throw new Error("Invalid PreNode type");
        }
    }

    swapType(): PreNodeType {
        if (this.type == PreNodeType.RESOURCE) {
            return PreNodeType.RECIPE;
        } else if (this.type == PreNodeType.RECIPE) {
            return PreNodeType.RESOURCE;
        } else {
            throw new Error("Invalid PreNode type");
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
                        let childNode = new PreNode(this.swapType(), srcName, this.craftingData, this.solveMeta);
                        this.addChild(childNode);
                        this.solveMeta.nodeCache[srcName] = childNode;
                        childNode.populateChildren();
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

    setDepths() {
        if (this.parents.length == 0) {
            this.depth = 0;
        }
        // Log the longest depth
        if (this.children.length == 0) {
            this.solveMeta.depth = Math.max(this.solveMeta.depth, this.depth);
        }
        // Also use this function to store flattened nodes
        if (!this.solveMeta.savedLeveledNodes.has(this.name)) {            
            this.solveMeta.savedLeveledNodes.add(this.name);
            this.solveMeta.leveledNodes.push(this);
        }
        // Split up so that it gets updated in level order
        for (let child of this.children) {
            child.depth = this.depth + 1;
        }
        for (let child of this.children) {
            child.setDepths();
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
        rootNode.setDepths();
        meta.leveledNodes.sort((a, b) => a.depth - b.depth);  // Sort leveled nodes by depth

        return rootNode;
    }

    createGraph(request: Array<Stack>, meta: SolveMeta) {
        let rootNode = new PreNode(PreNodeType.RECIPE, -1, this.data, meta);
        rootNode.root = true;
        for (let stack of request) {
            let resourceNode = new PreNode(PreNodeType.RESOURCE, stack.resourceName, this.data, meta);
            rootNode.addChild(resourceNode);
        }
        rootNode.populateChildren();
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
