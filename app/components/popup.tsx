import { useState, Dispatch, SetStateAction } from "react";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'


const AddItem: React.FC = () => {
    <div>
        <h2>Add New Item</h2>
        <label>
            Item Name: <input name="item_name" />
        </label>
    </div>
}



export function togglePopupCallback(state: boolean, setter: Dispatch<SetStateAction<boolean>>) {
    return () => {console.log("toggle"); setter(!state)};
}



// export function PopupEditor({popupState, popupToggle}: {popupState: boolean, popupToggle: () => void}) {
//     if (popupState) {
//         return (
//             <div id="popupBox" className="absolute top-30 left-32 h-1/3 w-1/3 bg-white">
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/007/861/190/small_2x/x-symbol-for-website-icon-presentation-free-vector.jpg" onClick={popupToggle}/>
//                 <AddItem />
//             </div>
//         )
//     }
//     else {
//         return (
//             <></>
//         )
//     }
// }

export function PopupEditor() {
    const [tab, setTab] = useState<string>('addItem');

    const render = () => {
        switch(tab) {
            case 'addItem':
                return (
                    <div>
                        <h2 className="popup_header text-center text-black">Add Item</h2>
                        <label>
                            Item Name: <input name="item_name" className="popup_text"></input>
                        </label>
                        <label>
                            Item Name: <input name="item_name" className="popup_text"></input>
                        </label>
                    </div>
                )
        }
    } 


    return (
        <div> 
            <Popup trigger=
                {<button> Popup Test</button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='text-black text-center'>
                                <h2>Add Item</h2>
                                <label>
                                    Item Name: <input name="item_name" className="popup_text"></input>
                                </label>
                            </div>
                            <div>
                                <button className='text-black bg-gray-200 hover:bg-gray-400 popup_button'
                                    onClick= {() => close()}>
                                        <h2>Add</h2>
                                    </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}



