import * as _ from "lodash";
import path from "path";
import { printArray } from "../utils/format";
import { Ribeye } from "next/font/google";

class BaseThing {
    name: string;
    imgUrl?: string;
    sourceUrl?: string;
    isBase: boolean = false;
    isAvailable: boolean = true;
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


class recipeChainNode {
    // src: [each item][each recipe]  ie. what are the source resources to finish the recipe
    src: recipeChainNode[][] = [];
    constructor(public rId: number, public goal: string) {}
}

// [path part: [item index, optional choice]]  // last optional choice may also store total choice options at location
type craftingPathChoice = Array<Array<number>>;
type craftingPath = Array<Array<number>>;  


class chainCollections {

    // collection: []
    decisionNodes: Array<craftingPathChoice> = [];


    // findNode(value: craftingPath): recipeChainPathInfo|null {
    //     for (let node of this.nodes) {
    //         if (_.isEqual(node.path, value)) {
    //             return node;
    //         }
    //     }
    //     return null;
    // }

}


export class CraftingData {
    resources: Record<string, Resource>;
    processes: Record<string, Process>;
    recipes: Array<Recipe>;
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
        let matches: Array<number> = []
        for (let recipe of this.recipes) {
            if (recipe.getOutputNames().includes(name)) {
                matches.push(recipe.id!);
            }
        }
        return matches;

    }

    validateRecipeIds() {
        // Just set them all. That way there will never be an issue with gaps
        this.rId = 0;
        for (let r of this.recipes) {
            r.id = this.rId++;
        }
    }

    shallowClone() {
        return new CraftingData(this.resources, this.processes, this.recipes)
    }

    createChainTree(start: recipeChainNode, dupeCheck: Set<string>) {
        // We assume that the start has the recipe id and we are trying to fill in all of the src children
        if (!this.getRecipe(start.rId)) {
            console.log("Something went very wrong");
            console.log(this.recipes);
        } 

        console.log(dupeCheck);
        if (dupeCheck.size > 20) {
            console.log("dupeCheck is probably in recursion. Killing.")
            return;
        }

        for (let resourceName of this.getRecipe(start.rId)!.getInputNames()) {  // for every resource needed to complete the recipe

            let tempItemRecipes = this.findRecipesFor(resourceName);  // Collect all recipes that could be used for this resource
            let tempNodeArray: Array<recipeChainNode> = [];
            for (let recipeId of tempItemRecipes) {
                let dupeVal = JSON.stringify([recipeId, resourceName]);
                if (!dupeCheck.has(dupeVal)) {  // Check if this part of the recipe has already been used in the chain
                    let tempDupeCheck = new Set(dupeCheck);
                    tempDupeCheck.add(dupeVal);  // Add current use to the dupe check
                    let tempNode = new recipeChainNode(recipeId, resourceName);
                    this.createChainTree(tempNode, tempDupeCheck);
                    tempNodeArray.push(tempNode);
                }
            }
            
            start.src.push(tempNodeArray);
        }
    }

    collectDecisionHashes(start: recipeChainNode, collectionData: chainCollections, pathHash: craftingPathChoice) {

        start.src.forEach((item, item_pos) => {
            if (item.length > 1) {  // This item has multiple recipes.
                collectionData.decisionNodes.push(_.cloneDeep(pathHash).concat([[item_pos, item.length]]));
            }
            item.forEach((recipe, recipe_pos) => {
                this.collectDecisionHashes(recipe, collectionData, _.cloneDeep(pathHash).concat([[item_pos, recipe_pos]]));
            })
        })
    } 

    generateChoicePermutations(choices: Array<craftingPathChoice>): Array<Array<craftingPathChoice>> {
        let maxes: Array<number> = [];
        let indexes: Array<number> = [];

        // Extract data to set up state arrays
        for(let choice of choices) {
            maxes.push(choice[choice.length - 1][1]);
            indexes.push(0);
        }

        // Loop stoping info
        let start_state = _.clone(maxes);
        let first = true;

        let result: Array<Array<craftingPathChoice>> = []

        while (!_.isEqual(indexes, start_state) || first) {
            if (first) {
                first = false;
            }

            let temp_perm = [];
            for (let i = 0; i < indexes.length; i++) {  // For each permutation entry
                let temp_choice = _.cloneDeep(choices[i]);
                temp_choice[temp_choice.length - 1][1] = indexes[i];
                temp_perm.push(temp_choice);
            }

            result.push(temp_perm);

            // Increment the permutation
            let mut_index = 0;
            while (true) {
                indexes[mut_index]++;
                if (indexes[mut_index] == maxes[mut_index]) {
                    indexes[mut_index] = 0;
                    mut_index++;
                } else {
                    break;
                }

                // We reach the end of the "number"
                if (mut_index == indexes.length) {
                    break;
                }
            }

        }


        return result;
    }


    calcChain(start: string) {
        // Options hold all found paths to get to the item.
        let options = [];
        let dupeCheck: Set<string> = new Set();
        for (let possibleRecipes of this.findRecipesFor(start)) {
            let tempNode = new recipeChainNode(possibleRecipes, start);
            this.createChainTree(tempNode, dupeCheck);
            options.push(tempNode);
        }

        // Find decisions
        let collectionStore = new chainCollections();
        options.forEach((option, option_index) => {
            this.collectDecisionHashes(option, collectionStore, [[option_index]]);
        })
        // printArray(collectionStore.decisionNodes)
        console.log(collectionStore)

        // Optimize to create the best tree
        // I think we recommend the path that has the highest ratio of base items and if tied, the shortest path.

        

        return options;
    }

}
