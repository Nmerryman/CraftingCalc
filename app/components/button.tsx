'use client'

import { SyntheticEvent } from "react";


interface clickParam {
    kind: "link"|"callback";
    url?: string;
    callback?: () => void;
    debugText?: string;
}
export interface BtnParam extends clickParam {
    text: string;
}

function BtnAction({kind, url, debugText, callback}: clickParam) {
    if (debugText) {
        console.log(debugText);
    }

    if (kind == "link") {
        window.location.href = url!;
    } else {
        callback!();
    }
}


function HoverEffect(event: SyntheticEvent) {
    let ele = event.target as HTMLButtonElement;
    ele.style.backgroundColor = "#505050";
}


function RemoveHoverEffect(event: SyntheticEvent) {
    let ele = event.target as HTMLButtonElement;
    ele.style.backgroundColor = "";
}

export const LinkBtn: React.FC<BtnParam> = ({text, kind, url, debugText, callback}) => {

    return (
        <input className="cursor-pointer w-full"  type="button" value={text} onClick={() => BtnAction({kind, url, debugText, callback})} onMouseEnter={(ele) => {HoverEffect(ele)}} onMouseLeave={(ele) => {RemoveHoverEffect(ele)}}></input>
    )
}
// style={{padding: "0px 100px"}}