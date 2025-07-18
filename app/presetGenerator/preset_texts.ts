
const helpers = `
//
// Helper functions to add resources, processes, and recipes. No need to mess with these.
//

function addResources(resourceCollection, names) {
    try {
        for (let name of names) {
            resourceCollection[name] = new Resource(name);
        }
    } catch (e) {
        console.error("Failed in addResources:", e);
        throw new Error("Failed in addResources: " + e.message);
    }
}

function markAsBaseResources(resourceCollection, names) {
    try {
        for (const name of names) {
            resourceCollection[name].isBase = true;
        }
    } catch (e) {
        console.error("Failed in markAsBaseResources:", e);
        throw new Error("Failed in markAsBaseResources: " + e.message);
    }
}

function addProcesses(processCollection, names) {
    try {
        for (let name of names) {
            processCollection[name] = new Process(name);
        }
    } catch (e) {
        console.error("Failed in addProcesses:", e);
        throw new Error("Failed in addProcesses: " + e.message);
    }
}

function toStackArray(inputStacks) {
    // Converts an object of stacks to an array of stacks.
    try {
        return Object.entries(inputStacks).map(([name, count]) => new Stack(name, count));
    } catch (e) {
        console.error("Failed in toStackArray:", e);
        throw new Error("Failed in toStackArray: " + e.message);
    }
}

function defaultRecipeFactory(processName) {
    // This is a factory function handles vanilla style recipes; multiple inputs, and single output.
    return (outputName, inputStacks, outputCount = 1) => {return new Recipe(processName, toStackArray(inputStacks), [new Stack(outputName, outputCount)])};
}

`

export const defaultText = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

// This code isn't necessarily the best, but just to show examples of what is possible.
let resources = {
    "Stick": new Resource("Stick"),
    "Iron Ingot": new Resource("Iron Ingot"),
    "Iron Ore": new Resource("Iron Ore", {isBase: true}),
    "Iron Pickaxe": new Resource("Iron Pickaxe"),
    "Iron Nugget": new Resource("Iron Nugget"),
    "Iron Block": new Resource("Iron Block"),
    "Plank": new Resource("Plank"),
    "Oak Log": new Resource("Oak Log"),
    "Birch Log": new Resource("Birch Log"),
    "Plank Dust": new Resource("Plank Dust"),
    "Bucket": new Resource("Bucket"),
}
resources["Oak Log"].isBase = true;
resources["Birch Log"].isBase = true;
resources["Iron Block"].isBase = true;
resources["Iron Block"].isDisabled = true;

let processes = {
    "Crafting Table": new Process("Crafting Table"),
    "Furnace": new Process("Furnace")
}

