import { CraftingData, craftingMetaData, Process, Recipe, Resource } from "../crafting/units";


type CraftingTypeOptions = "log"|"reset"|"set resources"|"set processes"|"set recipes"|"set resource"|"set process"|"set recipe"|"replace all"|"set metadata"|"invalidate healthcheck";

export type CraftingAction = {
    type: CraftingTypeOptions,
    value?: string,
    recordValue?: Record<string, any>,
    arrayValue?: Array<any>,
    anyValue?: any
}


export function craftingReducer(state: CraftingData, action: CraftingAction): CraftingData {
    
    switch (action.type) {
    case "log":
        console.log(state);
        return state;
    case "reset":
        return new CraftingData();
    case "set resources":
        return new CraftingData(action.recordValue, state.processes, state.recipes);
    case "set processes":
        return new CraftingData(state.resources, action.recordValue, state.recipes);
    case "set recipes":
        return new CraftingData(state.resources, state.processes, action.arrayValue);
    case "set resource":
        state.setResource(action.anyValue as Resource);
        return state.shallowClone();  // untested, but this should force render updates
    case "set process":
        state.setProcess(action.anyValue as Process);
        return state.shallowClone();
    case "set recipe":
        state.setRecipe(action.anyValue as Recipe);
        return state.shallowClone();
    case "replace all":  // Used to load a new piece of data
        // I think this i now as I don't think anything needs to be initialized with the correct class.
        let src = action.anyValue as CraftingData;
        let temp = new CraftingData()
        // We have to individually create every object because json doesn't store any methods.
        for (let resource of Object.keys(src.resources)) {
            temp.setResource(new Resource(resource, src.resources[resource]));
        }
        for (let process of Object.keys(src.processes)) {
            temp.setProcess(new Process(process, src.processes[process]));
        }
        for (let recipe of src.recipes) {
            temp.setRecipe(new Recipe(recipe.processUsed, recipe.inputResources, recipe.outputResources, recipe.outputBonusChances, recipe.timeSpent));
        }

        temp._meta = src._meta;

        return temp;
    case "set metadata":
        state._meta = action.anyValue as craftingMetaData;
        return state.shallowClone();
    case "invalidate healthcheck":
        state.passedHealthCheck = false;
        return state.shallowClone();
    default:
        console.log("Unkown action: " + action.type);
        return state
    }
    
}