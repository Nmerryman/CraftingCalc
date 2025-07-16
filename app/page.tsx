'use client'

import 'reflect-metadata'
import { ChangeEvent, Dispatch, use, useEffect, useReducer, useState } from "react";
import { CraftingData, Stack } from "./crafting/units";
import { CraftingAction, CraftingDataProvider, craftingReducer, useCraftingData, useCraftingDataDispatch } from "./components/contexts/craftingContext";
import { OnEnterCall } from "./utils/keyboardUtil";
import { RequestMenuAction, requestMenuReducer, SelectionDisplay } from "./components/selectionMenu";
import { PresetConfig } from "./components/presetConfig";
import { compressedCobblestonePreset, durabilityTest, gtBackpackPreset, gtBlastFurnace, mmHDPEPellet, vanillaPickaxePreset } from "./crafting/defaultPresets";
import { HuristicsInfoDisplay } from "./components/huristics";
import { TempSolver } from './crafting/solver';
import { vanilla } from './crafting/vanillaPreset';
import { RamStorage, StorageWrapper } from './utils/storage';
import { DisabledListProvider } from './components/contexts/disabledListContext';



let resetRequestStateFunc: Function;  // Ugly hack to set a function, but in avoids passing a function through a bunch of innocent props/components.


function PullPreset(craftingDispatch: Dispatch<CraftingAction>, presetStorage: StorageWrapper, dispatchRequestMenu: Dispatch<RequestMenuAction>) {
    // TODO I should pass in request state dispatch and maybe current preset name request.

    dispatchRequestMenu({type: "reset", name: ""});  // Reset the request menu state so that it doesn't show any old requests.

    const element = document.getElementById("preset_input") as HTMLInputElement;
    var value = element?.value;
    if (!value) {
        // value = "Dev";
        // value = "HDPE Pellet"
        value = "Vanilla"
        // value = "BBF";
        // value = "durability";  
    }
    console.log("Preset is " + value);
    craftingDispatch({type: "reset"});

    if (presetStorage.getKeys().has(value)) {  // We check this because it's my "best practices", but we can bypass this and just check the value for undifined directly.
        const existingData = presetStorage.getItem(value);
        if (existingData) {
            craftingDispatch({type: "replace all", anyValue: JSON.parse(existingData)});  // This will load the preset data into the crafting data.
        } else {
            craftingDispatch({type: "reset"});
        }
    } else {
        console.log("Unknown preset set: " + value);
    }


}


function ensureDefaultPresets(presetStorage: StorageWrapper, setPresetStorage: Dispatch<StorageWrapper>) {
    console.log("Ensuring default presets are loaded...");
    
    // DEBUG clear
    // localStorage.clear();
    presetStorage = new StorageWrapper(localStorage, "_available_local");  // Recreate the storage wrapper to ensure that it has the latest data.

    // Create temp object
    let tempData = new CraftingData();
    function fakeDispatch(action: CraftingAction) {  // Simulate the regular dispatcher without triggering any prop updates.
        tempData = craftingReducer(tempData, action);
    }

    if (presetStorage.cacheNames.size == 0) {  // If this item is empty, that means we haven't loaded anything into it.

        // Add defaults
        // Dev
        fakeDispatch({type: "reset"});
        vanillaPickaxePreset(fakeDispatch)
        presetStorage.setItem("Dev", JSON.stringify(tempData));

        // Empty
        fakeDispatch({type: "reset"});
        presetStorage.setItem("Empty", JSON.stringify(tempData));

        // Backpack
        fakeDispatch({type: "reset"});
        gtBackpackPreset(fakeDispatch);
        presetStorage.setItem("Backpack", JSON.stringify(tempData));

        // BBF
        fakeDispatch({type: "reset"});
        gtBlastFurnace(fakeDispatch);
        presetStorage.setItem("BBF", JSON.stringify(tempData));

        // MM HDPE Pellet 
        fakeDispatch({type: "reset"});
        mmHDPEPellet(fakeDispatch);
        presetStorage.setItem(tempData._meta.name, JSON.stringify(tempData));

        // Compressed Cobblestone
        fakeDispatch({type: "reset"});
        compressedCobblestonePreset(fakeDispatch);
        presetStorage.setItem("Comp Cobble", JSON.stringify(tempData));

        // Vanilla generated
        fakeDispatch({type: "reset"});
        vanilla(fakeDispatch);
        presetStorage.setItem("Vanilla", JSON.stringify(tempData));

        // durability test
        fakeDispatch({type: "reset"});
        durabilityTest(fakeDispatch);
        presetStorage.setItem("durability", JSON.stringify(tempData));

        setPresetStorage(presetStorage.shallowClone());  // Update the state to reflect the new preset storage.
    } else {
        console.log("Preexisting presets found.");
    }
}


