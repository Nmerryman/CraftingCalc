import _ from "lodash";

class BaseThing {
    name: string;
    imgUrl?: string;
    sourceUrl?: string;
    isBase: boolean = false;
    isAvailable: boolean = true;
    isDisabled: boolean = false;
    durability: number = -1;
    tags: Array<string> = []

    constructor(name: string, config = {}) {
        // I'm ok doing it like this because my defaults are pretty good
        this.name = name;

        if (config) {
            Object.assign(this, config);
        }

    }

}


export class Resource extends BaseThing {
    // What if there are gasses in decimal form
    baseQuantity: number = 1;

    constructor(name: string, config = {}) {
        super(name, config);
    }

}


export class Process extends BaseThing {
    // I'm not sure if there is anything unique about this
    constructor(name: string, config = {}) {
        super(name, config);
    }
}


export class ProbabilityStyle {
    constructor(
        public value: number, 
        public probability: number, 
        public rolls: number = 1
    ) {}

}


export class Stack {
    constructor(
        public resourceName: string, 
        public amount: number = 1
    ) {}

}



export class Recipe {
    constructor(
        public processUsed: string, 
        public inputResources: Array<Stack>, 
        public outputResources: Array<Stack>, 
        public outputBonusChances: Array<[string, ProbabilityStyle]> = [], 
        public timeSpent: number = 0,
        public id?: number  // This is optional because we can set it as it gets inserted into the collection
    ) {}

    // We could absolutly cache these methods.
    _getUniqueNames(array: Array<Stack>): Array<string> {
        let names: Array<string> = [];

        for (let resource of array) {
            if (!names.includes(resource.resourceName)) {
                names.push(resource.resourceName);
            }
        }
        return names;
    }

    getInputNames(): Array<string> {
        return this._getUniqueNames(this.inputResources);
    }

    getOutputNames(): Array<string> {
        return this._getUniqueNames(this.outputResources);
    }

    getOutputNamesChances(): Array<string> {
        let names: Array<string> = [];

        for (let resource of this.outputBonusChances) {
            if (!names.includes(resource[0])) {
                names.push(resource[0]);
            }
        }
        return names;
    }
}


type recipeVariants = {
    variants: Array<prePermRecipeChainNode>
}


type recipeSources = {
    items: Array<recipeVariants>
}


class prePermRecipeChainNode {
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


type craftingPathPart = {
    goal: string,
    rIdOptions: Array<number>
}


class craftingPathChoices {
    choices: Record<string, craftingPathPart> = {} // Last choice can also be used to carry the choice count.
}


export class chainHuristicsStats {
    steps: number = 0;
    input: Array<Stack> = [];
    inputStack: Array<Stack> = [];
    output: Array<Stack> = [];
    intermediate: Array<Stack> = [];
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


interface HuristicEval {(huristic: chainHuristicsStats): number}


export class CraftingData {
    resources: Record<string, Resource>;
    processes: Record<string, Process>;
    recipes: Array<Recipe>;
    passedHealthCheck: boolean = false;
    private rId: number = 0;  // Used to register recipes and give them unique ids/names

    constructor(resources: Record<string, Resource> = {}, processes: Record<string, Process> = {}, recipes: Array<Recipe> = []) {
        this.resources = resources;
        this.processes = processes;
        this.recipes = recipes;

        // Validate that all recipes have id's set to comply with expectations later
        this.validateRecipeIds();
    }

    setResource(m: Resource) {
        this.resources[m.name] = m;
    }

    setProcess(p: Process) {
        this.processes[p.name] = p;
    }

    setRecipe(r: Recipe) {
        if (this.recipes.length > 0) {  // Hack to set a safe current id
            this.rId = this.recipes[this.recipes.length - 1].id! + 1
        }
        if (!r.id) {
            r.id = this.rId++;
        }
        this.recipes.push(r);
    }

    getRecipe(id: number): Recipe | undefined {
        return this.recipes.find((element) => {return element.id == id})
    }

    getRecipeInputAmount(id: number, target: string) {
        return this.getRecipe(id)!.inputResources.find((element: Stack) => {return element.resourceName == target})
    }

    getRecipeOutputAmount(id: number, target: string) {
        return this.getRecipe(id)!.outputResources.find((element: Stack) => {return element.resourceName == target})
    }

