import { plainToInstance, Transform, Type } from "class-transformer";

class BaseThing {
    name: string;
    imgUrl?: string;
    sourceUrl?: string;
    isBase: boolean = false;
    isDisabled: boolean = false;
    durability: number = -1;
    value: number = 1;
    tags: Array<string> = [];

    constructor(name: string, config = {}) {
        // I'm ok doing it like this because my defaults are pretty good
        this.name = name;

        if (config) {
            Object.assign(this, config);
        }
    }

    getKey(): string{
        return this.name;
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
        public id?: number,  // This is optional because we can set it as it gets inserted into the collection
        public isDisabled: boolean = false,
        public isBase: boolean = false,
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

    getKey(): number{
        if (this.id == undefined) {
            throw new Error("Recipe id is not set. This should never happen.");
        }
        return this.id;
    }
}


export type craftingMetaData = {  // This data is useful for when downloading presets.
    dataVersion: number,  // This is a form of sanity check and data validation
    name: string,
    downloaded: boolean,  // To distinguish if it's loaded by default
    source?: string,
}


export class CraftingData {
    @Transform(({ value }) => {
        return Object.entries(value).reduce((acc, [key, val]) => {
            acc[key] = plainToInstance(Resource, val);
            return acc;
        }, {} as Record<string, Resource>);
    })
    resources: Record<string, Resource>;

    @Transform(({ value }) => {
        return Object.entries(value).reduce((acc, [key, val]) => {
            acc[key] = plainToInstance(Process, val);
            return acc;
        }, {} as Record<string, Process>);
    })
    processes: Record<string, Process>;

    @Type(() => Recipe)
    recipes: Array<Recipe>;
    passedHealthCheck: boolean = false;
    _meta: craftingMetaData = {dataVersion: 1, downloaded: false, name: ""};

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
        r.id = this.recipes.length;
        this.recipes.push(r);
    }

    getRecipe(id: number): Recipe | undefined {
        return this.recipes[id];
    }

    get(val: number | string): Resource | Process | Recipe | undefined {
        // This is possible because of a uniqueness health check
        if (typeof val === "number") {
            return this.getRecipe(val);
        } else if (val in this.resources) {
            return this.resources[val];
        } else if (val in this.processes) {
            return this.processes[val];
        }
        return undefined;
    }

    getRecipeInputAmount(id: number, target: string) {
        return this.getRecipe(id)!.inputResources.find((element: Stack) => {return element.resourceName == target})
    }

    getRecipeOutputAmount(id: number, target: string) {
        return this.getRecipe(id)!.outputResources.find((element: Stack) => {return element.resourceName == target})
    }

    // removeResource(name: string) {
    //     delete this.resources[name];
    // }

    // removeProcess(name: string) {
    //     delete this.processes[name];
    // }

    // removeRecipe(id: number) {
    //     this.recipes = this.recipes.filter((r) => {return r.id != id});
    // }

    findRecipesFor(name: string): Array<number> {
        // Takes the name of a Resource as input.
        // returns the id of each matched recipe. This is to stay in line with all of the other name lookups.
        return this.recipes.filter(recipe => recipe.getOutputNames().includes(name)).map(recipe => recipe.id!);
    }

    validateRecipeIds() {
        // Just set them all. That way there will never be an issue with gaps
        let rId = 0;

        for (let r of this.recipes) {
            r.id = rId++;
        }
    }

    runHealthChecks() {
        // TODO Make sure that the data is in a valid state
        console.log("Running health checks on crafting data. Starts at", this.passedHealthCheck);
        this.passedHealthCheck = this.healthCheckValidMetadata() 
            && this.healthCheckNoMissingThings() 
            && this.healthCheckBaseItems()
            && this.healthCheckGoodKeys();
    }

    healthCheckValidMetadata() {
        // Make sure that the meta data seems reasonable
        if (this._meta.dataVersion != 1) {
            console.error(`Metadata version is an unexpected value. (Expected 1 but got ${this._meta.dataVersion})`);
            return false;
        }

        if (!this._meta.name) {
            console.error("Metadata name has not been set");
            return false;
        }

        if (this._meta.downloaded && !this._meta.source) {
            console.error("Downloaded file has no source listed in metadata");
            return false;
        }

        return true;
    }

    healthCheckNoMissingThings() {
        // Make sure we're not missing things

        // Make sure that all items used in recipes are accounted for
        const itemsInRecipes = this.recipes.map(r => [r.getInputNames(), r.getOutputNames()]).flat(2)
        let missingItems: Set<string> = new Set();

        for (const item of itemsInRecipes) {
            if (!(item in this.resources)) {
                missingItems.add(item);
            }
        }

        if (missingItems.size > 0) {
            console.error("The following items are listed in recipes but don't exist as items:");
            console.log(missingItems);
            return false;
        }
        
        const processesInRecipes = this.recipes.map(r => r.processUsed);
        let missingProcesses: Set<string> = new Set();
        for (const process of processesInRecipes) {
            if (!(process in this.processes)) {
                missingProcesses.add(process);
            }
        }
        if (missingProcesses.size > 0) {
            console.error("The following processes are listed in recipes but don't exist as processes:");
            console.log(missingProcesses);
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
            console.error("The following resources have no recipe but are also not marked as base items.");
            console.log(failed);
            return false;
        }
        return true;
    }

    healthCheckGoodKeys() {
        // Make sure that all items have valid keys
        let failedRIds: Array<string> = [];
        for (const [i, r] of this.recipes.entries()) {
            if (r.id != i) {
                failedRIds.push(`RId missmatch: ${r.id} != ${i}`);
            }
        }
        if (failedRIds.length > 0) {
            console.error("The following recipes have invalid keys:");
            console.log(failedRIds);
            return false;
        }

        let failedNameKeys: boolean = false;
        for (const [i, r] of Object.entries(this.resources)) {
            if (!isNaN(Number(r.name as unknown as number))) {
                failedNameKeys = true;
                console.error(`Resource: ${r.name} cannot be a number`)
            }
        }
        for (const [i, r] of Object.entries(this.processes)) {
            if (!isNaN(Number(r.name as unknown as number))) {
                failedNameKeys = true;
                console.error(`Process: ${r.name} cannot be a number`)
            }
        }
        if (failedNameKeys) {
            return false;
        }

        const resourceKeys = new Set(Object.keys(this.resources));
        const processKeys = new Set(Object.keys(this.processes));
        const intersection = resourceKeys.intersection(processKeys);
        if (intersection.size > 0) {
            console.error("The following names are both resources and processes:");
            console.log(intersection);
            return false;
        }
        return true;
    }

    shallowClone() {
        let data = new CraftingData(this.resources, this.processes, this.recipes)
        data._meta = this._meta;
        return data;
    }
}


