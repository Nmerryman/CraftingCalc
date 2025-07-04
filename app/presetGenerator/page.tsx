'use client'

import 'reflect-metadata'
import { ChangeEvent, Dispatch, useEffect, useReducer, useState } from "react"
import { CraftingData, Resource, Process, Recipe, Stack, craftingMetaData } from "../crafting/units";
import { craftingReducer } from "../components/crafting";
import Popup from 'reactjs-popup';
import { pingServer, pullNameInfo, pushNameInfo } from '../utils/serverApi';
import { basicText, basicTextWithHelpers, brickedBlastFurnaceText, defaultText, emptyText, plasticText } from './preset_texts';


function Header() {
    return (
        <div className="flex justify-center text-2xl">
            <h1>
                Preset generator
            </h1>
        </div>
    )
}


function SubHeader({setCodeText, setSaveAvail}: {setCodeText: Dispatch<string>, setSaveAvail: Dispatch<boolean>}) {

    function handleTextChange(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        switch (value) {
            case "default":
                setCodeText(defaultText);
                break;
            case "Empty":
                setCodeText(emptyText);
                break;
            case "Basic":
                setCodeText(basicText);
                break;
            case "BasicWithHelpers":
                setCodeText(basicTextWithHelpers);
                break;
            case "BrickedBlastFurnace":
                setCodeText(brickedBlastFurnaceText);
                break;
            case "Plastic":
                setCodeText(plasticText);
                break;
            default:
                setCodeText(defaultText);
                break;
        }
        setSaveAvail(false);
    }
    return (
    <>
        <div>
            <a href="/wiki/presetGenerator.html" target="_blank" className='hover:underline'>Documentation/Examples</a>
        </div>
        <div>
            Generate preset objects for the crafting system by writing (JavaScript) code.
            <select className='dark_thing clickable' onChange={handleTextChange} defaultValue="default">
                <option value="default">Default</option>
                <option value="Empty">Empty</option>
                <option value="Basic">Basic</option>
                <option value="BasicWithHelpers">Basic with Helpers</option>
                <option value="BrickedBlastFurnace">Bricked Blast Furnace</option>
                <option value="Plastic">Plastic Pellet</option>
            </select>

        </div>
        <div>
            Do <strong>not</strong> paste in code from anyone you don't know personally. 
        </div>
    </>
    );
}


function Editor({codeState, setCodeState, setSaveAvail}: {codeState: string, setCodeState: Dispatch<string>, setSaveAvail: Dispatch<boolean>}) {
    function textChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setCodeState(event.target.value);
        setSaveAvail(false);
    }

    return (
        <textarea value={codeState} onChange={textChange} className='w-5/6 h-5/6 dark_thing' placeholder='Insert Code here'/>
    )
}



enum uploadState {
    checking,
    dead,
    broken,
    openName,
    protectedName
}