    removeResource(name: string) {
        delete this.resources[name];
    }

    removeProcess(name: string) {
        delete this.processes[name];
    }

    removeRecipe(id: number) {
        this.recipes = this.recipes.filter((r) => {return r.id != id});
    }

    findRecipesFor(name: string): Array<number> {
        // Takes the name of a Resource as input.
        // returns the id of each matched recipe. This is to stay in line with all of the other name lookups.
        return this.recipes.filter(recipe => recipe.getOutputNames().includes(name)).map(recipe => recipe.id!);
    }

    validateRecipeIds() {
        // Just set them all. That way there will never be an issue with gaps
        this.rId = 0;

        for (let r of this.recipes) {
            r.id = this.rId++;
        }
    }

    runHealthChecks() {
        this.passedHealthCheck = this.healthCheckNoMissingThings() && this.healthCheckBaseItems();
    }

    healthCheckNoMissingThings() {
        // Make sure we're not missing things

        // Make sure that all items used in recipes are accounted for
        const itemsInRecipes = this.recipes.map(r => [r.getInputNames(), r.getOutputNames()]).flat(2)
        let missing: Set<string> = new Set();

        for (const item of itemsInRecipes) {
            if (!(item in this.resources)) {
                missing.add(item);
            }
        }

        if (missing.size> 0) {
            console.log("The following items are listed in recipes but don't exist as items:");
            console.log(missing);
            return false;
        }
        return true
    }

    healthCheckBaseItems() {
        // Make sure that all items that have no recipes are marked as base

        const craftableItems = new Set(this.recipes.map(r => r.getOutputNames()).flat())
        let failed: Array<string> = [];

        for (const item of Object.keys(this.resources)) {
            if (!craftableItems.has(item) && !this.resources[item].isBase) {
                failed.push(item);
            }
        }

        if (failed.length > 0) {
            console.log("The following resources have no recipe but are also not marked as base items.");
            console.log(failed);
            return false;
        }
        return true;
    }

    shallowClone() {
        return new CraftingData(this.resources, this.processes, this.recipes)
    }

    // Build the initial recipeChainNode tree based on a single starting node
    // Returns if this node is considered "valid". Not sure if this ruins the function structure
    createChainTree(start: prePermRecipeChainNode, dupeCheck: Set<string> = new Set()) {
        // We assume that the start has the recipe id and we are trying to fill in all of the src children
        if (!this.getRecipe(start.rId)) {
            console.log("Something went very wrong. This starting recipe doesn't exist");
            console.log(start, this.recipes);
        } 

        if (dupeCheck.size > 20) {
            console.log("dupeCheck is going deeper than expected. Killing.")
            return false; 
        }

        for (let resourceName of this.getRecipe(start.rId)!.getInputNames()) {  // for every resource needed to complete the recipe
            if (this.resources[resourceName].isDisabled) {  // Check if this recipe tries to use a disabled resource
                return false;
            }

            let tempItemRecipes = this.findRecipesFor(resourceName);  // Collect all recipes that could be used for this resource
            let variantArray: recipeVariants = {variants: []};

            for (let recipeId of tempItemRecipes) {
                let dupeVal = `[${recipeId}, ${resourceName}]`;  // Check value for which recipe and for which item it's used for

                if (!dupeCheck.has(dupeVal)) {  // Check if this part of the recipe has already been used in the chain
                    let tempDupeCheck = new Set(dupeCheck);
                    tempDupeCheck.add(dupeVal);  // Add current use to the dupe check
                    let tempNode = new prePermRecipeChainNode(recipeId, resourceName);

                    if (this.createChainTree(tempNode, tempDupeCheck)) {
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
        if (!this.passedHealthCheck) {
            this.runHealthChecks();

            if (!this.passedHealthCheck) {
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

            for (let possibleRecipes of this.findRecipesFor(startingRecipes.resourceName)) {
                let tempNode = new prePermRecipeChainNode(possibleRecipes, startingRecipes.resourceName);
                this.createChainTree(tempNode);
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
            huristicOptions.push(new chainHuristicsStats(options, collectionStore, this, startConsolidate))

        } else {
            for (let perm of permutations) {
                let huristics = new chainHuristicsStats(options, perm, this, startConsolidate);
                huristicOptions.push(huristics);
            }
        }
        return huristicOptions;
    }
}

