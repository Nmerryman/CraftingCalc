
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


export class Material extends BaseThing {
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
        public itemName: string, 
        public amount: number
    ) {}

}



export class Recipe {
    constructor(
        public processUsed: Process, 
        public inputItems: Array<Stack>, 
        public outputItems: Array<Stack>, 
        public outputBonusChances: Array<[string, ProbabilityStyle]>, 
        public timeSpent: number,
        public id?: number  // This is optional because we can set it as it gets inserted into the collection
    ) {}

    
    // We could absolutly cache these methods.
    _getUniqueNames(array: Array<Stack>): Array<string> {
        let names: Array<string> = [];
        for (let item of array) {
            if (!names.includes(item.itemName)) {
                names.push(item.itemName);
            }
        }
        return names;
    }

    getInputNames(): Array<string> {
        return this._getUniqueNames(this.inputItems);
    }

    getOutputNames(): Array<string> {
        return this._getUniqueNames(this.outputItems);
    }

    getOutputNamesChances(): Array<string> {
        let names: Array<string> = [];
        for (let item of this.outputBonusChances) {
            if (!names.includes(item[0])) {
                names.push(item[0]);
            }
        }
        return names;
    }
}


export class CraftingData {
    materials: Record<string, Material>;
    processes: Record<string, Process>;
    recipes: Array<Recipe>;
    private rId: number = 0;


    constructor(materials = {}, processes = {}, recipes = []) {
        this.materials = materials;
        this.processes = processes;
        this.recipes = recipes;

        // Validate that all recipes have id's set to comply with expectations later
        for (let recipe of this.recipes) {
            if (!recipe.id) {
                recipe.id = this.rId++;
            }
        }
    }

    setMaterial(m: Material) {
        this.materials[m.name] = m;
    }

    setProcess(p: Process) {
        this.processes[p.name] = p;
    }

    setRecipe(r: Recipe) {
        if (!r.id) {
            r.id = this.rId++;
        }
        this.recipes.push(r);
    }

    getRecipe(id: number): Recipe | undefined {
        return this.recipes.find((element) => {element.id == id})
    }

    removeMaterial(name: string) {
        delete this.materials[name];
    }

    removeProcess(name: string) {
        delete this.processes[name];
    }

    removeRecipe(id: number) {
        this.recipes = this.recipes.filter((r) => {return r.id != id});
    }

    findRecipesFor(name: string): Array<number> {
        // Takes the name of a material as input.
        // returns the id of each matched recipe. This is to stay in line with all of the other name lookups.
        let matches: Array<number> = []
        for (let recipe of this.recipes) {
            if (recipe.getOutputNames().includes(name)) {
                matches.push(recipe.id!);
            }
        }
        return matches;

    }
}
