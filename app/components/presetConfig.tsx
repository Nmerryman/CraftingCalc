import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { Popup } from "reactjs-popup"
import xIcon from "./xIcon.png"
import { CraftingData } from "../crafting/units";
import { CraftingAction } from "./crafting";
import Image from "next/image";


export function PresetConfig({craftingData, craftingDispatch, localAvailPresetNames, setLocalAvailPresetNames}: {craftingData: CraftingData, craftingDispatch: Dispatch<CraftingAction>, localAvailPresetNames: string, setLocalAvailPresetNames: Dispatch<string>}) {

    const [popupState, setPopupState] = useState(false);
    const closePopup = () => {setPopupState(false)};
    const [statusText, setStatusText] = useState("");
    const [localInput, setLocalInput] = useState("");
    const [downloadInput, setDownloadInput] = useState("");


    // This indirection/wrapping is needed for input validation. That way meta variables aren't overwritten
    function saveInputChange(event: ChangeEvent<HTMLInputElement>) {
        let val = event.currentTarget.value;
        if (val != "_available_local"  && val != "_available_backend") {
            setLocalInput(val);
        }
    }

    function downloadInputChange(event: ChangeEvent<HTMLInputElement>) {
        let val = event.currentTarget.value;
        if (val != "_available_local" && val != "_available_backend") {
            setDownloadInput(val);
        }
    }

    // I feel like a bunch of this stuff is duplicate and ugly
    function removeFromLocal() {
        let currentNames: Array<string> = JSON.parse(localAvailPresetNames);

        localStorage.removeItem(localInput);
        currentNames = currentNames.filter(val => val != localInput);

        let tempText = JSON.stringify(currentNames)  // We have to do this because setLocalAvailPresetNames is async and won't update in time for reuse.
        setLocalAvailPresetNames(tempText);
        localStorage.setItem("_available_local", tempText)
        
        setStatusText(`Removed "${localInput}" from localStorage.`)
    }

    function downloadToLocal() {
        let url = downloadInput;

        if (url.length >= 4 && url.slice(0, 4) != "http") {
            // Assume it's a hosted preset request
            url = "presets/" + url;
            if (url.length >= 5 && url.slice(-5, 5) == ".json") {
                url = url + ".json";
            }
        }

        // debug default
        if (url.length == 0) {
            url = "presets/Compressed.json"
        }

        fetch(url).then(req => req.json().then((val) => {
            let tempData = val as CraftingData;
            console.log(tempData);

            if (tempData._meta.dataVersion != 1) {
                throw Error("Expected metadata version 1, got " + tempData._meta.dataVersion);
            }
            tempData._meta.downloaded = true;
            tempData._meta.source = url;
            
            localStorage.setItem(tempData._meta.name, JSON.stringify(tempData));
            craftingDispatch({type: "replace all", anyValue: tempData})
            let currentAvailable: Array<string> = JSON.parse(localAvailPresetNames);
            if (!currentAvailable.includes(tempData._meta.name)) {
                currentAvailable.push(tempData._meta.name);
                setLocalAvailPresetNames(JSON.stringify(currentAvailable));
            }

            setStatusText(`Added and loaded "${tempData._meta.name}" preset.`);
        }))
    }

    function loadJsonPreset() {
        let tempData: CraftingData
        try {
            tempData = JSON.parse(localInput) as CraftingData;
        } catch {
            setStatusText(`Invalid data in input field.`);
            return;
        }

        if (tempData._meta.dataVersion != 1) {
            throw Error("Expected metadata version 1, got " + tempData._meta.dataVersion);
        }
        localStorage.setItem(tempData._meta.name, localInput);
        craftingDispatch({type: "replace all", anyValue: tempData});
        let currentAvailable: Array<string> = JSON.parse(localAvailPresetNames);
        if (!currentAvailable.includes(tempData._meta.name)) {
            currentAvailable.push(tempData._meta.name);
            setLocalAvailPresetNames(JSON.stringify(currentAvailable));
            localStorage.setItem("_available_local", JSON.stringify(currentAvailable));
        }
        
        setStatusText(`Added and loaded "${tempData._meta.name}" preset.`);
    }

    return (
        <>
            <input type="button" value="Config" className="input_button" onClick={() => setPopupState(true)}/>
            <Popup open={popupState} onClose={closePopup}>
                <div className="text-black items-center justify-center flex"><strong>Preset Config</strong>
                    {/* <Image src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup} alt="X"/> */}
                    <img src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup} alt="X"/>
                </div>
                <div className="text-black grid grid-cols-4 gap-3 m-3">
                    <span>
                    Local Presets
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Name/Data" list="preset_names" value={localInput} onChange={saveInputChange}></input>
                    {/* <input type="button" className="input_button" value="Serialize Loaded" onClick={() => {
                        let text = JSON.stringify(craftingData);
                        console.log(text)
                    }}/> */}
                    <input type="button" className="input_button" value="Delete Local" onClick={removeFromLocal}/>
                    <input type="button" className="input_button" value="Load JSON Preset" onClick={loadJsonPreset}/>
                    <span>
                    Remote Presets
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Link" value={downloadInput} onChange={downloadInputChange}/>
                    <input type="button" className="input_button" value="Download" onClick={downloadToLocal}/>
                </div>
                {
                    (statusText.length > 0) ? 
                    <div className="bow_text">
                        {statusText}
                    </div> :
                    <></>
                }
            </Popup>
        </>
    )
}
