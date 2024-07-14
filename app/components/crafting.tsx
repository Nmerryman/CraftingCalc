import { CraftingData, Process, Recipe, Resource } from "../crafting/units";


export type CraftingAction = {
    type: string,
    value?: string,
    recordValue?: Record<string, any>,
    arrayValue?: Array<any>,
    anyValue?: any
}


export function craftingReducer(state: CraftingData, action: CraftingAction): any {
    switch (action.type) {
    case "log":
        console.log(state);
        return state;
    case "reset":
        state.resources = {};
        state.processes = {};
        state.recipes = [];
        return state;
    case "set resources":
        state.resources = action.recordValue as Record<string, Resource>;
        return state;
    case "set processes":
        state.processes = action.recordValue as Record<string, Process>;
        return state;
    case "set recipes":
        state.recipes = action.arrayValue as Array<Recipe>;
        return state;
    case "set resource":
        state.setResource(action.anyValue as Resource);
        return state;
    case "set process":
        state.setProcess(action.anyValue as Process);
        return state;
    case "set recipe":
        state.setRecipe(action.anyValue as Recipe);
        return state;
    default:
        console.log("Unkown action: " + action.type);
        return state
    }
}