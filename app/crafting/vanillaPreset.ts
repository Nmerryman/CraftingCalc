import { craftingMetaData, Process, Recipe, Resource, Stack } from "./units";
import { CraftingAction } from "../components/crafting";
import { Dispatch } from "react";

export function vanilla(dispatch: Dispatch<CraftingAction>) {
  let resources = {
  "red sand": {
    "name": "red sand",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red sandstone": {
    "name": "red sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "breeze rod": {
    "name": "breeze rod",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wind charge": {
    "name": "wind charge",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white dye": {
    "name": "white dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sand": {
    "name": "sand",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gravel": {
    "name": "gravel",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white concrete powder": {
    "name": "white concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized copper": {
    "name": "oxidized copper",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized cut copper": {
    "name": "oxidized cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red sandstone slab": {
    "name": "red sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone": {
    "name": "polished blackstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone bricks": {
    "name": "polished blackstone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sugar cane": {
    "name": "sugar cane",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "paper": {
    "name": "paper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond": {
    "name": "diamond",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shaper armor trim smithing template": {
    "name": "shaper armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "terracotta": {
    "name": "terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cookingtime": {
    "name": "cookingtime",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cod": {
    "name": "cod",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked cod": {
    "name": "cooked cod",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone bricks": {
    "name": "stone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cracked stone bricks": {
    "name": "cracked stone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blackstone": {
    "name": "blackstone",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone brick stairs": {
    "name": "polished blackstone brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purpur block": {
    "name": "purpur block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purpur stairs": {
    "name": "purpur stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "candle": {
    "name": "candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple dye": {
    "name": "purple dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple candle": {
    "name": "purple candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta dye": {
    "name": "magenta dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white carpet": {
    "name": "white carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta carpet": {
    "name": "magenta carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth red sandstone": {
    "name": "smooth red sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth red sandstone stairs": {
    "name": "smooth red sandstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "fishing rod": {
    "name": "fishing rod",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "carrot": {
    "name": "carrot",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "carrot on a stick": {
    "name": "carrot on a stick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak planks": {
    "name": "oak planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stick": {
    "name": "stick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak sign": {
    "name": "oak sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shulker_box": {
    "name": "shulker_box",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown dye": {
    "name": "brown dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown shulker box": {
    "name": "brown shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobbled deepslate": {
    "name": "cobbled deepslate",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled deepslate": {
    "name": "chiseled deepslate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dandelion": {
    "name": "dandelion",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow dye": {
    "name": "yellow dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wildflowers": {
    "name": "wildflowers",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "slime ball": {
    "name": "slime ball",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "slime block": {
    "name": "slime block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chain": {
    "name": "chain",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped mangrove log": {
    "name": "stripped mangrove log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove hanging sign": {
    "name": "mangrove hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark prismarine": {
    "name": "dark prismarine",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark prismarine slab": {
    "name": "dark prismarine slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cornflower": {
    "name": "cornflower",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue dye": {
    "name": "blue dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch planks": {
    "name": "birch planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch fence gate": {
    "name": "birch fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray dye": {
    "name": "gray dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray concrete powder": {
    "name": "gray concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak planks": {
    "name": "pale oak planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak slab": {
    "name": "pale oak slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished diorite": {
    "name": "polished diorite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished diorite stairs": {
    "name": "polished diorite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate tiles": {
    "name": "deepslate tiles",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate tile stairs": {
    "name": "deepslate tile stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gold ingot": {
    "name": "gold ingot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden helmet": {
    "name": "golden helmet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "string": {
    "name": "string",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "honeycomb": {
    "name": "honeycomb",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink tulip": {
    "name": "pink tulip",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink dye": {
    "name": "pink dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron block": {
    "name": "iron block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron ingot": {
    "name": "iron ingot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut copper": {
    "name": "cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed cut copper": {
    "name": "waxed cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue wool": {
    "name": "light blue wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue banner": {
    "name": "light blue banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink carpet": {
    "name": "pink carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan dye": {
    "name": "cyan dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan shulker box": {
    "name": "cyan shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue bed": {
    "name": "light blue bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished granite": {
    "name": "polished granite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished granite slab": {
    "name": "polished granite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red stained glass": {
    "name": "red stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red stained glass pane": {
    "name": "red stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine bricks": {
    "name": "prismarine bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine brick stairs": {
    "name": "prismarine brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red sandstone stairs": {
    "name": "red sandstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mud bricks": {
    "name": "mud bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mud brick slab": {
    "name": "mud brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray wool": {
    "name": "gray wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray bed": {
    "name": "gray bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper ingot": {
    "name": "copper ingot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper door": {
    "name": "copper door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shears": {
    "name": "shears",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white bed": {
    "name": "white bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink bed": {
    "name": "pink bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red dye": {
    "name": "red dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange dye": {
    "name": "orange dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green dye": {
    "name": "green dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green carpet": {
    "name": "green carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle planks": {
    "name": "jungle planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle sign": {
    "name": "jungle sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone wall": {
    "name": "polished blackstone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray dye": {
    "name": "light gray dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray bed": {
    "name": "light gray bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glass": {
    "name": "glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glass bottle": {
    "name": "glass bottle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow terracotta": {
    "name": "yellow terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow glazed terracotta": {
    "name": "yellow glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove planks": {
    "name": "mangrove planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove trapdoor": {
    "name": "mangrove trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green stained glass": {
    "name": "green stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green stained glass pane": {
    "name": "green stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate diamond ore": {
    "name": "deepslate diamond ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxeye daisy": {
    "name": "oxeye daisy",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized cut copper": {
    "name": "waxed oxidized cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized cut copper slab": {
    "name": "waxed oxidized cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia planks": {
    "name": "acacia planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia button": {
    "name": "acacia button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink terracotta": {
    "name": "pink terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "coal block": {
    "name": "coal block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "coal": {
    "name": "coal",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "salmon": {
    "name": "salmon",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked salmon": {
    "name": "cooked salmon",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped jungle log": {
    "name": "stripped jungle log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped jungle wood": {
    "name": "stripped jungle wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered copper": {
    "name": "weathered copper",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered chiseled copper": {
    "name": "weathered chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate tile wall": {
    "name": "deepslate tile wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped oak log": {
    "name": "stripped oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak hanging sign": {
    "name": "oak hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled copper": {
    "name": "chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff": {
    "name": "tuff",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished tuff": {
    "name": "polished tuff",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered copper trapdoor": {
    "name": "weathered copper trapdoor",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered copper trapdoor": {
    "name": "waxed weathered copper trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone brick slab": {
    "name": "polished blackstone brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue carpet": {
    "name": "light blue carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff bricks": {
    "name": "tuff bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff brick wall": {
    "name": "tuff brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bowl": {
    "name": "bowl",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown mushroom": {
    "name": "brown mushroom",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red mushroom": {
    "name": "red mushroom",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "suspicious stew": {
    "name": "suspicious stew",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch fence": {
    "name": "birch fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson planks": {
    "name": "crimson planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson fence": {
    "name": "crimson fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond chestplate": {
    "name": "diamond chestplate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white wool": {
    "name": "white wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray wool": {
    "name": "light gray wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end stone": {
    "name": "end stone",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end stone brick wall": {
    "name": "end stone brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather": {
    "name": "leather",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather helmet": {
    "name": "leather helmet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lead": {
    "name": "lead",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate brick wall": {
    "name": "deepslate brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "open eyeblossom": {
    "name": "open eyeblossom",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed copper door": {
    "name": "waxed copper door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson fence gate": {
    "name": "crimson fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink glazed terracotta": {
    "name": "pink glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end stone brick stairs": {
    "name": "end stone brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink wool": {
    "name": "pink wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chicken": {
    "name": "chicken",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked chicken": {
    "name": "cooked chicken",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobbled deepslate stairs": {
    "name": "cobbled deepslate stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red tulip": {
    "name": "red tulip",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak planks": {
    "name": "dark oak planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak fence gate": {
    "name": "dark oak fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff wall": {
    "name": "tuff wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blaze rod": {
    "name": "blaze rod",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobblestone": {
    "name": "cobblestone",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brewing stand": {
    "name": "brewing stand",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped fungus": {
    "name": "warped fungus",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped fungus on a stick": {
    "name": "warped fungus on a stick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate bricks": {
    "name": "deepslate bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lapis ore": {
    "name": "lapis ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lapis lazuli": {
    "name": "lapis lazuli",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lapis block": {
    "name": "lapis block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "item frame": {
    "name": "item frame",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glow ink sac": {
    "name": "glow ink sac",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glow item frame": {
    "name": "glow item frame",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black dye": {
    "name": "black dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black candle": {
    "name": "black candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta terracotta": {
    "name": "magenta terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta glazed terracotta": {
    "name": "magenta glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle stairs": {
    "name": "jungle stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "emerald ore": {
    "name": "emerald ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "emerald": {
    "name": "emerald",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chest": {
    "name": "chest",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia boat": {
    "name": "acacia boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia chest boat": {
    "name": "acacia chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green bed": {
    "name": "green bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo planks": {
    "name": "bamboo planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo stairs": {
    "name": "bamboo stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia pressure plate": {
    "name": "acacia pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime dye": {
    "name": "lime dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered cut copper": {
    "name": "weathered cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered cut copper stairs": {
    "name": "weathered cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized chiseled copper": {
    "name": "waxed oxidized chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz block": {
    "name": "quartz block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz slab": {
    "name": "quartz slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dirt": {
    "name": "dirt",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "coarse dirt": {
    "name": "coarse dirt",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff slab": {
    "name": "tuff slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled tuff": {
    "name": "chiseled tuff",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone slab": {
    "name": "stone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "grindstone": {
    "name": "grindstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron boots": {
    "name": "iron boots",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo sign": {
    "name": "bamboo sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone slab": {
    "name": "polished blackstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark prismarine stairs": {
    "name": "dark prismarine stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized copper": {
    "name": "waxed oxidized copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "redstone": {
    "name": "redstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized copper bulb": {
    "name": "waxed oxidized copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pumpkin": {
    "name": "pumpkin",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sugar": {
    "name": "sugar",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "egg": {
    "name": "egg",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pumpkin pie": {
    "name": "pumpkin pie",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wooden shovel": {
    "name": "wooden shovel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove sign": {
    "name": "mangrove sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped mangrove wood": {
    "name": "stripped mangrove wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled tuff bricks": {
    "name": "chiseled tuff bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bundle": {
    "name": "bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray bundle": {
    "name": "light gray bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather chestplate": {
    "name": "leather chestplate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia slab": {
    "name": "acacia slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ward armor trim smithing template": {
    "name": "ward armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "eye armor trim smithing template": {
    "name": "eye armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "vine": {
    "name": "vine",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy cobblestone": {
    "name": "mossy cobblestone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden pickaxe": {
    "name": "golden pickaxe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gold nugget": {
    "name": "gold nugget",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gold ore": {
    "name": "gold ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed copper": {
    "name": "waxed exposed copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed cut copper slab": {
    "name": "waxed exposed cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw gold": {
    "name": "raw gold",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw gold block": {
    "name": "raw gold block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange terracotta": {
    "name": "orange terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak door": {
    "name": "oak door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown terracotta": {
    "name": "brown terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gunpowder": {
    "name": "gunpowder",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tnt": {
    "name": "tnt",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red_sand": {
    "name": "red_sand",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered copper grate": {
    "name": "weathered copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shield": {
    "name": "shield",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper block": {
    "name": "copper block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper bulb": {
    "name": "copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden carrot": {
    "name": "golden carrot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow wool": {
    "name": "yellow wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow bed": {
    "name": "yellow bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diorite": {
    "name": "diorite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished diorite slab": {
    "name": "polished diorite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak log": {
    "name": "dark oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak wood": {
    "name": "dark oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate redstone ore": {
    "name": "deepslate redstone ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue terracotta": {
    "name": "blue terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue glazed terracotta": {
    "name": "blue glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed copper block": {
    "name": "waxed copper block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed chiseled copper": {
    "name": "waxed chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue stained glass": {
    "name": "blue stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue stained glass pane": {
    "name": "blue stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone brick slab": {
    "name": "stone brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed copper": {
    "name": "exposed copper",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed copper grate": {
    "name": "exposed copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobbled deepslate wall": {
    "name": "cobbled deepslate wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized cut copper slab": {
    "name": "oxidized cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished andesite": {
    "name": "polished andesite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished andesite stairs": {
    "name": "polished andesite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting table": {
    "name": "crafting table",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dropper": {
    "name": "dropper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafter": {
    "name": "crafter",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue wool": {
    "name": "blue wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue carpet": {
    "name": "blue carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone": {
    "name": "stone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stonecutter": {
    "name": "stonecutter",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "poppy": {
    "name": "poppy",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple wool": {
    "name": "purple wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed copper bulb": {
    "name": "waxed copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized chiseled copper": {
    "name": "oxidized chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished deepslate": {
    "name": "polished deepslate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "potato": {
    "name": "potato",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "baked potato": {
    "name": "baked potato",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red bed": {
    "name": "red bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown glazed terracotta": {
    "name": "brown glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy stone bricks": {
    "name": "mossy stone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy stone brick stairs": {
    "name": "mossy stone brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle fence gate": {
    "name": "jungle fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray banner": {
    "name": "gray banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak stairs": {
    "name": "oak stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "torch": {
    "name": "torch",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "charcoal": {
    "name": "charcoal",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green terracotta": {
    "name": "green terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green glazed terracotta": {
    "name": "green glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone pressure plate": {
    "name": "polished blackstone pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple concrete powder": {
    "name": "purple concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone pressure plate": {
    "name": "stone pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobbled deepslate slab": {
    "name": "cobbled deepslate slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone brick stairs": {
    "name": "stone brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered cut copper slab": {
    "name": "weathered cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered cut copper slab": {
    "name": "waxed weathered cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "heavy weighted pressure plate": {
    "name": "heavy weighted pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed chiseled copper": {
    "name": "exposed chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed chiseled copper": {
    "name": "waxed exposed chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "coal ore": {
    "name": "coal ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red nether bricks": {
    "name": "red nether bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red nether brick wall": {
    "name": "red nether brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled polished blackstone": {
    "name": "chiseled polished blackstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz stairs": {
    "name": "quartz stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "redstone ore": {
    "name": "redstone ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "painting": {
    "name": "painting",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "packed ice": {
    "name": "packed ice",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue ice": {
    "name": "blue ice",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "furnace": {
    "name": "furnace",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak pressure plate": {
    "name": "dark oak pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black stained glass": {
    "name": "black stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red nether brick stairs": {
    "name": "red nether brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized copper grate": {
    "name": "oxidized copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed copper grate": {
    "name": "waxed copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce boat": {
    "name": "spruce boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce chest boat": {
    "name": "spruce chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed cut copper slab": {
    "name": "waxed cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown wool": {
    "name": "brown wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron nugget": {
    "name": "iron nugget",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "soul torch": {
    "name": "soul torch",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "soul lantern": {
    "name": "soul lantern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate iron ore": {
    "name": "deepslate iron ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "feather": {
    "name": "feather",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brush": {
    "name": "brush",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glass pane": {
    "name": "glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange stained glass pane": {
    "name": "orange stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized copper bulb": {
    "name": "oxidized copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin bricks": {
    "name": "resin bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin brick stairs": {
    "name": "resin brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "granite": {
    "name": "granite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "granite stairs": {
    "name": "granite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch log": {
    "name": "birch log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry planks": {
    "name": "cherry planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry pressure plate": {
    "name": "cherry pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron pickaxe": {
    "name": "iron pickaxe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff brick slab": {
    "name": "tuff brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mud brick stairs": {
    "name": "mud brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red terracotta": {
    "name": "red terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red glazed terracotta": {
    "name": "red glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished andesite slab": {
    "name": "polished andesite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red bundle": {
    "name": "red bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate brick slab": {
    "name": "deepslate brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond axe": {
    "name": "diamond axe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak slab": {
    "name": "oak slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "barrel": {
    "name": "barrel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed cut copper": {
    "name": "exposed cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed cut copper": {
    "name": "waxed exposed cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove slab": {
    "name": "mangrove slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak boat": {
    "name": "dark oak boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak chest boat": {
    "name": "dark oak chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone brick wall": {
    "name": "polished blackstone brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue orchid": {
    "name": "blue orchid",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether bricks": {
    "name": "nether bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether brick slab": {
    "name": "nether brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glowstone dust": {
    "name": "glowstone dust",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "arrow": {
    "name": "arrow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spectral arrow": {
    "name": "spectral arrow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray terracotta": {
    "name": "light gray terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "milk bucket": {
    "name": "milk bucket",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wheat": {
    "name": "wheat",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cake": {
    "name": "cake",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed cut copper slab": {
    "name": "exposed cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray stained glass pane": {
    "name": "light gray stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "clock": {
    "name": "clock",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "heavy core": {
    "name": "heavy core",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mace": {
    "name": "mace",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz pillar": {
    "name": "quartz pillar",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper grate": {
    "name": "copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "andesite": {
    "name": "andesite",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "andesite slab": {
    "name": "andesite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white bundle": {
    "name": "white bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bricks": {
    "name": "bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brick stairs": {
    "name": "brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak button": {
    "name": "dark oak button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lantern": {
    "name": "lantern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed cut copper stairs": {
    "name": "waxed exposed cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate tile slab": {
    "name": "deepslate tile slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak trapdoor": {
    "name": "oak trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crying obsidian": {
    "name": "crying obsidian",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glowstone": {
    "name": "glowstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "respawn anchor": {
    "name": "respawn anchor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked rabbit": {
    "name": "cooked rabbit",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rabbit stew": {
    "name": "rabbit stew",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine shard": {
    "name": "prismarine shard",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak log": {
    "name": "pale oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan concrete powder": {
    "name": "cyan concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dried kelp block": {
    "name": "dried kelp block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dried kelp": {
    "name": "dried kelp",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond block": {
    "name": "diamond block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lilac": {
    "name": "lilac",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray shulker box": {
    "name": "gray shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate gold ore": {
    "name": "deepslate gold ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobblestone wall": {
    "name": "cobblestone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia door": {
    "name": "acacia door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather leggings": {
    "name": "leather leggings",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jukebox": {
    "name": "jukebox",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan wool": {
    "name": "cyan wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brick": {
    "name": "brick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "flower pot": {
    "name": "flower pot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered copper": {
    "name": "waxed weathered copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered copper grate": {
    "name": "waxed weathered copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled stone bricks": {
    "name": "chiseled stone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bolt armor trim smithing template": {
    "name": "bolt armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown bed": {
    "name": "brown bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime wool": {
    "name": "lime wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime banner": {
    "name": "lime banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cracked deepslate bricks": {
    "name": "cracked deepslate bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether brick": {
    "name": "nether brick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether wart": {
    "name": "nether wart",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak fence": {
    "name": "pale oak fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown bundle": {
    "name": "brown bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered copper bulb": {
    "name": "weathered copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered copper bulb": {
    "name": "waxed weathered copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cocoa beans": {
    "name": "cocoa beans",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cookie": {
    "name": "cookie",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove stairs": {
    "name": "mangrove stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blackstone slab": {
    "name": "blackstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan stained glass": {
    "name": "cyan stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce planks": {
    "name": "spruce planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce slab": {
    "name": "spruce slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diorite stairs": {
    "name": "diorite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "powered rail": {
    "name": "powered rail",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle door": {
    "name": "jungle door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bone meal": {
    "name": "bone meal",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "torchflower": {
    "name": "torchflower",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished tuff stairs": {
    "name": "polished tuff stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak sign": {
    "name": "dark oak sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished deepslate wall": {
    "name": "polished deepslate wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak boat": {
    "name": "oak boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce button": {
    "name": "spruce button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "amethyst shard": {
    "name": "amethyst shard",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "amethyst block": {
    "name": "amethyst block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden leggings": {
    "name": "golden leggings",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin clump": {
    "name": "resin clump",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin brick": {
    "name": "resin brick",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce fence": {
    "name": "spruce fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red wool": {
    "name": "red wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red carpet": {
    "name": "red carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "snowball": {
    "name": "snowball",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "snow block": {
    "name": "snow block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end stone bricks": {
    "name": "end stone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white terracotta": {
    "name": "white terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy stone brick wall": {
    "name": "mossy stone brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron trapdoor": {
    "name": "iron trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black wool": {
    "name": "black wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black banner": {
    "name": "black banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo block": {
    "name": "bamboo block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond ore": {
    "name": "diamond ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch trapdoor": {
    "name": "birch trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry log": {
    "name": "cherry log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry wood": {
    "name": "cherry wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray terracotta": {
    "name": "gray terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange bed": {
    "name": "orange bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "basalt": {
    "name": "basalt",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished basalt": {
    "name": "polished basalt",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth stone": {
    "name": "smooth stone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth stone slab": {
    "name": "smooth stone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather boots": {
    "name": "leather boots",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "andesite stairs": {
    "name": "andesite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled bookshelf": {
    "name": "chiseled bookshelf",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped cherry log": {
    "name": "stripped cherry log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry hanging sign": {
    "name": "cherry hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white shulker box": {
    "name": "white shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine": {
    "name": "prismarine",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine stairs": {
    "name": "prismarine stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut copper stairs": {
    "name": "cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed cut copper stairs": {
    "name": "waxed cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue dye": {
    "name": "light blue dye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue terracotta": {
    "name": "light blue terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry boat": {
    "name": "cherry boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry chest boat": {
    "name": "cherry chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta concrete powder": {
    "name": "magenta concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow candle": {
    "name": "yellow candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry trapdoor": {
    "name": "cherry trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blackstone wall": {
    "name": "blackstone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak door": {
    "name": "pale oak door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "redstone lamp": {
    "name": "redstone lamp",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown carpet": {
    "name": "brown carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wither skeleton skull": {
    "name": "wither skeleton skull",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "skull banner pattern": {
    "name": "skull banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purpur slab": {
    "name": "purpur slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raiser armor trim smithing template": {
    "name": "raiser armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple banner": {
    "name": "purple banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brick wall": {
    "name": "brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple bundle": {
    "name": "purple bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "snow": {
    "name": "snow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple stained glass": {
    "name": "purple stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped spruce log": {
    "name": "stripped spruce log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce hanging sign": {
    "name": "spruce hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white tulip": {
    "name": "white tulip",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta bundle": {
    "name": "magenta bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled nether bricks": {
    "name": "chiseled nether bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue concrete powder": {
    "name": "light blue concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond helmet": {
    "name": "diamond helmet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak sign": {
    "name": "pale oak sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut red sandstone": {
    "name": "cut red sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut red sandstone slab": {
    "name": "cut red sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch slab": {
    "name": "birch slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy stone brick slab": {
    "name": "mossy stone brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo pressure plate": {
    "name": "bamboo pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cracked deepslate tiles": {
    "name": "cracked deepslate tiles",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "disc fragment 5": {
    "name": "disc fragment 5",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "music disc 5": {
    "name": "music disc 5",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "hopper": {
    "name": "hopper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "minecart": {
    "name": "minecart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "hopper minecart": {
    "name": "hopper minecart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "coast armor trim smithing template": {
    "name": "coast armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange carpet": {
    "name": "orange carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone stairs": {
    "name": "polished blackstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow carpet": {
    "name": "yellow carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine wall": {
    "name": "prismarine wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped pale oak log": {
    "name": "stripped pale oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped pale oak wood": {
    "name": "stripped pale oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sandstone": {
    "name": "sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled sandstone": {
    "name": "chiseled sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped warped stem": {
    "name": "stripped warped stem",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped hanging sign": {
    "name": "warped hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta shulker box": {
    "name": "magenta shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin block": {
    "name": "resin block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue stained glass": {
    "name": "light blue stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut copper slab": {
    "name": "cut copper slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw copper": {
    "name": "raw copper",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "furnace minecart": {
    "name": "furnace minecart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green shulker box": {
    "name": "green shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "moss block": {
    "name": "moss block",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed copper trapdoor": {
    "name": "exposed copper trapdoor",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed copper trapdoor": {
    "name": "waxed exposed copper trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red banner": {
    "name": "red banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate copper ore": {
    "name": "deepslate copper ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate lapis ore": {
    "name": "deepslate lapis ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished deepslate slab": {
    "name": "polished deepslate slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple bed": {
    "name": "purple bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "netherite block": {
    "name": "netherite block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "netherite ingot": {
    "name": "netherite ingot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ender pearl": {
    "name": "ender pearl",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blaze powder": {
    "name": "blaze powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ender eye": {
    "name": "ender eye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle slab": {
    "name": "jungle slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink candle": {
    "name": "pink candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple terracotta": {
    "name": "purple terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue bed": {
    "name": "blue bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone brick wall": {
    "name": "stone brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed copper grate": {
    "name": "waxed exposed copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "flower banner pattern": {
    "name": "flower banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry stairs": {
    "name": "cherry stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth quartz": {
    "name": "smooth quartz",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth quartz slab": {
    "name": "smooth quartz slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "hay block": {
    "name": "hay block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rabbit hide": {
    "name": "rabbit hide",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether brick fence": {
    "name": "nether brick fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta wool": {
    "name": "magenta wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "netherite scrap": {
    "name": "netherite scrap",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin brick slab": {
    "name": "resin brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled resin bricks": {
    "name": "chiseled resin bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized copper grate": {
    "name": "waxed oxidized copper grate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether quartz ore": {
    "name": "nether quartz ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz": {
    "name": "quartz",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bone block": {
    "name": "bone block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "redstone block": {
    "name": "redstone block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "enchanted golden apple": {
    "name": "enchanted golden apple",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mojang banner pattern": {
    "name": "mojang banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "composter": {
    "name": "composter",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak boat": {
    "name": "pale oak boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak chest boat": {
    "name": "pale oak chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow shulker box": {
    "name": "yellow shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink stained glass": {
    "name": "pink stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped cherry wood": {
    "name": "stripped cherry wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "netherrack": {
    "name": "netherrack",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone stairs": {
    "name": "stone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "honey block": {
    "name": "honey block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "honey bottle": {
    "name": "honey bottle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson stem": {
    "name": "crimson stem",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson hyphae": {
    "name": "crimson hyphae",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magma cream": {
    "name": "magma cream",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magma block": {
    "name": "magma block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone shovel": {
    "name": "stone shovel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron ore": {
    "name": "iron ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth quartz stairs": {
    "name": "smooth quartz stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate": {
    "name": "deepslate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "redstone torch": {
    "name": "redstone torch",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "activator rail": {
    "name": "activator rail",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black bed": {
    "name": "black bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped crimson stem": {
    "name": "stripped crimson stem",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped crimson hyphae": {
    "name": "stripped crimson hyphae",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white candle": {
    "name": "white candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo mosaic": {
    "name": "bamboo mosaic",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo mosaic slab": {
    "name": "bamboo mosaic slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple carpet": {
    "name": "purple carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether brick wall": {
    "name": "nether brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished granite stairs": {
    "name": "polished granite stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray bundle": {
    "name": "gray bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chest minecart": {
    "name": "chest minecart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered cut copper": {
    "name": "waxed weathered cut copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered chiseled copper": {
    "name": "waxed weathered chiseled copper",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether wart block": {
    "name": "nether wart block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "popped chorus fruit": {
    "name": "popped chorus fruit",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end rod": {
    "name": "end rod",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime concrete powder": {
    "name": "lime concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brick slab": {
    "name": "brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch wood": {
    "name": "birch wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch pressure plate": {
    "name": "birch pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blast furnace": {
    "name": "blast furnace",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime terracotta": {
    "name": "lime terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce stairs": {
    "name": "spruce stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw copper block": {
    "name": "raw copper block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purpur pillar": {
    "name": "purpur pillar",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed cut copper stairs": {
    "name": "exposed cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sea pickle": {
    "name": "sea pickle",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "target": {
    "name": "target",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak pressure plate": {
    "name": "oak pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black bundle": {
    "name": "black bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green concrete powder": {
    "name": "green concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cactus flower": {
    "name": "cactus flower",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo": {
    "name": "bamboo",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "scaffolding": {
    "name": "scaffolding",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed copper door": {
    "name": "exposed copper door",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed copper door": {
    "name": "waxed exposed copper door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "clay ball": {
    "name": "clay ball",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished blackstone button": {
    "name": "polished blackstone button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "observer": {
    "name": "observer",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle trapdoor": {
    "name": "jungle trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black carpet": {
    "name": "black carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo door": {
    "name": "bamboo door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown banner": {
    "name": "brown banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bow": {
    "name": "bow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "melon slice": {
    "name": "melon slice",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "melon": {
    "name": "melon",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gold block": {
    "name": "gold block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rabbit": {
    "name": "rabbit",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "netherite upgrade smithing template": {
    "name": "netherite upgrade smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan candle": {
    "name": "cyan candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray carpet": {
    "name": "gray carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bucket": {
    "name": "bucket",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "weathered copper door": {
    "name": "weathered copper door",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered copper door": {
    "name": "waxed weathered copper door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch sign": {
    "name": "birch sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue candle": {
    "name": "light blue candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow concrete powder": {
    "name": "yellow concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson slab": {
    "name": "crimson slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wooden axe": {
    "name": "wooden axe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo raft": {
    "name": "bamboo raft",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo chest raft": {
    "name": "bamboo chest raft",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sandstone slab": {
    "name": "sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan stained glass pane": {
    "name": "cyan stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black stained glass pane": {
    "name": "black stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw iron": {
    "name": "raw iron",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond sword": {
    "name": "diamond sword",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red concrete powder": {
    "name": "red concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime stained glass": {
    "name": "lime stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime stained glass pane": {
    "name": "lime stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "flow armor trim smithing template": {
    "name": "flow armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "exposed copper bulb": {
    "name": "exposed copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled quartz block": {
    "name": "chiseled quartz block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped stem": {
    "name": "warped stem",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped planks": {
    "name": "warped planks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rib armor trim smithing template": {
    "name": "rib armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime candle": {
    "name": "lime candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut sandstone": {
    "name": "cut sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cut sandstone slab": {
    "name": "cut sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "peony": {
    "name": "peony",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "beef": {
    "name": "beef",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked beef": {
    "name": "cooked beef",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia stairs": {
    "name": "acacia stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden boots": {
    "name": "golden boots",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue shulker box": {
    "name": "light blue shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rose bush": {
    "name": "rose bush",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "book": {
    "name": "book",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "obsidian": {
    "name": "obsidian",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "enchanting table": {
    "name": "enchanting table",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bone": {
    "name": "bone",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tnt minecart": {
    "name": "tnt minecart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry sign": {
    "name": "cherry sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "moss carpet": {
    "name": "moss carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "porkchop": {
    "name": "porkchop",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked porkchop": {
    "name": "cooked porkchop",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped warped hyphae": {
    "name": "stripped warped hyphae",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "glistering melon slice": {
    "name": "glistering melon slice",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple shulker box": {
    "name": "purple shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy cobblestone wall": {
    "name": "mossy cobblestone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished tuff slab": {
    "name": "polished tuff slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale moss block": {
    "name": "pale moss block",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale moss carpet": {
    "name": "pale moss carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pointed dripstone": {
    "name": "pointed dripstone",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dripstone block": {
    "name": "dripstone block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished deepslate stairs": {
    "name": "polished deepslate stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove button": {
    "name": "mangrove button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan bed": {
    "name": "cyan bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden sword": {
    "name": "golden sword",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "packed mud": {
    "name": "packed mud",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth sandstone": {
    "name": "smooth sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth sandstone slab": {
    "name": "smooth sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta banner": {
    "name": "magenta banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray concrete powder": {
    "name": "light gray concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak logs": {
    "name": "oak logs",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch button": {
    "name": "birch button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped fence": {
    "name": "warped fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped stairs": {
    "name": "warped stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta bed": {
    "name": "magenta bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray carpet": {
    "name": "light gray carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blackstone stairs": {
    "name": "blackstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray stained glass": {
    "name": "gray stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray stained glass pane": {
    "name": "gray stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden chestplate": {
    "name": "golden chestplate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch boat": {
    "name": "birch boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch chest boat": {
    "name": "birch chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped hyphae": {
    "name": "warped hyphae",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized copper door": {
    "name": "oxidized copper door",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized copper door": {
    "name": "waxed oxidized copper door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red sandstone wall": {
    "name": "red sandstone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron door": {
    "name": "iron door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dune armor trim smithing template": {
    "name": "dune armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smoker": {
    "name": "smoker",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine crystals": {
    "name": "prismarine crystals",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sea lantern": {
    "name": "sea lantern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple glazed terracotta": {
    "name": "purple glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green wool": {
    "name": "green wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green banner": {
    "name": "green banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wooden pickaxe": {
    "name": "wooden pickaxe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "firework rocket": {
    "name": "firework rocket",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron shovel": {
    "name": "iron shovel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether brick stairs": {
    "name": "nether brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "repeater": {
    "name": "repeater",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lily of the valley": {
    "name": "lily of the valley",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime shulker box": {
    "name": "lime shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white stained glass pane": {
    "name": "white stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle button": {
    "name": "jungle button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron helmet": {
    "name": "iron helmet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mud brick wall": {
    "name": "mud brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "emerald block": {
    "name": "emerald block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown candle": {
    "name": "brown candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond pickaxe": {
    "name": "diamond pickaxe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson door": {
    "name": "crimson door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond boots": {
    "name": "diamond boots",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove log": {
    "name": "mangrove log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove wood": {
    "name": "mangrove wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "vex armor trim smithing template": {
    "name": "vex armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue stained glass pane": {
    "name": "light blue stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lightning rod": {
    "name": "lightning rod",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shulker shell": {
    "name": "shulker shell",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "shulker box": {
    "name": "shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "quartz bricks": {
    "name": "quartz bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry slab": {
    "name": "cherry slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diorite slab": {
    "name": "diorite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "closed eyeblossom": {
    "name": "closed eyeblossom",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black terracotta": {
    "name": "black terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black glazed terracotta": {
    "name": "black glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth sandstone stairs": {
    "name": "smooth sandstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "piston": {
    "name": "piston",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped spruce wood": {
    "name": "stripped spruce wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch door": {
    "name": "birch door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine brick slab": {
    "name": "prismarine brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "armor stand": {
    "name": "armor stand",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "polished tuff wall": {
    "name": "polished tuff wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce log": {
    "name": "spruce log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce wood": {
    "name": "spruce wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed weathered cut copper stairs": {
    "name": "waxed weathered cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange wool": {
    "name": "orange wool",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bread": {
    "name": "bread",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ancient debris": {
    "name": "ancient debris",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson pressure plate": {
    "name": "crimson pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "prismarine slab": {
    "name": "prismarine slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red candle": {
    "name": "red candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink concrete powder": {
    "name": "pink concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate emerald ore": {
    "name": "deepslate emerald ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce pressure plate": {
    "name": "spruce pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized cut copper stairs": {
    "name": "waxed oxidized cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sandstone stairs": {
    "name": "sandstone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "flint": {
    "name": "flint",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "flint and steel": {
    "name": "flint and steel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron leggings": {
    "name": "iron leggings",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime glazed terracotta": {
    "name": "lime glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan banner": {
    "name": "cyan banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove fence": {
    "name": "mangrove fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "apple": {
    "name": "apple",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden apple": {
    "name": "golden apple",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diorite wall": {
    "name": "diorite wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light weighted pressure plate": {
    "name": "light weighted pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle fence": {
    "name": "jungle fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "allium": {
    "name": "allium",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta candle": {
    "name": "magenta candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized copper trapdoor": {
    "name": "oxidized copper trapdoor",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed oxidized copper trapdoor": {
    "name": "waxed oxidized copper trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lever": {
    "name": "lever",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "soul sand": {
    "name": "soul sand",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo button": {
    "name": "bamboo button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "host armor trim smithing template": {
    "name": "host armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak hanging sign": {
    "name": "pale oak hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "soul campfire": {
    "name": "soul campfire",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wooden sword": {
    "name": "wooden sword",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "raw iron block": {
    "name": "raw iron block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry fence": {
    "name": "cherry fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobblestone stairs": {
    "name": "cobblestone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pumpkin seeds": {
    "name": "pumpkin seeds",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia trapdoor": {
    "name": "acacia trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange candle": {
    "name": "orange candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove boat": {
    "name": "mangrove boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange stained glass": {
    "name": "orange stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chorus fruit": {
    "name": "chorus fruit",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy cobblestone stairs": {
    "name": "mossy cobblestone stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan carpet": {
    "name": "cyan carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped pressure plate": {
    "name": "warped pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped trapdoor": {
    "name": "warped trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black shulker box": {
    "name": "black shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce sign": {
    "name": "spruce sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cartography table": {
    "name": "cartography table",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped door": {
    "name": "warped door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown stained glass": {
    "name": "brown stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown stained glass pane": {
    "name": "brown stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "kelp": {
    "name": "kelp",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink bundle": {
    "name": "pink bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink stained glass pane": {
    "name": "pink stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray banner": {
    "name": "light gray banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron axe": {
    "name": "iron axe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue bundle": {
    "name": "blue bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue candle": {
    "name": "blue candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow stained glass": {
    "name": "yellow stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff brick stairs": {
    "name": "tuff brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wither rose": {
    "name": "wither rose",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia fence gate": {
    "name": "acacia fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wayfinder armor trim smithing template": {
    "name": "wayfinder armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond hoe": {
    "name": "diamond hoe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange tulip": {
    "name": "orange tulip",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan bundle": {
    "name": "cyan bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end stone brick slab": {
    "name": "end stone brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "beetroot": {
    "name": "beetroot",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "silence armor trim smithing template": {
    "name": "silence armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden hoe": {
    "name": "golden hoe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mutton": {
    "name": "mutton",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cooked mutton": {
    "name": "cooked mutton",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ghast tear": {
    "name": "ghast tear",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "end crystal": {
    "name": "end crystal",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mossy cobblestone slab": {
    "name": "mossy cobblestone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mushroom stew": {
    "name": "mushroom stew",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson sign": {
    "name": "crimson sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry door": {
    "name": "cherry door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak pressure plate": {
    "name": "pale oak pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray shulker box": {
    "name": "light gray shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped slab": {
    "name": "warped slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "azure bluet": {
    "name": "azure bluet",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bookshelf": {
    "name": "bookshelf",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lectern": {
    "name": "lectern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce trapdoor": {
    "name": "spruce trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper trapdoor": {
    "name": "copper trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed copper trapdoor": {
    "name": "waxed copper trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "black concrete powder": {
    "name": "black concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "granite wall": {
    "name": "granite wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "detector rail": {
    "name": "detector rail",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sandstone wall": {
    "name": "sandstone wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "comparator": {
    "name": "comparator",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone sword": {
    "name": "stone sword",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron chestplate": {
    "name": "iron chestplate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate coal ore": {
    "name": "deepslate coal ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle hanging sign": {
    "name": "jungle hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cobblestone slab": {
    "name": "cobblestone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wild armor trim smithing template": {
    "name": "wild armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle log": {
    "name": "jungle log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle wood": {
    "name": "jungle wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray candle": {
    "name": "gray candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth red sandstone slab": {
    "name": "smooth red sandstone slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow bundle": {
    "name": "yellow bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry fence gate": {
    "name": "cherry fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo slab": {
    "name": "bamboo slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oxidized cut copper stairs": {
    "name": "oxidized cut copper stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "deepslate brick stairs": {
    "name": "deepslate brick stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "waxed exposed copper bulb": {
    "name": "waxed exposed copper bulb",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle leaves": {
    "name": "jungle leaves",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leaf litter": {
    "name": "leaf litter",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue shulker box": {
    "name": "blue shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped dark oak log": {
    "name": "stripped dark oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak hanging sign": {
    "name": "dark oak hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "chiseled red sandstone": {
    "name": "chiseled red sandstone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped dark oak wood": {
    "name": "stripped dark oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether gold ore": {
    "name": "nether gold ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "leather horse armor": {
    "name": "leather horse armor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron hoe": {
    "name": "iron hoe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sentry armor trim smithing template": {
    "name": "sentry armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lodestone": {
    "name": "lodestone",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "daylight detector": {
    "name": "daylight detector",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tinted glass": {
    "name": "tinted glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "turtle scute": {
    "name": "turtle scute",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "turtle helmet": {
    "name": "turtle helmet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bordure indented banner pattern": {
    "name": "bordure indented banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green candle": {
    "name": "green candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue glazed terracotta": {
    "name": "light blue glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch stairs": {
    "name": "birch stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white glazed terracotta": {
    "name": "white glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "copper ore": {
    "name": "copper ore",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak button": {
    "name": "pale oak button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak trapdoor": {
    "name": "dark oak trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pitcher plant": {
    "name": "pitcher plant",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tide armor trim smithing template": {
    "name": "tide armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "melon seeds": {
    "name": "melon seeds",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "compass": {
    "name": "compass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "map": {
    "name": "map",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak door": {
    "name": "dark oak door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dispenser": {
    "name": "dispenser",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cracked polished blackstone bricks": {
    "name": "cracked polished blackstone bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped button": {
    "name": "warped button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red nether brick slab": {
    "name": "red nether brick slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak log": {
    "name": "oak log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak wood": {
    "name": "oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime bed": {
    "name": "lime bed",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove door": {
    "name": "mangrove door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped birch log": {
    "name": "stripped birch log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "birch hanging sign": {
    "name": "birch hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow banner": {
    "name": "yellow banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "purple stained glass pane": {
    "name": "purple stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "rail": {
    "name": "rail",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spider eye": {
    "name": "spider eye",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "fermented spider eye": {
    "name": "fermented spider eye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink banner": {
    "name": "pink banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime carpet": {
    "name": "lime carpet",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron sword": {
    "name": "iron sword",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle boat": {
    "name": "jungle boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle chest boat": {
    "name": "jungle chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white stained glass": {
    "name": "white stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tripwire hook": {
    "name": "tripwire hook",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crossbow": {
    "name": "crossbow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ice": {
    "name": "ice",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "honeycomb block": {
    "name": "honeycomb block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo trapdoor": {
    "name": "bamboo trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped birch wood": {
    "name": "stripped birch wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray stained glass": {
    "name": "light gray stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "armadillo scute": {
    "name": "armadillo scute",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wolf armor": {
    "name": "wolf armor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped oak wood": {
    "name": "stripped oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "white banner": {
    "name": "white banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wooden hoe": {
    "name": "wooden hoe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "note block": {
    "name": "note block",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cauldron": {
    "name": "cauldron",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "red shulker box": {
    "name": "red shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak fence gate": {
    "name": "pale oak fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "resin brick wall": {
    "name": "resin brick wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone hoe": {
    "name": "stone hoe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ladder": {
    "name": "ladder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia fence": {
    "name": "acacia fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "andesite wall": {
    "name": "andesite wall",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "yellow stained glass pane": {
    "name": "yellow stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cherry button": {
    "name": "cherry button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "beetroot soup": {
    "name": "beetroot soup",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "loom": {
    "name": "loom",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak slab": {
    "name": "dark oak slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia log": {
    "name": "acacia log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia wood": {
    "name": "acacia wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo fence": {
    "name": "bamboo fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove pressure plate": {
    "name": "mangrove pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan terracotta": {
    "name": "cyan terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cyan glazed terracotta": {
    "name": "cyan glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo mosaic stairs": {
    "name": "bamboo mosaic stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped bamboo block": {
    "name": "stripped bamboo block",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo hanging sign": {
    "name": "bamboo hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sunflower": {
    "name": "sunflower",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped sign": {
    "name": "warped sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "fletching table": {
    "name": "fletching table",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone button": {
    "name": "stone button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nautilus shell": {
    "name": "nautilus shell",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "heart of the sea": {
    "name": "heart of the sea",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "conduit": {
    "name": "conduit",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta stained glass": {
    "name": "magenta stained glass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "magenta stained glass pane": {
    "name": "magenta stained glass pane",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak stairs": {
    "name": "dark oak stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange shulker box": {
    "name": "orange shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak fence gate": {
    "name": "oak fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson stairs": {
    "name": "crimson stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove chest boat": {
    "name": "mangrove chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak stairs": {
    "name": "pale oak stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spyglass": {
    "name": "spyglass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia sign": {
    "name": "acacia sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "snout armor trim smithing template": {
    "name": "snout armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond leggings": {
    "name": "diamond leggings",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson hanging sign": {
    "name": "crimson hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped acacia log": {
    "name": "stripped acacia log",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stripped acacia wood": {
    "name": "stripped acacia wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "anvil": {
    "name": "anvil",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "carved pumpkin": {
    "name": "carved pumpkin",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jack o lantern": {
    "name": "jack o lantern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak button": {
    "name": "oak button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "clay": {
    "name": "clay",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce door": {
    "name": "spruce door",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden shovel": {
    "name": "golden shovel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "echo shard": {
    "name": "echo shard",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "recovery compass": {
    "name": "recovery compass",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ender chest": {
    "name": "ender chest",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sticky piston": {
    "name": "sticky piston",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spruce fence gate": {
    "name": "spruce fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson trapdoor": {
    "name": "crimson trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "tuff stairs": {
    "name": "tuff stairs",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cracked nether bricks": {
    "name": "cracked nether bricks",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smooth basalt": {
    "name": "smooth basalt",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "spire armor trim smithing template": {
    "name": "spire armor trim smithing template",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak wood": {
    "name": "pale oak wood",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "decorated pot": {
    "name": "decorated pot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "granite slab": {
    "name": "granite slab",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "diamond shovel": {
    "name": "diamond shovel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "nether star": {
    "name": "nether star",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "beacon": {
    "name": "beacon",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink petals": {
    "name": "pink petals",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "lime bundle": {
    "name": "lime bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "wet sponge": {
    "name": "wet sponge",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sponge": {
    "name": "sponge",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "gray glazed terracotta": {
    "name": "gray glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "campfire": {
    "name": "campfire",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "beehive": {
    "name": "beehive",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "brown concrete powder": {
    "name": "brown concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "trapped chest": {
    "name": "trapped chest",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light blue bundle": {
    "name": "light blue bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray candle": {
    "name": "light gray candle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "cactus": {
    "name": "cactus",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crimson button": {
    "name": "crimson button",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mud": {
    "name": "mud",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "field masoned banner pattern": {
    "name": "field masoned banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange bundle": {
    "name": "orange bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak fence": {
    "name": "oak fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "ink sac": {
    "name": "ink sac",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "writable book": {
    "name": "writable book",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "creaking heart": {
    "name": "creaking heart",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "warped fence gate": {
    "name": "warped fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "green bundle": {
    "name": "green bundle",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "sculk sensor": {
    "name": "sculk sensor",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "calibrated sculk sensor": {
    "name": "calibrated sculk sensor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange concrete powder": {
    "name": "orange concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange glazed terracotta": {
    "name": "orange glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "bamboo fence gate": {
    "name": "bamboo fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pale oak trapdoor": {
    "name": "pale oak trapdoor",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone pickaxe": {
    "name": "stone pickaxe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "fire charge": {
    "name": "fire charge",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue concrete powder": {
    "name": "blue concrete powder",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "jungle pressure plate": {
    "name": "jungle pressure plate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "oak chest boat": {
    "name": "oak chest boat",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove roots": {
    "name": "mangrove roots",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "muddy mangrove roots": {
    "name": "muddy mangrove roots",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "iron bars": {
    "name": "iron bars",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "dark oak fence": {
    "name": "dark oak fence",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smithing table": {
    "name": "smithing table",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "orange banner": {
    "name": "orange banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "mangrove fence gate": {
    "name": "mangrove fence gate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "golden axe": {
    "name": "golden axe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "creeper head": {
    "name": "creeper head",
    "isBase": true,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "creeper banner pattern": {
    "name": "creeper banner pattern",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "light gray glazed terracotta": {
    "name": "light gray glazed terracotta",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "acacia hanging sign": {
    "name": "acacia hanging sign",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stone axe": {
    "name": "stone axe",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "pink shulker box": {
    "name": "pink shulker box",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blue banner": {
    "name": "blue banner",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  }
};


  let processes = {
  "crafting_decorated_pot": {
    "name": "crafting_decorated_pot",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_mapcloning": {
    "name": "crafting_special_mapcloning",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_bannerduplicate": {
    "name": "crafting_special_bannerduplicate",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "campfire_cooking": {
    "name": "campfire_cooking",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_firework_rocket": {
    "name": "crafting_special_firework_rocket",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smoking": {
    "name": "smoking",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_bookcloning": {
    "name": "crafting_special_bookcloning",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "stonecutting": {
    "name": "stonecutting",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_mapextending": {
    "name": "crafting_special_mapextending",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_repairitem": {
    "name": "crafting_special_repairitem",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_firework_star_fade": {
    "name": "crafting_special_firework_star_fade",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smelting": {
    "name": "smelting",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_armordye": {
    "name": "crafting_special_armordye",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_transmute": {
    "name": "crafting_transmute",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_tippedarrow": {
    "name": "crafting_special_tippedarrow",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smithing_transform": {
    "name": "smithing_transform",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_firework_star": {
    "name": "crafting_special_firework_star",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "smithing_trim": {
    "name": "smithing_trim",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "as_fuel": {
    "name": "as_fuel",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_shapeless": {
    "name": "crafting_shapeless",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_shaped": {
    "name": "crafting_shaped",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "blasting": {
    "name": "blasting",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  },
  "crafting_special_shielddecoration": {
    "name": "crafting_special_shielddecoration",
    "isBase": false,
    "isDisabled": false,
    "durability": -1,
    "value": 1,
    "tags": [],
    "baseQuantity": 1
  }
};


  let recipes = [
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sand",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "breeze rod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "wind charge",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "white concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sugar cane",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "paper",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "shaper armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "shaper armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked cod",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cracked stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "purpur block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth red sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth red sandstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "fishing rod",
        "amount": 1
      },
      {
        "resourceName": "carrot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "carrot on a stick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled deepslate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "dandelion",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "wildflowers",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "slime ball",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "slime block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped mangrove log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "dark prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark prismarine slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cornflower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "birch planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_tippedarrow",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden helmet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "string",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "iron block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light blue wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light blue wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "red stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gray wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "shears",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "glass bottle",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "yellow terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "green stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "green stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate diamond ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxeye daisy",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "coal block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "salmon",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked salmon",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped jungle log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped jungle wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped oak log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered copper trapdoor",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper trapdoor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light blue wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "pink tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond chestplate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "leather",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather helmet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "string",
        "amount": 4
      },
      {
        "resourceName": "slime ball",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lead",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "open eyeblossom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper door",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper door",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "crimson planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "pink terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pink wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "chicken",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked chicken",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "red tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "dark oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "brewing stand",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "fishing rod",
        "amount": 1
      },
      {
        "resourceName": "warped fungus",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped fungus on a stick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "lapis ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lapis block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "item frame",
        "amount": 1
      },
      {
        "resourceName": "glow ink sac",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "glow item frame",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "magenta terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "emerald ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "acacia boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dirt",
        "amount": 2
      },
      {
        "resourceName": "gravel",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "coarse dirt",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 2
      },
      {
        "resourceName": "stone slab",
        "amount": 1
      },
      {
        "resourceName": "oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "grindstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron boots",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark prismarine",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark prismarine stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pumpkin",
        "amount": 1
      },
      {
        "resourceName": "sugar",
        "amount": 1
      },
      {
        "resourceName": "egg",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pumpkin pie",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "wooden shovel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped mangrove log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped mangrove wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "leather",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather chestplate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "ward armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "ward armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "eye armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "end stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "eye armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      },
      {
        "resourceName": "vine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "golden pickaxe",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "raw gold",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw gold block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gunpowder",
        "amount": 5
      },
      {
        "resourceName": "sand",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "tnt",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gunpowder",
        "amount": 5
      },
      {
        "resourceName": "red_sand",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "tnt",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "shield",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 8
      },
      {
        "resourceName": "carrot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden carrot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "yellow wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "coal",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate redstone ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "blue terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blue stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper slab",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper slab",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 5
      },
      {
        "resourceName": "crafting table",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 2
      },
      {
        "resourceName": "dropper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "crafter",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blue wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "stonecutter",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "poppy",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "purple dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper bulb",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper bulb",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "potato",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "baked potato",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_armordye",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "brown terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "jungle planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gray wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "torch",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "charcoal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "torch",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "green terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "purple dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered cut copper slab",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper slab",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "heavy weighted pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed chiseled copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "coal ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "string",
        "amount": 1
      },
      {
        "resourceName": "leather",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled polished blackstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "redstone ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 8
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "painting",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "packed ice",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue ice",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "furnace",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "spruce boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "brown dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 8
      },
      {
        "resourceName": "soul torch",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "soul lantern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate iron ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "feather",
        "amount": 1
      },
      {
        "resourceName": "copper ingot",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brush",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "birch log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "iron pickaxe",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff brick slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "red terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond axe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "oak slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "barrel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw gold",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "dark oak boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "blue orchid",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glowstone dust",
        "amount": 4
      },
      {
        "resourceName": "arrow",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spectral arrow",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "milk bucket",
        "amount": 3
      },
      {
        "resourceName": "sugar",
        "amount": 2
      },
      {
        "resourceName": "egg",
        "amount": 1
      },
      {
        "resourceName": "wheat",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cake",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 4
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "clock",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "heavy core",
        "amount": 1
      },
      {
        "resourceName": "breeze rod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mace",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz pillar",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 8
      },
      {
        "resourceName": "torch",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lantern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "emerald ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crying obsidian",
        "amount": 6
      },
      {
        "resourceName": "glowstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "respawn anchor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "baked potato",
        "amount": 1
      },
      {
        "resourceName": "cooked rabbit",
        "amount": 1
      },
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "carrot",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "rabbit stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine shard",
        "amount": 8
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark prismarine",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pale oak log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "dried kelp block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dried kelp",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 8
      },
      {
        "resourceName": "leather",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "item frame",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "diamond block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lilac",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "leather",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather leggings",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 8
      },
      {
        "resourceName": "diamond",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jukebox",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished granite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brick",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "flower pot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_mapcloning",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_firework_star",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "bolt armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bolt armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brown wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "lime wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 3
      },
      {
        "resourceName": "string",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "fishing rod",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cracked deepslate bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether brick",
        "amount": 2
      },
      {
        "resourceName": "nether wart",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate diamond ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered copper bulb",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper bulb",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "wheat",
        "amount": 2
      },
      {
        "resourceName": "cocoa beans",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookie",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "powered rail",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bone meal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "torchflower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "amethyst shard",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "amethyst block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden leggings",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "resin clump",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "red carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "snowball",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "snow block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron trapdoor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "black wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bamboo block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "diamond ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pink wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "basalt",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished basalt",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth stone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "leather",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather boots",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "oak slab",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled bookshelf",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped cherry log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "dark oak log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cut copper stairs",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "cherry boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone",
        "amount": 4
      },
      {
        "resourceName": "glowstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone lamp",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "brown dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "dark prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark prismarine stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "wither skeleton skull",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "skull banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purpur block",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "raiser armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "raiser armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purple wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "salmon",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked salmon",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "snow block",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "snow",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped spruce log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "white tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled nether bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glowstone dust",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "glowstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond helmet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cut red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut red sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized chiseled copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cracked deepslate tiles",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "disc fragment 5",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "music disc 5",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "hopper",
        "amount": 1
      },
      {
        "resourceName": "minecart",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "hopper minecart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "purpur block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "coast armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coast armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "yellow wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped pale oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped pale oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped warped stem",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "resin block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin clump",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "furnace",
        "amount": 1
      },
      {
        "resourceName": "minecart",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "furnace minecart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled deepslate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      },
      {
        "resourceName": "moss block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed copper trapdoor",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper trapdoor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate copper ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate lapis ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 2
      },
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chain",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purple wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "netherite block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite ingot",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "ender pearl",
        "amount": 1
      },
      {
        "resourceName": "blaze powder",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "ender eye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "white wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cut copper slab",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper slab",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "end stone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "prismarine shard",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate iron ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine shard",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "oxeye daisy",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "flower banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth quartz",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth quartz slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "wheat",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "hay block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "rabbit hide",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 4
      },
      {
        "resourceName": "nether brick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick fence",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "magenta wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth stone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "netherite scrap",
        "amount": 4
      },
      {
        "resourceName": "gold ingot",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin brick slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled resin bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "nether quartz ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bone block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bone meal",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "redstone block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "enchanted golden apple",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mojang banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak slab",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "composter",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "pale oak boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped cherry log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped cherry wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "netherrack",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_shielddecoration",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "honey block",
        "amount": 1
      },
      {
        "resourceName": "glass bottle",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "honey bottle",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson stem",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson hyphae",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "magma cream",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "magma block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone shovel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "iron ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth quartz",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth quartz stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 2
      },
      {
        "resourceName": "redstone torch",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "activator rail",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped crimson stem",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped crimson hyphae",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blaze powder",
        "amount": 1
      },
      {
        "resourceName": "slime ball",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magma cream",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo mosaic",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo mosaic slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purple wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut red sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron pickaxe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate redstone ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "minecart",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chest minecart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth red sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "raw gold block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw gold",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "oxeye daisy",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "nether wart",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether wart block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "popped chorus fruit",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end rod",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lime dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 5
      },
      {
        "resourceName": "furnace",
        "amount": 1
      },
      {
        "resourceName": "smooth stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "blast furnace",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "raw copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw copper",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "purpur block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur pillar",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "golden pickaxe",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "sea pickle",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone",
        "amount": 4
      },
      {
        "resourceName": "hay block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "target",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "green concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cactus flower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo",
        "amount": 6
      },
      {
        "resourceName": "string",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "scaffolding",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished granite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed copper door",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper door",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "clay ball",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled polished blackstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 6
      },
      {
        "resourceName": "redstone",
        "amount": 2
      },
      {
        "resourceName": "quartz",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "observer",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      },
      {
        "resourceName": "black carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brown wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "purple dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 3
      },
      {
        "resourceName": "string",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bow",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "melon slice",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "melon",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gold block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "rabbit",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked rabbit",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "netherite upgrade smithing template",
        "amount": 1
      },
      {
        "resourceName": "netherrack",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite upgrade smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth quartz",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "cornflower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gray wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bucket",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered copper door",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper door",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "wooden axe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "bamboo raft",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo chest raft",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sandstone slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cyan stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "black stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "black stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw iron",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond sword",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "red concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "lime stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "flow armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "breeze rod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "flow armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled quartz block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "warped stem",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 5
      },
      {
        "resourceName": "chest",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "hopper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_decorated_pot",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "rib armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "netherrack",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "rib armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cut sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 7
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dropper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "peony",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "nether quartz ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "beef",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked beef",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden boots",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz pillar",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "rose bush",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "book",
        "amount": 1
      },
      {
        "resourceName": "diamond",
        "amount": 2
      },
      {
        "resourceName": "obsidian",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "enchanting table",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bone meal",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "tnt",
        "amount": 1
      },
      {
        "resourceName": "minecart",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tnt minecart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "moss block",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "moss carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "porkchop",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked porkchop",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped warped stem",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped warped hyphae",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 8
      },
      {
        "resourceName": "melon slice",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "glistering melon slice",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized copper bulb",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper bulb",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_bookcloning",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "diamond ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blaze rod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blaze powder",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale moss block",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale moss carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pointed dripstone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "dripstone block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden sword",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "packed mud",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "magenta wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "oak logs",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "charcoal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light gray wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gray stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_bannerduplicate",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone torch",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden chestplate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "birch boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped stem",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped hyphae",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized copper door",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper door",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "dune armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dune armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak logs",
        "amount": 4
      },
      {
        "resourceName": "furnace",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smoker",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine shard",
        "amount": 4
      },
      {
        "resourceName": "prismarine crystals",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "sea lantern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "purple terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "green wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "wooden pickaxe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gunpowder",
        "amount": 1
      },
      {
        "resourceName": "paper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "firework rocket",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron shovel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate copper ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone torch",
        "amount": 2
      },
      {
        "resourceName": "redstone",
        "amount": 1
      },
      {
        "resourceName": "stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "repeater",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lily of the valley",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron helmet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "string",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "emerald",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 3
      },
      {
        "resourceName": "leather",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "book",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lime dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked cod",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond pickaxe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond boots",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "vex armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "vex armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "lapis ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "lightning rod",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "shulker shell",
        "amount": 2
      },
      {
        "resourceName": "chest",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "hay block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "wheat",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "closed eyeblossom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "black terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth sandstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "magenta wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 3
      },
      {
        "resourceName": "cobblestone",
        "amount": 4
      },
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "piston",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped spruce log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped spruce wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled polished blackstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "prismarine bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 6
      },
      {
        "resourceName": "smooth stone slab",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "armor stand",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      },
      {
        "resourceName": "black bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "white tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "green wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "green bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "wheat",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bread",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "ancient debris",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite scrap",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "popped chorus fruit",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur block",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue orchid",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate emerald ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "spruce log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether brick",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "flint",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "flint and steel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron leggings",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "lime terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cyan wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 8
      },
      {
        "resourceName": "apple",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden apple",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "light weighted pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "allium",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "sugar cane",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sugar",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brown wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized copper trapdoor",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper trapdoor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth sandstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lever",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "ancient debris",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite scrap",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut red sandstone",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered chiseled copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "soul sand",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "soul torch",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "soul sand",
        "amount": 1
      },
      {
        "resourceName": "charcoal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "soul torch",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "host armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "host armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped pale oak log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 3
      },
      {
        "resourceName": "soul sand",
        "amount": 1
      },
      {
        "resourceName": "oak logs",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "soul campfire",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "wooden sword",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "raw iron",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw iron block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin clump",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pumpkin",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pumpkin seeds",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "closed eyeblossom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "porkchop",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked porkchop",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "chorus fruit",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "popped chorus fruit",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "purple dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "mangrove log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized copper grate",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper grate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 2
      },
      {
        "resourceName": "oak planks",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cartography table",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bamboo",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cocoa beans",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brown stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "netherite ingot",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "netherite block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "kelp",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dried kelp",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pink stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light gray wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron axe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth stone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "wither rose",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 2
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "acacia planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "baked potato",
        "amount": 1
      },
      {
        "resourceName": "cooked rabbit",
        "amount": 1
      },
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "carrot",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "rabbit stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "crimson stem",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "wayfinder armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "wayfinder armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "iron pickaxe",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond hoe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "orange tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "black wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "black bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "sand",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "glass",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "beetroot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blue wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed cut copper stairs",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "silence armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "silence armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden hoe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "mutton",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked mutton",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 7
      },
      {
        "resourceName": "ender eye",
        "amount": 1
      },
      {
        "resourceName": "ghast tear",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end crystal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "bowl",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mushroom stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "prismarine bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "azure bluet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cherry log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak slab",
        "amount": 4
      },
      {
        "resourceName": "bookshelf",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lectern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "purple dye",
        "amount": 1
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cyan wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper trapdoor",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper trapdoor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "black concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 6
      },
      {
        "resourceName": "stone pressure plate",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "detector rail",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bone meal",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "bone block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone torch",
        "amount": 3
      },
      {
        "resourceName": "quartz",
        "amount": 1
      },
      {
        "resourceName": "stone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "comparator",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone sword",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "red bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "honey bottle",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "honey block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 8
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron chestplate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate coal ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped jungle log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "wild armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "wild armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "crafting table",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth red sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "lily of the valley",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "slime block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "slime ball",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw gold",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "cherry planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobbled deepslate wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "kelp",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dried kelp",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo mosaic",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled quartz block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "porkchop",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked porkchop",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed copper bulb",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper bulb",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nether brick slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled nether bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "jungle leaves",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "leaf litter",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate emerald ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brick",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "brown dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped dark oak log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sandstone slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled red sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped dark oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped dark oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "nether gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "leather",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "leather horse armor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron hoe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "sentry armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sentry armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chiseled stone bricks",
        "amount": 8
      },
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lodestone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 3
      },
      {
        "resourceName": "quartz",
        "amount": 3
      },
      {
        "resourceName": "oak slab",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "daylight detector",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "mutton",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked mutton",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "amethyst shard",
        "amount": 4
      },
      {
        "resourceName": "glass",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tinted glass",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "turtle scute",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "turtle helmet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "vine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "bordure indented banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "light blue terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled red sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth red sandstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "birch planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "honey bottle",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sugar",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "minecart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "white terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "wither rose",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light gray wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "copper ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      },
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bowl",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 1
      },
      {
        "resourceName": "vine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mud bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mud brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "salmon",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked salmon",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pitcher plant",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "tide armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tide armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "melon slice",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "melon seeds",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 8
      },
      {
        "resourceName": "compass",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "map",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 2
      },
      {
        "resourceName": "quartz",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "rabbit",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked rabbit",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 7
      },
      {
        "resourceName": "bow",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dispenser",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "raw iron",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cracked polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lime dye",
        "amount": 1
      },
      {
        "resourceName": "white bed",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped birch log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "birch hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "yellow wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "purple dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "rail",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "spider eye",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "sugar",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "fermented spider eye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "lime wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pink wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "torchflower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "beef",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked beef",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "basalt",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished basalt",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_mapextending",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "raw iron block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw iron",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 4
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "compass",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "nether gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "white wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "white carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dried kelp",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "dried kelp block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "lime wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "potato",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "baked potato",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron sword",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "jungle boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "white dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 3
      },
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "string",
        "amount": 2
      },
      {
        "resourceName": "tripwire hook",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "crossbow",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate tiles",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "ice",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "packed ice",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "honeycomb",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "honeycomb block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "copper ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "coal ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "allium",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped birch log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped birch wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "green wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "green carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light gray stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "armadillo scute",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "wolf armor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "white wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered cut copper stairs",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "quartz block",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "quartz bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "wooden hoe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 8
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "note block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cyan wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "cauldron",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut sandstone",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "pale oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "rabbit",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked rabbit",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut red sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 2
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone hoe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark prismarine",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark prismarine slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "white dye",
        "amount": 1
      },
      {
        "resourceName": "black wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "ladder",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished granite",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "yellow dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cherry planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cherry button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "beetroot",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "beetroot soup",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "string",
        "amount": 2
      },
      {
        "resourceName": "oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "loom",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "emerald block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "emerald",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled tuff",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mangrove planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cyan terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed copper grate",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper grate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_firework_rocket",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "mossy stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy stone brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo mosaic",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo mosaic stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped bamboo block",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lime dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purpur slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur pillar",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "sunflower",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "warped planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "flint",
        "amount": 2
      },
      {
        "resourceName": "oak planks",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "fletching table",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "nautilus shell",
        "amount": 8
      },
      {
        "resourceName": "heart of the sea",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "conduit",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth quartz",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth quartz stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "diorite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "magenta stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gray dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "orange tulip",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "oak planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "bamboo planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo raft",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "mangrove boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smoking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "mutton",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked mutton",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "amethyst shard",
        "amount": 1
      },
      {
        "resourceName": "copper ingot",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "spyglass",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "sand",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "orange wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "orange stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      },
      {
        "resourceName": "quartz",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "light blue stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "flint",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "feather",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "arrow",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia sign",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "snout armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "snout armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "redstone",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "cod",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked cod",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond leggings",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped crimson stem",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stripped acacia log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "stripped acacia wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple dye",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron block",
        "amount": 3
      },
      {
        "resourceName": "iron ingot",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "anvil",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "carved pumpkin",
        "amount": 1
      },
      {
        "resourceName": "torch",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jack o lantern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "potato",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "baked potato",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "clay",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "exposed cut copper slab",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed cut copper slab",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 1
      },
      {
        "resourceName": "moss block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "mossy cobblestone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "spruce planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce door",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden pickaxe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_repairitem",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden shovel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate lapis ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "echo shard",
        "amount": 8
      },
      {
        "resourceName": "compass",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "recovery compass",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "smooth quartz",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth quartz slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "obsidian",
        "amount": 8
      },
      {
        "resourceName": "ender eye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "ender chest",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "yellow dye",
        "amount": 1
      },
      {
        "resourceName": "white carpet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow carpet",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "slime ball",
        "amount": 1
      },
      {
        "resourceName": "piston",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sticky piston",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "terracotta",
        "amount": 8
      },
      {
        "resourceName": "cyan dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cyan terracotta",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "spruce planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "spruce fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purpur block",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "purpur stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cracked nether bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed weathered cut copper",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered cut copper slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "basalt",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth basalt",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 7
      },
      {
        "resourceName": "spire armor trim smithing template",
        "amount": 1
      },
      {
        "resourceName": "purpur block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "spire armor trim smithing template",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak log",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak wood",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 5
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "purple stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "purple stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate tile stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "brick",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "decorated pot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "diamond",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "diamond shovel",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blackstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "blackstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 5
      },
      {
        "resourceName": "nether star",
        "amount": 1
      },
      {
        "resourceName": "obsidian",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "beacon",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "clay ball",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "clay",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "pink petals",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "azure bluet",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "weathered copper grate",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed weathered copper grate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled resin bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "nether bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "nether brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "iron ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "yellow stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "yellow stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "deepslate bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "lime dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "lime bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "wet sponge",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sponge",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "red sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red sandstone stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "acacia log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_special_firework_star_fade",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cut sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "white stained glass",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "white stained glass pane",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      },
      {
        "resourceName": "white wool",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red wool",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "end stone bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "end stone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "redstone ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "gray terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gray glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 3
      },
      {
        "resourceName": "coal",
        "amount": 1
      },
      {
        "resourceName": "oak logs",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "campfire",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "granite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "granite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "honeycomb",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "beehive",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "chicken",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked chicken",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass pane",
        "amount": 8
      },
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red stained glass pane",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "brown dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "black wool",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "black carpet",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      },
      {
        "resourceName": "stick",
        "amount": 1
      },
      {
        "resourceName": "oak planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tripwire hook",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "tripwire hook",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "trapped chest",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "light blue dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light blue bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper grate",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper grate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron nugget",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "deepslate brick stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "diorite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "exposed cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "candle",
        "amount": 1
      },
      {
        "resourceName": "light gray dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray candle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "cactus",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "red nether bricks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "red nether brick slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished tuff",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cobblestone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "crimson planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "crimson button",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "poppy",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "red dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stone brick slab",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "chiseled stone bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "mud",
        "amount": 1
      },
      {
        "resourceName": "wheat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "packed mud",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold nugget",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oak log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper stairs",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "field masoned banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "orange dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "kelp",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "dried kelp",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cut red sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut red sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "book",
        "amount": 1
      },
      {
        "resourceName": "ink sac",
        "amount": 1
      },
      {
        "resourceName": "feather",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "writable book",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak log",
        "amount": 2
      },
      {
        "resourceName": "resin block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "creaking heart",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "blasting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate coal ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "warped planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "warped fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "magenta dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "magenta stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chiseled copper",
        "amount": 1
      },
      {
        "resourceName": "honeycomb",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed chiseled copper",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "prismarine",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "prismarine stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "campfire_cooking",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 600
      },
      {
        "resourceName": "chicken",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked chicken",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "bundle",
        "amount": 1
      },
      {
        "resourceName": "green dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "green bundle",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "lapis lazuli",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "copper block",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 9
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "orange wool",
        "amount": 3
      },
      {
        "resourceName": "oak planks",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange bed",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "amethyst shard",
        "amount": 3
      },
      {
        "resourceName": "sculk sensor",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "calibrated sculk sensor",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished blackstone",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished blackstone wall",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "orange dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "waxed copper block",
        "amount": 3
      },
      {
        "resourceName": "blaze rod",
        "amount": 1
      },
      {
        "resourceName": "redstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed copper bulb",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "sandstone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "sandstone slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "orange terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "raw copper",
        "amount": 9
      }
    ],
    "outputResources": [
      {
        "resourceName": "raw copper block",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "stone",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized copper grate",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "bamboo planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "bamboo fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "pale oak planks",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "pale oak trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished andesite",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished andesite stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "andesite",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "andesite slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone pickaxe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "open eyeblossom",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "tuff bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "tuff brick wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gunpowder",
        "amount": 1
      },
      {
        "resourceName": "blaze powder",
        "amount": 1
      },
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "fire charge",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "gunpowder",
        "amount": 1
      },
      {
        "resourceName": "blaze powder",
        "amount": 1
      },
      {
        "resourceName": "charcoal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "fire charge",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_transform",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "blue dye",
        "amount": 1
      },
      {
        "resourceName": "sand",
        "amount": 4
      },
      {
        "resourceName": "gravel",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue concrete powder",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "beef",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cooked beef",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "bowl",
        "amount": 1
      },
      {
        "resourceName": "brown mushroom",
        "amount": 1
      },
      {
        "resourceName": "red mushroom",
        "amount": 1
      },
      {
        "resourceName": "dandelion",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "suspicious stew",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 6
      },
      {
        "resourceName": "book",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "bookshelf",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle pressure plate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "chest",
        "amount": 1
      },
      {
        "resourceName": "oak boat",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oak chest boat",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "mud",
        "amount": 1
      },
      {
        "resourceName": "mangrove roots",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "muddy mangrove roots",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin brick slab",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "iron bars",
        "amount": 16
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "smooth red sandstone",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "smooth red sandstone slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "copper ingot",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "copper trapdoor",
        "amount": 2
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "weathered copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "weathered cut copper slab",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "dark oak planks",
        "amount": 4
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "dark oak fence",
        "amount": 3
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "polished diorite",
        "amount": 3
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished diorite slab",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smithing_trim",
    "inputResources": [],
    "outputResources": [],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "iron ingot",
        "amount": 2
      },
      {
        "resourceName": "oak planks",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "smithing table",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "resin brick",
        "amount": 4
      }
    ],
    "outputResources": [
      {
        "resourceName": "resin bricks",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "deepslate gold ore",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "orange wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "orange banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 4
      },
      {
        "resourceName": "mangrove planks",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "mangrove fence gate",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "cobbled deepslate",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "polished deepslate wall",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "gold ingot",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "golden axe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "oxidized cut copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "oxidized cut copper stairs",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cut copper",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "glass",
        "amount": 8
      },
      {
        "resourceName": "brown dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "brown stained glass",
        "amount": 8
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "paper",
        "amount": 1
      },
      {
        "resourceName": "creeper head",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "creeper banner pattern",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "ink sac",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "black dye",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "smelting",
    "inputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 200
      },
      {
        "resourceName": "light gray terracotta",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "light gray glazed terracotta",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "chain",
        "amount": 2
      },
      {
        "resourceName": "stripped acacia log",
        "amount": 6
      }
    ],
    "outputResources": [
      {
        "resourceName": "acacia hanging sign",
        "amount": 6
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "cobblestone",
        "amount": 3
      },
      {
        "resourceName": "stick",
        "amount": 2
      }
    ],
    "outputResources": [
      {
        "resourceName": "stone axe",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shapeless",
    "inputResources": [
      {
        "resourceName": "jungle log",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "jungle planks",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed oxidized copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed oxidized cut copper stairs",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "stonecutting",
    "inputResources": [
      {
        "resourceName": "waxed exposed copper",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "waxed exposed chiseled copper",
        "amount": 4
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_transmute",
    "inputResources": [
      {
        "resourceName": "shulker_box",
        "amount": 1
      },
      {
        "resourceName": "pink dye",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "pink shulker box",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "crafting_shaped",
    "inputResources": [
      {
        "resourceName": "blue wool",
        "amount": 6
      },
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "blue banner",
        "amount": 1
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "as_fuel",
    "inputResources": [
      {
        "resourceName": "coal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 1600
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "as_fuel",
    "inputResources": [
      {
        "resourceName": "charcoal",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 1600
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "as_fuel",
    "inputResources": [
      {
        "resourceName": "oak planks",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 300
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "as_fuel",
    "inputResources": [
      {
        "resourceName": "stick",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 100
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  },
  {
    "processUsed": "as_fuel",
    "inputResources": [
      {
        "resourceName": "bamboo",
        "amount": 1
      }
    ],
    "outputResources": [
      {
        "resourceName": "cookingtime",
        "amount": 50
      }
    ],
    "outputBonusChances": [],
    "timeSpent": 0,
    "isDisabled": false
  }
];
   dispatch({type: 'set resources', recordValue: resources});
   dispatch({type: 'set processes', recordValue: processes});
   dispatch({type: 'set recipes', arrayValue: recipes});
   let meta: craftingMetaData = {dataVersion: 1, name: '1.21.5 Vanillia', downloaded: false};
   dispatch({type: 'set metadata', anyValue: meta});
}