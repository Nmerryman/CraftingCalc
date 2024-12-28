import { Process, Recipe, Resource, Stack } from "./units";
import { CraftingAction } from "../components/crafting";
import { Dispatch } from "react";



// These three functions exist as legacy versions of creating dev test data.
function devGenResources(): Record<string, Resource> {
    return {
        "Stick": new Resource("Stick"),
        "Iron Ingot": new Resource("Iron Ingot"),
        "Iron Ore": new Resource("Iron Ore", {isBase: true}),
        "Iron Pickaxe": new Resource("Iron Pickaxe"),
        "Iron Nuggets": new Resource("Iron Nuggets"),
        "Planks": new Resource("Planks"),
        "Oak Logs": new Resource("Oak Logs"),
        "Birch Logs": new Resource("Birch Logs"),
        "Plank Dust": new Resource("Plank Dust"),
        "Bucket": new Resource("Bucket"),
    }
}


function devGenProcesses(): Record<string, Process> {
    return {
        "Crafting Table": new Process("Crafting Table"),
        "Furnace": new Process("Furnace")
    }
}


function devGenRecipes(): Array<Recipe> {
    return [
        new Recipe("Furnace", [new Stack("Iron Ore")], [new Stack("Iron Ingot")]),
        new Recipe("Crafting Table", [new Stack("Iron Nuggets", 9)], [new Stack("Iron Ingot")]),
        new Recipe("Crafting Table", [new Stack("Stick", 3), new Stack("Iron Ingot", 3)], [new Stack("Iron Pickaxe")]),
        new Recipe("Crafting Table", [new Stack("Iron Ingot")], [new Stack("Iron Nuggets", 9)]),
        new Recipe("Crafting Table", [new Stack("Planks")], [new Stack("Stick", 2)]), 
        new Recipe("Crafting Table", [new Stack("Oak Logs")], [new Stack("Planks", 2), new Stack("Plank Dust")]),
        new Recipe("Crafting Table", [new Stack("Birch Logs")], [new Stack("Planks")]),
        new Recipe("Crafting Table", [new Stack("Iron Ingot", 3)], [new Stack("Bucket")]),
        // new Recipe("Crafting Table", [new Stack("Oak Logs", 2), new Stack("Iron Nuggets", 3)], [new Stack("Iron Pickaxe")])
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
    addResources(resources, ["Leather", "Stone", "Tanned Leather", "Woven Cotton", "Bound Leather", "String", "Cotton", "Cobble Stone", "Backpack"]);

    let processes = {}
    addProcesses(processes, ["Crafting", "Drying", "Smelting"]);

    let recipes = [
        new Recipe("Crafting", [new Stack("Stone", 2), new Stack("Leather", 4), new Stack("Woven Cotton", 2), new Stack("Tanned Leather", 1)], [new Stack("Backpack", 1)]),
        new Recipe("Smelting", [new Stack("Cobble Stone", 1)], [new Stack("Stone", 1)]),
        new Recipe("Drying", [new Stack("Bound Leather", 1)], [new Stack("Tanned Leather", 1)]),
        new Recipe("Crafting", [new Stack("String", 5), new Stack("Cotton", 4)], [new Stack("Woven Cotton", 1)]),
        new Recipe("Crafting", [new Stack("Cotton", 3)], [new Stack("String", 1)]),
        new Recipe("Crafting", [new Stack("Leather", 4), new Stack("Woven Cotton", 1), new Stack("String", 4),], [new Stack("Bound Leather", 1)]),

    ]

    dispatch({type: "set resources", recordValue: resources});
    dispatch({type: "set processes", recordValue: processes});
    dispatch({type: "set recipes", arrayValue: recipes});
}