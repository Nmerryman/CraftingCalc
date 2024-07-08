'use client'


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

export const LinkBtn: React.FC<BtnParam> = ({text, url, debugText}) => {
    return (
        <input type="button" value={text} onClick={() => BtnAction(url, debugText)}></input>
    )
}