function Uploader({popupState, craftingData}: {popupState: boolean, craftingData: CraftingData}) {
    const [uploaderState, setUploaderState] = useState(uploadState.checking);
    const [uploadResSate, setUploadResState] = useState("");
    const [nameInUse, setNameInUse] = useState(false);

    let passwordField = "";

    useEffect(() => {
        if (popupState) {
            pingServer()
                .then(res => {
                    if (res) {
                        pullNameInfo(craftingData._meta.name)
                            .then(res => {
                                if (res.error) {    // Error means no user exists for that name
                                    if (res.error == "Server error.") {
                                        setUploaderState(uploadState.broken)
                                    } else {
                                        setUploaderState(uploadState.openName);
                                        setNameInUse(false);
                                    }
                                } else {
                                    if (res.hasPassword && res.hasPassword) {   // lol
                                        setUploaderState(uploadState.protectedName);
                                    } else {    // Exists without password
                                        setUploaderState(uploadState.openName);
                                    }
                                    setNameInUse(true);
                                }
                            })
                    } else {
                        setUploaderState(uploadState.dead);
                    }
                })
        }
    }, [popupState]);
    
    function send() {
        pushNameInfo(craftingData._meta.name, JSON.stringify(craftingData), passwordField.length == 0 ? undefined: passwordField)
            .then((res) => {
                setUploadResState(JSON.stringify(res));
            })
        
    }
    
    function updatePassword(e: ChangeEvent<HTMLInputElement>) {
        passwordField = e.target.value;
    }

    if (uploaderState == uploadState.checking) {
        return <div>Checking for server.</div>
    } else if (uploaderState == uploadState.dead) {
        return <div>No server found.</div>
    } else if (uploaderState == uploadState.broken) {
        return <div>Server is broken somehow.</div>
    } else {
        return <div className=''>
            (Optional){!nameInUse ? "Create": "Overwrite"} saved preset "{craftingData._meta.name}"
            <br/>
            <input className='grow dark_thing' placeholder='Password' onChange={updatePassword}/>
            <button className='dark_thing clickable' onClick={send}>(Send)</button>
            <br/>
            {uploadResSate}
        </div>
    }
}

export default function Main() {
    const [codeText, setCodeText] = useState(defaultText);
    const [saveAvail, setSaveAvail] = useState(false);
    const [craftingData, craftingDispatch] = useReducer(craftingReducer, new CraftingData);
    const [firstTry, setFirstTry] = useState(true);
    const [validData, setValidData] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const popupClose = () => setPopupOpen(false);

    const [testState, setTestState] = useState(false);

    function runFunction() {
        setFirstTry(false);

        const func = new Function(codeText);  // It's ok for this to error in the console. I'll just make sure that others know where to look.
        let container = {resources: {}, processes: {}, recipes: [], meta: {}, _meta: {}};
        try {
            func(container)
        } catch {
            console.log("(Syntax) Error in provided script.");
            return;
        }
        container._meta = container.meta;
        craftingDispatch({type: "replace all", anyValue: container});
        const nextData = craftingReducer(craftingData, {type: "replace all", anyValue: container})  // Hack but this should work
        console.log(nextData);
        
        nextData.runHealthChecks();
        if (nextData.passedHealthCheck) {
            setSaveAvail(true);
            setValidData(true);
        } else {
            setValidData(false);
        }
    }

    function saveData() {
        navigator.clipboard.writeText(JSON.stringify(craftingData, null, 2));
        setPopupOpen(true);
    }

    if (typeof window !== "undefined") {
        (window as any).Resource = Resource;
        (window as any).Process = Process;
        (window as any).Recipe = Recipe;
        (window as any).Stack = Stack;
    }


    return (
        <div className='flex flex-col items-center h-screen'>
            <Header/>
            <SubHeader setCodeText={setCodeText} setSaveAvail={setSaveAvail}/>
            <Editor codeState={codeText} setCodeState={setCodeText} setSaveAvail={setSaveAvail}/>
            <Popup open={popupOpen} onClose={popupClose}>
                {/* <div className='readable_text border border-white bg-white flex-col'> */}
                <div className='dark border flex flex-col'>
                    <div>Data in json form (also already copied):</div>
                    <input className='dark_thing light_bg' defaultValue={JSON.stringify(craftingData)}/>
                    <Uploader popupState={popupOpen} craftingData={craftingData}/>
                </div>
            </Popup>
            <div>
                {/* <button className='input_button' onClick={() => console.log(craftingData)}>Log craftingdata</button> */}
                <button className='dark_thing clickable' onClick={runFunction}>Validate code</button>
                {
                (saveAvail) ? <button className='dark_thing clickable' onClick={saveData}>Save generated preset (to clipboard)</button> : <></>
                }
            </div>
            {
            (!firstTry) ?
                (validData) ? <div>Code generated a valid object</div> : <div>Code failed to create a valid object. Check the console for error message (f12)</div>
                : <></>
            }
        </div>
    )
}