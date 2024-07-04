# ResourceCalc

## Goal
The goal of this project is to be able to help calculate required resources in order to produces specific items. This site is optomized for Minecraft Modpacks, but probably works for vanilla and other factory crafting games as well.
The most similar inpiration to this project is [this calculator](https://resourcecalculator.com/minecraft/#netheriteaxe=1&netheritehoe=1).

## Requirements

### The Front End
- Allows the user to enter new items and processes
- Let the user calculate what steps are needed to produce desired items
- Finds the most profitable path if multiple exist
- Shows the user paths and then lets them refine the chain
- Does not require a back end to work properly

### The Back End
- Lets users add items and processes to presets
- Lets users load presets


### Details
All of these objects can be retrieved from the back end and updates can be pushed with user accounts. (And logging)

#### Item Data
The object stores information such as:
- Name
- Image data (Optional)
- Item state (Item, liquid, gas, etc.) (Optional)
- Base quantity (Default: 1)
- IsBase (Do we care about anything preceding this)
- IsAvailable (Do we have access to the item at all) (Default: 1) (Optional)
- Durability (Can we reuse items multiple times) (Default: -1) (Optional)

#### Process Data
This object stores the information for a single machine:
- Name
- Image Data (Optional)
- Construction cost (Optional

#### Recipe Data
Each Input -> Process -> Output is stored in these objects:
- Process used
- Input items
- Output items
- Statistical output bonuses
- Time spent (Optional)

#### Page Toggles
Other general settings are stored here:
- Rely on parts of recepies that use probabilities
- Search depth max

The default page is similar to the linked site where there are final items to choose from and a way to generate the crafting path with all of the other stats the page shows. Stats will also include details such as minimum and maximum required machines, time spent, and steps required. In addition to that, it will give the option to hover over recepies and block or update certain items and processes which will update the tree after clicking update. If a non base item has no preceding recepies, it is highlighted for inspection. 

The algoriths will do an exhaustive search for all ways to reach from final item to starting resources. (Unless the depth reaches too deep) All different processes that result in essencially duplicate recepies will be collapsed, the user can pick the primary process chosen. 

In order to ease all steps, there will be interactive search bars to help find any of the data objects. Selecting a menu button on the object will open up a configuration page that can create/edit/delete an object.

At the top of the page there will be a menus to interact with the backend.
- On page load, display a color to detect if the backend is accessable
- A dropdown to load a preset from the server
- If a preset is selected, and the user is logged in, any time an object is edited, provide a push toggle to also update the server


## Technology Used
The front end will be created with React while the back end will use Expressjs both with TypeScript. The back end will use docker to host the program.