let recipes = [
    new Recipe("Furnace", [new Stack("Iron Ore")], [new Stack("Iron Ingot")]),
    new Recipe("Crafting Table", [new Stack("Iron Nugget", 9)], [new Stack("Iron Ingot")]),
    new Recipe("Crafting Table", [new Stack("Iron Block")], [new Stack("Iron Ingot", 9)]),
    new Recipe("Crafting Table", [new Stack("Stick", 3), new Stack("Iron Ingot", 3)], [new Stack("Iron Pickaxe")]),
    new Recipe("Crafting Table", [new Stack("Iron Ingot")], [new Stack("Iron Nugget", 9)]),
    new Recipe("Crafting Table", [new Stack("Plank")], [new Stack("Stick", 2)]), 
    new Recipe("Crafting Table", [new Stack("Oak Log")], [new Stack("Plank", 2), new Stack("Plank Dust")]),
    new Recipe("Crafting Table", [new Stack("Birch Log")], [new Stack("Plank")]),
    new Recipe("Crafting Table", [new Stack("Iron Ingot", 3)], [new Stack("Bucket")]),
    new Recipe("Crafting Table", [new Stack("Oak Log", 2), new Stack("Iron Nugget", 3)], [new Stack("Iron Pickaxe")])
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Pickaxe"};
`


export const emptyText = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {}
let processes = {}
let recipes = []

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "NAME HERE"};
`


export const basicText = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {
    "Stick": new Resource("Stick"),
    "Iron Ingot": new Resource("Iron Ingot"),
    "Iron Ore": new Resource("Iron Ore"),
    "Iron Pickaxe": new Resource("Iron Pickaxe"),
    "Plank": new Resource("Plank"),
    "Oak Log": new Resource("Oak Log"),
};

resources["Oak Log"].isBase = true;
resources["Iron Ore"].isBase = true;

let processes = {
    "Crafting Table": new Process("Crafting Table"),
    "Furnace": new Process("Furnace")
}

let recipes = [
    new Recipe("Furnace", [new Stack("Iron Ore")], [new Stack("Iron Ingot")]),
    new Recipe("Crafting Table", [new Stack("Stick", 2), new Stack("Iron Ingot", 3)], [new Stack("Iron Pickaxe")]),
    new Recipe("Crafting Table", [new Stack("Plank", 2)], [new Stack("Stick", 4)]), 
    new Recipe("Crafting Table", [new Stack("Oak Log")], [new Stack("Plank", 4)]),
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Pickaxe"};
`


export const basicTextWithHelpers = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {};
addResources(resources, ["Stick", "Iron Ingot", "Iron Ore", "Iron Pickaxe", "Plank", "Oak Log"]);
markAsBaseResources(resources, ["Oak Log", "Iron Ore"]);

let processes = {};
addProcesses(processes, ["Crafting Table", "Furnace"]);


const craftingTableRecipe = defaultRecipeFactory("Crafting Table");
const furnaceRecipe = defaultRecipeFactory("Furnace");

let recipes = [
    craftingTableRecipe("Iron Pickaxe", {"Stick": 2, "Iron Ingot": 3}),
    furnaceRecipe("Iron Ingot", {"Iron Ore": 1}),
    craftingTableRecipe("Stick", {"Plank": 2}, 4),
    craftingTableRecipe("Plank", {"Oak Log": 4}),
];

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Pickaxe"};

` + helpers;


export const brickedBlastFurnaceText = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {}
addResources(resources, ["Bricked Blast Furnace", "Iron Furnace", "Firebricks", "Iron Plate", "Furnace", "Wrench", "Firebrick", 
    "Gypsum Dust", "Bucket of Concrete", "Iron Ingot", "Hammer", "Flint", "Compressed Fireclay", "Fireclay Dust", "Brick Dust", 
    "Clay Dust", "XP Bucket", "Impure Pile of Gypsum Dust", "Crushed Gypsum Ore", "Gypsum Ore", "Calcite Dust", "Stone Dust",
    "Quartz Sand", "Water Bucket", "Bucket", "Impure Pile of Calcite Dust", "Crushed Calcite Ore", "Calcite Ore", "Cactus Juice",
    "Cactus", "Cobblestone", "Mortar", "Sand", "Small Pile of Brick Dust", "Brick", "Hardened Clay", "Unfired Clay Brick", 
    "Mold (Ingot)", "Wooden Form (Brick)", "Gravel", "Clay"]);

markAsBaseResources(resources, ["Wrench", "Iron Ingot", "Hammer", "XP Bucket", "Gypsum Ore", "Calcite Ore", "Cactus", "Cobblestone",
    "Mortar", "Sand", "Hardened Clay", "Mold (Ingot)", "Wooden Form (Brick)", "Gravel", "Clay"])
resources["Hammer"].durability = 100;

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
    new Recipe("Macerator", [new Stack("Calcite Ore")], [new Stack("Crushed Calcite Ore", 2)]),
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
    new Recipe("Macerator", [new Stack("Hardened Clay")], [new Stack("Clay Dust")]),
    new Recipe("Smelting", [new Stack("Unfired Clay Brick")] , [new Stack("Brick")]),
    new Recipe("Alloy Smelter", [new Stack("Clay"), new Stack("Mold (Ingot)")], [new Stack("Brick")]),
    // new Recipe("Crafting", [new Stack("Clay"), new Stack("Wooden Form (Brick)")], [new Stack("Unfired Clay Brick")]),
    new Recipe("Crafting", [new Stack("Clay", 8), new Stack("Wooden Form (Brick)")], [new Stack("Unfired Clay Brick", 8)]),
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "Bricked Blast Furnace"};

` + helpers;

export const plasticText = `// This is written in javascript and passed to an eval function.

let data = arguments[0];  // Connection to the outside

let resources = {};
addResources(resources, ["HDPE Pellet", "Substrate", "Oxygen", "Liquid Ethylene", "Bio Fuel", "Hydrogen", "Water", "Kelp"]);
markAsBaseResources(resources, ["Water", "Kelp"]);

let processes = {};
addProcesses(processes, ["Pressurized Reaction Chamber", "Crusher", "Electrolytic Separator"])

let PRC = defaultRecipeFactory("Pressurized Reaction Chamber");

let recipes = [
    PRC("HDPE Pellet", {"Substrate": 1, "Oxygen": 10, "Liquid Ethylene": 50}),
    new Recipe("Pressurized Reaction Chamber", toStackArray({"Water": 10, "Hydrogen": 100, "Bio Fuel": 2}), toStackArray({"Substrate": 1, "Liquid Ethylene": 100})),
    new Recipe("Crusher", [new Stack("Kelp")], [new Stack("Bio Fuel", 2)]),
    new Recipe("Electrolytic Separator", [new Stack("Water", 2)], toStackArray({"Hydrogen": 2, "Oxygen": 1})),
    new Recipe("Pressurized Reaction Chamber", toStackArray({"Water": 200, "Liquid Ethylene": 100, "Substrate": 1}), [new Stack("Substrate", 8)])
]

data.resources = resources;
data.processes = processes;
data.recipes = recipes;
data.meta = {dataVersion: 1, name: "HDPE Pellet", downloaded: false};

` + helpers;
