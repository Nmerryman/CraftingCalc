import { CraftingData, Process, Recipe, Resource } from "../crafting/units";


type CraftingTypeOptions = "log"|"reset"|"set resources"|"set processes"|"set recipes"|"set resource"|"set process"|"set recipe"|"replace all"

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
        return action.anyValue as CraftingData;
    default:
        console.log("Unkown action: " + action.type);
        return state
    }
    
}