import { Process, Recipe, Resource, Stack } from "./units";
import { CraftingAction } from "../components/crafting";
import { Dispatch } from "react";



// These three functions exist as legacy versions of creating dev test data.
function devGenResources(): Record<string, Resource> {
    return {
        "stick": new Resource("stick"),
        "iron": new Resource("iron"),
        "iron ore": new Resource("iron ore", {isBase: true}),
        "pickaxe": new Resource("pickaxe"),
        "iron nuggets": new Resource("iron nuggets"),
        "planks": new Resource("planks"),
        "oak logs": new Resource("oak logs"),
        "birch logs": new Resource("birch logs"),
        "plank dust": new Resource("plank dust"),
        "Bucket": new Resource("Bucket"),
    }
}


function devGenProcesses(): Record<string, Process> {
    return {
        "crafting table": new Process("crafting table"),
        "furnace": new Process("furnace")
    }
}


function devGenRecipes(): Array<Recipe> {
    return [
        new Recipe("furnace", [new Stack("iron ore")], [new Stack("iron")]),
        new Recipe("crafting table", [new Stack("iron nuggets", 9)], [new Stack("iron")]),
        new Recipe("crafting table", [new Stack("stick", 3), new Stack("iron", 3)], [new Stack("pickaxe")]),
        new Recipe("crafting table", [new Stack("iron")], [new Stack("iron nuggets", 9)]),
        new Recipe("crafting table", [new Stack("planks")], [new Stack("stick", 2)]), 
        new Recipe("crafting table", [new Stack("oak logs")], [new Stack("planks", 2), new Stack("plank dust")]),
        new Recipe("crafting table", [new Stack("birch logs")], [new Stack("planks")]),
        new Recipe("crafting table", [new Stack("iron", 3)], [new Stack("Bucket")]),
        // new Recipe("crafting table", [new Stack("oak logs", 2), new Stack("iron nuggets", 3)], [new Stack("pickaxe")])
    ]
}


export function vanillaPickaxePreset(dispatch: Dispatch<CraftingAction>) {
    dispatch({type: "set resources", recordValue: devGenResources()});
    dispatch({type: "set processes", recordValue: devGenProcesses()});
    dispatch({type: "set recipes", arrayValue: devGenRecipes()});
}


export function gtBackpackPreset(dispatch: Dispatch<CraftingAction>) {

    function addResources(r: Record<string, Resource>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Resource(name);
        }
    }

    function addProcesses(r: Record<string, Process>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Process(name);
        }
    }

    let resources = {}
    addResources(resources, ["leather", "stone", "tanned leather", "woven cotton", "bound leather", "string", "cotton", "cobble stone", "backpack"]);

    let processes = {}
    addProcesses(processes, ["crafting", "drying", "smelting"]);

    let recipes = [
        new Recipe("crafting", [new Stack("stone", 2), new Stack("leather", 4), new Stack("woven cotton", 2), new Stack("tanned leather", 1)], [new Stack("backpack", 1)]),
        new Recipe("smelting", [new Stack("cobble stone", 1)], [new Stack("stone", 1)]),
        new Recipe("drying", [new Stack("bound leather", 1)], [new Stack("tanned leather", 1)]),
        new Recipe("crafting", [new Stack("string", 5), new Stack("cotton", 4)], [new Stack("woven cotton", 1)]),
        new Recipe("crafting", [new Stack("cotton", 3)], [new Stack("string", 1)]),
        new Recipe("crafting", [new Stack("leather", 4), new Stack("woven cotton", 1), new Stack("string", 4),], [new Stack("bound leather", 1)])
    ]

    dispatch({type: "set resources", recordValue: resources});
    dispatch({type: "set processes", recordValue: processes});
    dispatch({type: "set recipes", arrayValue: recipes});
}