// Preset Menu of Nav Bar
function PresetMenu({dispatchRequestMenu, presetStorage, setPresetStorage}: {dispatchRequestMenu: Dispatch<RequestMenuAction>, presetStorage: StorageWrapper, setPresetStorage: Dispatch<StorageWrapper>}) {
    // TODO this will check the backend status and if it exist, add a load/push preset menu buttons
    const craftingDispatch = useCraftingDataDispatch();
    return (
        <div className="">
            {/* <CheckBackendStatus/> */}
            <div className="text-black grid grid-cols-2">
                <input className="col-span-2 dark_thing" autoComplete="on" list="preset_names" placeholder="Preset Name" id="preset_input" onKeyDown={OnEnterCall(() => PullPreset(craftingDispatch, presetStorage, dispatchRequestMenu))}></input>
                <input className="dark_thing lclickable clickable" type="submit" value="Load" onClick={() => {PullPreset(craftingDispatch, presetStorage, dispatchRequestMenu)}}></input>
                <PresetConfig dispatchRequestMenu={dispatchRequestMenu} presetStorage={presetStorage} setPresetStorage={setPresetStorage}/>
            </div>
        </div>
    )
}


// Header and Nav Bar
function Header({dispatchRequestMenu, presetStorage, setPresetStorage}: {dispatchRequestMenu: Dispatch<RequestMenuAction>, presetStorage: StorageWrapper, setPresetStorage: Dispatch<StorageWrapper>}) {
    return (
        <div>
            {/* <div className="text-3xl font-bold underline w-screen bg-slate-700 flex justify-center pb-2"> */}
            <div className="text-3xl font-bold underline w-screen flex justify-center pb-2 highlight_bg">
                Crafting Site
            </div>
            <div className="grid grid-cols-4">
                <a className="dark_thing clickable lclickable grow flex items-center justify-center" href="wiki">Help</a>
                <a className="dark_thing clickable lclickable grow flex items-center justify-center" href="presetGenerator">Preset Creator</a>
                <a className="dark_thing clickable lclickable grow flex items-center justify-center" href="https://github.com/Nmerryman/CraftingCalc-Frontend">Source</a>
                <PresetMenu dispatchRequestMenu={dispatchRequestMenu} presetStorage={presetStorage} setPresetStorage={setPresetStorage}/>
            </div>
        </div>
    )
}


function LogButton({text, dis, popupToggle}: {text: string, dis: Dispatch<CraftingAction>, popupToggle: () => void}) {
    return (
        <input type="button" value={text} onClick={() => {dis({type: "log"}); popupToggle()}}/>
    )
}


