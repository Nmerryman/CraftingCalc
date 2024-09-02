import { ChangeEvent, Dispatch, useState } from "react";
import { Popup } from "reactjs-popup"
import xIcon from "./xIcon.png"


export function PresetConfig({currentPresetNames, setCurrentPresetNames}: {currentPresetNames: string, setCurrentPresetNames: Dispatch<string>}) {

    const [popupState, setPopupState] = useState(false);
    const closePopup = () => {setPopupState(false)};
    const [statusText, setStatusText] = useState("");

    const [saveInput, setSaveInput] = useState("");
    const [downloadInput, setDownloadInput] = useState("");


    // This indirection/wrapping is needed for input validation
    const saveInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let val = event.currentTarget.value;
        if (val != "_available_local"  && val != "_available_backend") {
            setSaveInput(val);
        }
    }

    const downloadInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let val = event.currentTarget.value;
        if (val != "_available_local" && val != "_available_backend") {
            setDownloadInput(val);
        }
    }

    // Dev callback to change text when buttons are clicked
    const tempStatus = (name: string) => {
        return () => {setStatusText("Clicked " + name + " button.")}
    }

    return (
        <>
            <input type="button" value="config" className="input_button" onClick={() => setPopupState(true)}/>
            <Popup open={popupState} onClose={closePopup}>
                <div className="text-black items-center justify-center flex"><strong>Preset Config</strong>
                    <img src={xIcon.src} className="h-7 absolute right-0" onClick={closePopup}/>
                </div>
                <div className="text-black grid grid-cols-5 gap-3 m-3">
                    <span>
                        Save Current Preset
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Name" value={saveInput} onChange={saveInputChange}></input>
                    <input type="button" className="input_button" value="Save Local"/>
                    <input type="button" className="input_button" value="Delete Local"/>
                    <input type="button" className="input_button" value="Push Backend" onClick={tempStatus("Push Backend")}/>
                    <span>
                    Download Preset
                    </span>
                    <input type="text" className="input_field" placeholder="Preset Name" value={downloadInput} onChange={downloadInputChange}/>
                    <input type="button" className="input_button" value="Download" onClick={tempStatus("Download")}/>
                    <input type="button" className="input_button" value="Sync Backend" onClick={tempStatus("Sync Backend Options")}/>
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
