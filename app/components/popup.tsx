import { Dispatch, SetStateAction } from "react";


export function togglePopupCallback(state: boolean, setter: Dispatch<SetStateAction<boolean>>) {
    return () => {console.log("toggle"); setter(!state)};
}



export function PopupEditor({popupState, popupToggle}: {popupState: boolean, popupToggle: () => void}) {
    if (popupState) {
        return (
            <div id="popupBox" className="absolute top-30 left-32 h-1/3 w-1/3 bg-white">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/861/190/small_2x/x-symbol-for-website-icon-presentation-free-vector.jpg" onClick={popupToggle}/>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}



