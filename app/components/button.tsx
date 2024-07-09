'use client'

import { SyntheticEvent } from "react";

export interface BtnParam {
    text: string;
    url: string;
    debugText?: string;
}

function BtnAction(url?: string, debugText?: string) {
    if (debugText) {
        console.log(debugText);
    }

    if (url) {
        window.location.href = url;
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

export const LinkBtn: React.FC<BtnParam> = ({text, url, debugText}) => {

    return (
        <input style={{padding: "0px 100px"}} type="button" value={text} onClick={() => BtnAction(url, debugText)} onMouseEnter={(ele) => {HoverEffect(ele)}} onMouseLeave={(ele) => {RemoveHoverEffect(ele)}}></input>
    )
}