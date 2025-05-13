
import { chainHuristicsStats, craftingPathChoices, craftingPathPart, prePermRecipeChainNode, recipeVariants } from "./craftingChain";
import { CraftingData, Stack } from "./units";
import _ from "lodash";


type recipeCache = Record<string, Array<recipeSolve>>; // Cache is [target+rId][perm#]


type solvePermInfo = {
    intermediateSolves: Set<string>;  // All solves needed loading up to current (Both used and unused and including extra from rId) TODO make into a function
    uses: Array<recipeSolve>;
    aids: Array<recipeSolve>;
}


class recipeSolve {
    rId: number;    // Recipe id
    solveTarget: string;    // What we want out of the recipe
    perms: Array<solvePermInfo> = [];
    permCount: number = 0;
    cache: recipeCache;

    constructor(rid: number, goal: string, cache: recipeCache = {}) {
        this.rId = rid;
        this.solveTarget = goal;
        this.cache = cache;

    }

    solve(data: CraftingData) {
        const recipe = data.getRecipe(this.rId);
        if (recipe === undefined) {
            console.error("RecipeSolve is trying to grab recipe that doesn't exist");
            console.error(this);
            return;
        }
        recipe
    }
}


interface HuristicEval {(huristic: chainHuristicsStats): number}


export class Solver {
    constructor(public data: CraftingData) {
        this.data = data;
    }

    // Build the initial recipeChainNode tree based on a single starting node
    // Returns if this node is considered "valid". Not sure if this ruins the function structure
    createChainTree(start: prePermRecipeChainNode, dupeCheck: Set<string> = new Set()) {
        // We assume that the start has the recipe id and we are trying to fill in all of the src children
        if (!this.data.getRecipe(start.rId)) {
            console.log("Something went very wrong. This starting recipe doesn't exist");
            console.log(start, this.data.recipes);
        } 

        if (dupeCheck.size > 20) {
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
