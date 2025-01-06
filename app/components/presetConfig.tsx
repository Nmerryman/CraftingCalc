import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { Popup } from "reactjs-popup"
import xIcon from "./xIcon.png"
import { CraftingData } from "../crafting/units";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { CraftingAction } from "./crafting";


export function PresetConfig({craftingData, craftingDispatch, localAvailPresetNames, setLocalAvailPresetNames}: {craftingData: CraftingData, craftingDispatch: Dispatch<CraftingAction>, localAvailPresetNames: string, setLocalAvailPresetNames: Dispatch<string>}) {

    const [popupState, setPopupState] = useState(false);
    const closePopup = () => {setPopupState(false)};
    const [statusText, setStatusText] = useState("");

    const [localInput, setLocalInput] = useState("");
    const [downloadInput, setDownloadInput] = useState("");


    // This indirection/wrapping is needed for input validation
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

    // Dev callback to change text when buttons are clicked
    function tempStatus(name: string) {
        return () => {setStatusText("Clicked " + name + " button.")}
    }

    function removeFromLocal() {
        let current: Array<string> = JSON.parse(localAvailPresetNames);

        localStorage.removeItem(localInput);
        current = current.filter(val => val != localInput);

        let tempText = JSON.stringify(current)  // We have to do this because setLocalAvailPresetNames is async and won't update in time for reuse.
        setLocalAvailPresetNames(tempText);
        localStorage.setItem("_available_local", tempText)
        
        setStatusText(`Removed "${localInput}" from localStorage.`)
    }

    function downloadToLocal() {
        let url = downloadInput;

        if (url.length >= 4 && url.slice(0, 4) != "http") {
            // Assume it's a hosted preset request
            url = "/preset/" + url;
            if (url.length >= 5 && url.slice(-5, 5) == ".json") {
                url = url + ".json";
            }
        }

        // debug
        if (url.length == 0) {
            url = "/presets/Compressed.json"
        }

        let tempData: CraftingData;
        fetch(url).then(req => req.json().then((val) => {
            tempData = plainToInstance(CraftingData, val) as unknown as CraftingData;  // Why does plainToInstance try to always return an array for me
            console.log(tempData);

            if (tempData._meta.dataVersion != 2) {
                throw Error("Expected metadata version 2, got " + tempData._meta.dataVersion);
            }
            

        }))

        // let current = JSON.parse(localAvailPresetNames) as Array<string>;

        // if (!current.includes(saveInput)) {
        //     current.push(saveInput);
        // }
        // localStorage.setItem(saveInput, JSON.stringify(craftingData));

        // let tempText = JSON.stringify(current)  // We have to do this because setLocalAvailPresetNames is async and won't update in time for reuse.
        // setLocalAvailPresetNames(tempText);
        // localStorage.setItem("_available_local", tempText)

        // setStatusText(`Stored "${saveInput}" preset into locolStorage.`)
    }

    return (
        <>
            <input type="button" value="Config" className="input_button" onClick={() => setPopupState(true)}/>
            <Popup open={popupState} onClose={closePopup}>
                <div className="text-black items-center justify-center flex"><strong>Preset Config</strong>
                    <img src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup}/>
                </div>
                <div className="text-black grid grid-cols-4 gap-3 m-3">
                    <span>
                    Local Presets
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Name" list="preset_names" value={localInput} onChange={saveInputChange}></input>
                    <input type="button" className="input_button" value="serialize" onClick={() => {
                        let plain = instanceToPlain(craftingData);
                        let text = JSON.stringify(plain);
                        console.log(text)
                    }}/>
                    <input type="button" className="input_button" value="Delete Local" onClick={removeFromLocal}/>
                    <span>
                    Remote Presets
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Link" value={downloadInput} onChange={downloadInputChange}/>
                    <input type="button" className="input_button" value="Download" onClick={downloadToLocal}/>
                    {/* <input type="button" className="input_button" value="Sync Backend" onClick={tempStatus("Sync Backend Options")}/> */}
                </div>
                {
                    statusText.length > 0 ? 
                    <div className="bow_text">
                        {statusText}
                    </div> :
                    <></>
                }
            </Popup>
        </>
    )
}
