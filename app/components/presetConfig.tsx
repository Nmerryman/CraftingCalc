import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { Popup } from "reactjs-popup"
import xIcon from "./xIcon.png"
import { CraftingData } from "../crafting/units";
import { CraftingAction } from "./crafting";
import Image from "next/image";
import { pullNameInfo } from "../utils/serverApi";
import { StorageWrapper } from "../utils/storage";
import { OnEnterCall } from "../utils/keyboardUtil";
import { RequestMenuAction } from "./selectionMenu";
import { useDisabledList, useDisabledListDispatch } from "./disabledListContext";

export function PresetConfig({craftingData, dispatchRequestMenu, craftingDispatch, presetStorage, setPresetStorage}: {craftingData: CraftingData, dispatchRequestMenu: Dispatch<RequestMenuAction>, craftingDispatch: Dispatch<CraftingAction>, presetStorage: StorageWrapper, setPresetStorage: Dispatch<StorageWrapper>}) {

    const [popupState, setPopupState] = useState(false);
    const closePopup = () => {setPopupState(false)};
    const [statusText, setStatusText] = useState("");
    const [jsonInput, setJsonInput] = useState("");
    const [deletionInput, setDeletionInput] = useState("");
    const [downloadInput, setDownloadInput] = useState("");

    const disabledList = useDisabledList();
    const setDisabledList = useDisabledListDispatch();

    // I feel like a bunch of this stuff is duplicate and ugly
    function removeFromLocal() {
        presetStorage.removeItem(deletionInput);
        setPresetStorage(presetStorage.shallowClone());

        setStatusText(`Removed "${deletionInput}" from localStorage.`)
    }

    function loadFromJSONString(resp: string) {
        // Assume no error
        // TODO check what happens to invalid data
        let tempData = JSON.parse(resp) as CraftingData;
        console.log(tempData);
        
        if (tempData._meta.dataVersion != 1) {
            const errorMessage = "Expected metadata version 1, got " + tempData._meta.dataVersion + ".";
            setStatusText(errorMessage);
            throw Error(errorMessage);
        }
        
        presetStorage.setItem(tempData._meta.name, JSON.stringify(tempData));
        setPresetStorage(presetStorage.shallowClone());
        craftingDispatch({type: "replace all", anyValue: tempData})
        dispatchRequestMenu({type: "reset", name: ""});
        return tempData._meta.name;     // Should be fine and not too hacky
    }

    function downloadToLocal() {
        let url = downloadInput;

        if (url.length >= 4 && url.slice(0, 4) == "http") {
            fetch(url)
                .then(response => {
                    return response.text();
                })
                .then(response => {
                    loadFromJSONString(response)
                })
                .catch(err => {
                    return;
                });
        } else {
            // Assume it's a hosted preset requested via name
            pullNameInfo(url)
                .then(response => {
                    if (response.error) {
                        setStatusText(`Returned error ${response.error}`);
                    } else {
                        if (response.data) {
                            const loadedName = loadFromJSONString(response.data)
                            setStatusText(`Added and loaded "${loadedName}" preset.`);
                        } else {
                            setStatusText("Malformed server response.");
                        }
                    }
                })
                .catch(err => {
                    return;
                });
        }
    }

    function loadJsonPreset() {
        let tempData: CraftingData
        try {   // Make sure json is parsable
            tempData = JSON.parse(jsonInput) as CraftingData;
        } catch {
            setStatusText(`Invalid data in input field.`);
            return;
        }

        try {
            loadFromJSONString(jsonInput);
            setStatusText(`Added and loaded "${tempData._meta.name}" preset.`);
        } catch (e) {
            return; // loadFromJSONString will set the status text
        }
    }

    function undoLastDisabled() {
        if (disabledList.length > 0) {
            const lastDisabled = disabledList[disabledList.length - 1];
            setDisabledList(disabledList.slice(0, -1)); 
            const thing = craftingData.get(lastDisabled);
            if (thing) {
                thing.isDisabled = false;  // Should always be defined
                setStatusText(`Re-enabled "${lastDisabled}".`);
            } else {
                console.error(`Tried to undo disabled thing "${lastDisabled}" but it was not found in craftingData.`);
            }
        } else {
            setStatusText("No things to undo.");
        }
    }

    let undoButtonText = "Undo ";
    if (disabledList.length > 0) {
        undoButtonText += `"${disabledList[disabledList.length - 1]}"`;
    }

    return (
        <>
            <input type="button" value="Config" className="dark_thing clickable" onClick={() => setPopupState(true)}/>
            <Popup className="standard-popup" open={popupState} onClose={closePopup}>
                <div className="dark items-center justify-center flex mt-1"><strong>Preset Config</strong>
                    {/* <Image src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup} alt="X"/> */}
                    <img src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup} alt="X"/>
                </div>
                <div className="dark grid grid-cols-3 gap-0 m-3">
                    <span>
                    Load from (generated) JSON
                    </span>
                    <input type="text" className="dark_thing" placeholder="Preset Data" onChange={e => setJsonInput(e.currentTarget.value)} onKeyDown={OnEnterCall(loadJsonPreset)}></input>
                    <input type="button" className="dark_thing clickable" value="Load JSON Preset" onClick={loadJsonPreset}/>
                    <span>
                    Delete saved preset
                    </span>
                    <input type="text" className="dark_thing" placeholder="Preset Name" value={deletionInput} onChange={e => setDeletionInput(e.currentTarget.value)} onKeyDown={OnEnterCall(removeFromLocal)} list="preset_names"/>
                    <input type="button" className="dark_thing clickable" value="Delete Local" onClick={removeFromLocal}/>
                    <span>
                    Download remote presets
                    </span>
                    <input type="text" className="dark_thing" placeholder="Preset Link" value={downloadInput} onChange={e => setDownloadInput(e.currentTarget.value)} onKeyDown={OnEnterCall(downloadToLocal)}/>
                    <input type="button" className="dark_thing clickable" value="Download" onClick={downloadToLocal}/>
                    <span>Undo last disabled thing</span>
                    <input type="button" className="dark_thing clickable" value={undoButtonText} onClick={undoLastDisabled}/>
                </div>
                {
                    (statusText.length > 0) ? 
                    <div className="text-center dark_thing">
                        {statusText}
                    </div> :
                    <></>
                }
            </Popup>
        </>
    )
}
