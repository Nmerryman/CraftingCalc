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
        new Recipe("Crafting", [new Stack("Leather", 4), new Stack("Woven Cotton", 1), new Stack("String", 3),], [new Stack("Bound Leather", 1)]), // Expects: 4 leather, 8 string, 28 cotton

    ]

    dispatch({type: "set resources", recordValue: resources});
    dispatch({type: "set processes", recordValue: processes});
    dispatch({type: "set recipes", arrayValue: recipes});
}

export function gtBlastFurnace(dispatch: Dispatch<CraftingAction>) {

    function addResources(r: Record<string, Resource>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Resource(name);
        }
    }

    function markAsBaseResources(r: Record<string, Resource>, names: Array<string>) {
        for (const name of names) {
            r[name].isBase = true;
        }
    }

    function disableResources(r: Record<string, Resource>, names: Array<string>) {
        for (const name of names) {
            r[name].isDisabled = true;
        }
    }

    function addProcesses(r: Record<string, Process>, names: Array<string>) {
        for (let name of names) {
            r[name] = new Process(name);
        }
    }

    let resources = {}
    addResources(resources, ["Bricked Blast Furnace", "Iron Furnace", "Firebricks", "Iron Plate", "Furnace", "Wrench", "Firebrick", 
        "Gypsum Dust", "Bucket of Concrete", "Iron Ingot", "Hammer", "Flint", "Compressed Fireclay", "Fireclay Dust", "Brick Dust", 
        "Clay Dust", "XP Bucket", "Impure Pile of Gypsum Dust", "Crushed Gypsum Ore", "Gypsum Ore", "Calcite Dust", "Stone Dust",
        "Quartz Sand", "Water Bucket", "Bucket", "Impure Pile of Calcite Dust", "Crushed Calcite Ore", "Calcite Ore", "Cactus Juice",
        "Cactus", "Cobblestone", "Mortar", "Sand", "Small Pile of Brick Dust", "Brick", "Hardened Clay", "Unfired Clay Brick", 
        "Mold (Ingot)", "Wooden Form (Brick)", "Gravel", "Clay"]);

    markAsBaseResources(resources, ["Wrench", "Iron Ingot", "Hammer", "XP Bucket", "Gypsum Ore", "Calcite Ore", "Cactus", "Cobblestone",
        "Mortar", "Sand", "Hardened Clay", "Mold (Ingot)", "Wooden Form (Brick)", "Gravel", "Clay"])

    disableResources(resources, ["XP Bucket"]);

    let processes = {}
    addProcesses(processes, ["Crafting", "Forge Hammer", "Smelting", "Compressor", "Cauldron Washing", "Macerator", "Right Clicking Source",
        "Alloy Smelter"
    ]);

    let recipes = [
        new Recipe("Crafting", [new Stack("Firebricks", 4), new Stack("Iron Furnace", 4), new Stack("Wrench")], [new Stack("Bricked Blast Furnace")]),
        new Recipe("Crafting", [new Stack("Furnace"), new Stack("Iron Plate", 7), new Stack("Wrench")], [new Stack("Iron Furnace")]),
        new Recipe("Crafting", [new Stack("Firebrick", 6), new Stack("Gypsum Dust", 2), new Stack("Bucket of Concrete")], [new Stack("Firebricks")]),
        // new Recipe("Crafting", [new Stack("Iron Ingot", 2), new Stack("Hammer")], [new Stack("Iron Plate", 1)]),
        new Recipe("Forge Hammer", [new Stack("Iron Ingot", 3)], [new Stack("Iron Plate", 2)]),
        new Recipe("Crafting", [new Stack("Cobblestone", 6), new Stack("Flint")] , [new Stack("Furnace")]),
        new Recipe("Smelting", [new Stack("Compressed Fireclay")], [new Stack("Firebrick")]),
        new Recipe("Forge Hammer", [new Stack("Firebricks")], [new Stack("Firebrick", 3)]),
        new Recipe("Crafting", [new Stack("XP Bucket", 2)], [new Stack("Gypsum Dust")]),
        new Recipe("Cauldron Washing", [new Stack("Impure Pile of Gypsum Dust")], [new Stack("Gypsum Dust")]),
        new Recipe("Forge Hammer", [new Stack("Crushed Gypsum Ore")], [new Stack("Impure Pile of Gypsum Dust")]),
        new Recipe("Macerator", [new Stack("Gypsum Ore")], [new Stack("Crushed Gypsum Ore", 2)]),
        new Recipe("Compressor", [new Stack("Fireclay Dust")], [new Stack("Compressed Fireclay")]),
        new Recipe("Crafting", [new Stack("Brick Dust"), new Stack("Clay Dust")] , [new Stack("Fireclay Dust", 2)]),
        new Recipe("Crafting", [new Stack("Calcite Dust", 2), new Stack("Clay Dust"), new Stack("Stone Dust"), new Stack("Quartz Sand"), new Stack("Water Bucket"), new Stack("Bucket")], [new Stack("Bucket of Concrete")]),
        new Recipe("Cauldron Washing", [new Stack("Impure Pile of Calcite Dust")], [new Stack("Calcite Dust")]),
        new Recipe("Forge Hammer", [new Stack("Crushed Calcite Ore")], [new Stack("Impure Pile of Calcite Dust")]),
        new Recipe("Macertor", [new Stack("Calcite Ore")], [new Stack("Crushed Calcite Ore", 2)]),
        new Recipe("Crafting", [new Stack("Iron Plate", 3), new Stack("Hammer")], [new Stack("Bucket")]),
        new Recipe("Right Clicking Source", [new Stack("Bucket")], [new Stack("Water Bucket")]),
        // new Recipe("Crafting", [new Stack("Bucket"), new Stack("Cactus Juice", 8)], [new Stack("Water Bucket")]),
        new Recipe("Crafting", [new Stack("Cactus")], [new Stack("Cactus Juice")]),
        new Recipe("Macerator", [new Stack("Cobblestone")], [new Stack("Stone Dust")]),
        new Recipe("Crafting", [new Stack("Sand"), new Stack("Mortar")], [new Stack("Quartz Sand")]),
        new Recipe("Crafting", [new Stack("XP Bucket", 2)], [new Stack("Quartz Sand")]),
        new Recipe("Crafting", [new Stack("XP Bucket", 2)], [new Stack("Calcite Dust")]),
        new Recipe("Crafting", [new Stack("Gravel", 3)], [new Stack("Flint")]),
        // new Recipe("Crafting", [new Stack("Gravel"), new Stack("Mortar")], [new Stack("Flint")]),
        new Recipe("Crafting", [new Stack("Small Pile of Brick Dust", 4)], [new Stack("Brick Dust")]),
        // new Recipe("Crafting", [new Stack("XP Bucket", 4)], [new Stack("Small Pile of Brick Dust")]),
        // new Recipe("Crafting", [new Stack("Brick"), new Stack("Mortar")], [new Stack("Small Pile of Brick Dust")]),
        new Recipe("Forge Hammer", [new Stack("Brick")], [new Stack("Small Pile of Brick Dust")]),
        new Recipe("Macertor", [new Stack("Hardened Clay")], [new Stack("Clay Dust")]),
        new Recipe("Smelting", [new Stack("Unfired Clay Brick")] , [new Stack("Brick")]),
        new Recipe("Alloy Smelter", [new Stack("Clay"), new Stack("Mold (Ingot)")], [new Stack("Brick")]),
        // new Recipe("Crafting", [new Stack("Clay"), new Stack("Wooden Form (Brick)")], [new Stack("Unfired Clay Brick")]),
        new Recipe("Crafting", [new Stack("Clay", 8), new Stack("Wooden Form (Brick)")], [new Stack("Unfired Clay Brick", 8)]),






    ]

    dispatch({type: "set resources", recordValue: resources});
    dispatch({type: "set processes", recordValue: processes});
    dispatch({type: "set recipes", arrayValue: recipes});
}

