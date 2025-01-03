import { useState, Dispatch, SetStateAction } from "react";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {CraftingData, Resource, Process, Recipe} from '../crafting/units'
import { CraftingAction, craftingReducer } from "./crafting"


export function togglePopupCallback(state: boolean, setter: Dispatch<SetStateAction<boolean>>) {
    return () => {console.log("toggle"); setter(!state)};
}


function AddRequiredDetails() {
    // This part of the input popup is required no matter what. So it has been extracted out.
    return (
    <div>
        <label>
            Item Name: <input id="item_name" className="popup_text"></input>
        </label>
        <label>
            Is this a Base Material? <input type="checkbox" id="base_check"></input>
        </label>    
        <div>
            <label>
                What is the Durability of the Item (If Applicable): <input type="number" id="durability" defaultValue={''} min={0} className="popup_text"></input>
            </label>
        </div>
    </div>
    )
}


function submit(tab: string, craft_act: Dispatch<CraftingAction>, CraftingData: CraftingData) {
    // Take what we currently have in the form and push it to the crafting data to update it with our new thing.
    switch(tab) {
        case 'addItem':
            const name = document.getElementById('item_name') as HTMLInputElement
            const base = document.getElementById('base_check') as HTMLInputElement
            const dur = document.getElementById('durability') as HTMLInputElement
            const quant = document.getElementById('base_quant') as HTMLInputElement

            var name_val = name?.value
            var base_val = base?.value
            var dur_val = dur?.value
            var quant_val = quant.value

            const resource = new Resource(name_val, {isBase: base_val, durability: dur_val, baseQuantity: quant_val})
            craft_act({type: 'set resource', anyValue: resource})

            console.log(CraftingData.resources[name_val])
        }
}


function PopupForm({state, craftingDispatch, craftingData, closePopup}: {state: string, craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData, closePopup: () => void}) {
    // This is the form data based on what the current tab state of the popup is.
    // I would like to merge these, but I get a feeling that additional tabs won't be able to handle the abstraction.
    switch(state) {
        case 'addItem':
            return (
                <div>
                    <AddRequiredDetails/>
                    <div>
                        What is the Smallest Quantity Attainable? <input id="base_quant" className="popup_text"></input>
                    </div>
                    <div>
                        <button className='text-black bg-gray-200 hover:bg-gray-400 popup_button'
                            onClick= {() => {submit(state, craftingDispatch, craftingData); closePopup()}}>
                                <h2>Submit</h2>
                        </button>
                    </div>
                </div>
            );
        case 'addProcess':
            return (
                <div>
                    <AddRequiredDetails/>
                    <div>
                        <button className='text-black bg-gray-200 hover:bg-gray-400 popup_button'
                            onClick= {() => {submit(state, craftingDispatch, craftingData); closePopup();}}>
                                <h2>Submit</h2>
                        </button>
                    </div>
                </div>
            )
    }

}


export function PopupEditor({craftingDispatch, craftingData}: {craftingDispatch: Dispatch<CraftingAction>, craftingData: CraftingData}) {
    // This is the actual popup element for adding items/processes.

    const [tab, setTab] = useState<string>('addItem');
    const [open, setOpen] = useState<boolean>(false);
    const closePopup = () => setOpen(false);
    
    return (
        <div> 
            <button className="navbar_button" onClick={() => setOpen(true)}>Add Item/Process</button>
            <Popup open={open} onClose={closePopup}>
                <div className='modal'>
                    <div className="flex">
                        <button className='popup_button'
                            onClick={() => setTab('addItem')}>
                                <h2>Add Item</h2>
                        </button>
                        <button className='popup_button'
                            onClick={() => setTab('addProcess')}>
                                <h2>Add Process</h2>
                        </button>
                    </div>
                    <div className='text-black text-center'>
                        <PopupForm state={tab} craftingDispatch={craftingDispatch} craftingData={craftingData} closePopup={closePopup} />
                    </div>
                </div>
            </Popup>
        </div>
    )
}