function MainBody() {
    const craftingData = useCraftingData();
    const dispatchData = useCraftingDataDispatch();
    const [craftingRequestState, dispatchCraftingRequest] = useReducer(requestMenuReducer, {})
    const [presetStorage, setPresetStorage] = useState(new RamStorage());  // This will be a wrapper around localStorage, but localStorage isn't defined until the effect runs.
    const [loadingStage, setLoadingStage] = useState(0);  // This is used to show the loading stage of the app. Basically just to make sure that effects fire once the last is done. 
    // const [manuallyDisabledList, setManuallyDisabledList] = useState([] as Array<string|number>); 


    // const testResourceName = "Iron Pickaxe";
    // const testResourceName = "HDPE Pellet"
    // const testResourceName = "iron ingot"
    // const testResourceName = "Bricked Blast Furnace";
    // const testResourceName = "mud"
    useEffect(() => {
        // Setup the correct storage location
        if (loadingStage === 0) {
            setPresetStorage(new StorageWrapper(localStorage, "_available_local"));  // Recreate the storage wrapper to ensure that it has the latest data.
            setLoadingStage(1);
        }
    }, [loadingStage]);  // Run update once after main page load

    useEffect(() => {
        // Ensure that the default presets are loaded.
        if (loadingStage === 1) {
            ensureDefaultPresets(presetStorage, setPresetStorage);
            setLoadingStage(2);
        }
    }, [loadingStage]);  // Run update once after main page load

    useEffect(() => {
        if (loadingStage === 2) {
            PullPreset(dispatchData, presetStorage, dispatchCraftingRequest);
            // dispatchCraftingRequest({type: "toggle", name: "HDPE Pellet"})
            // dispatchCraftingRequest({type: "toggle", name: "Bricked Blast Furnace"})
            // dispatchCraftingRequest({type: "toggle", name: testResourceName})
            // dispatchCraftingRequest({type: "toggle", name: "iron ingot"})
            // dispatchCraftingRequest({type: "toggle", name: "iron axe"})
            // dispatchCraftingRequest({type: "toggle", name: "rail"})
            // dispatchCraftingRequest({type: "toggle", name: "repeater"})
            // dispatchCraftingRequest({type: "toggle", name: "comparator"})
            // dispatchCraftingRequest({type: "toggle", name: "dispenser"})
            // // dispatchCraftingRequest({type: "toggle", name: "copper bulb"})
            // dispatchCraftingRequest({type: "toggle", name: "redstone"})
            // dispatchCraftingRequest({type: "toggle", name: "observer"})
            // dispatchCraftingRequest({type: "toggle", name: "piston"})
            // // dispatchCraftingRequest({type: "toggle", name: "red bed"})
            // dispatchCraftingRequest({type: "toggle", name: "final thing", value: 300})

        }
    }, [loadingStage]);  // Run update once after main page load


    return (
        <div className="">
            {(presetStorage.getKeys().size > 0) ?
                <datalist id="preset_names">
                    {
                        presetStorage.getKeysArray().map(name => {
                                    return <option value={name} key={name}/>
                        })
                            }
                        </datalist>
                        :
                        <></>
            }
            <Header dispatchRequestMenu={dispatchCraftingRequest} presetStorage={presetStorage} setPresetStorage={setPresetStorage}/>
            {/* <LogButton text="log craftingData" dis={dispatchData} popupToggle={togglePopupCallback(popupState, setPopupState)}/> */}
            {/* <PopupEditor craftingDispatch={dispatchData} craftingData={craftingData}></PopupEditor> */}
            <SelectionDisplay requestState={craftingRequestState} requestDispatch={dispatchCraftingRequest}/>
            {/* <button onClick={() => craftingData.healthCheckBaseItems()}>(Health check debug button)</button> */}
            <HuristicsInfoDisplay requestState={craftingRequestState}/>
        </div>
    )
}

// Homepage Displays and general root
export default function Main() {
    return (  // we can define the datalist early so that it can be used everywhere.
        <CraftingDataProvider>
            <DisabledListProvider>
                <MainBody/>
            </DisabledListProvider>
        </CraftingDataProvider>
    );
}




// Todo:
// when a requested item is needed in a later requested chain, an arrow is missing leaving the first item req
// scrollable requests page maybe?
// Remove process list?
// 
