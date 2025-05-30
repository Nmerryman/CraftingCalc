
// These functions were used for debugging
// export function TestArrowPath() {
//     return <path d="M 0 0 L 30 30 L 50 80 Z" className="stroke-yellow-300 fill-none" onClick={() => console.log("Clicked line")}/>;
// }

import { CSSProperties } from "react";
import { StepNode, StepNodeType } from "../crafting/solver";
import { svgConfig } from "./huristics";

// export function TestMaxBox() {
//     return <path d="M 0 0 H 100 V 100 H -10 Z"/>
// }


// export function TestBox({start, stop}: {start: Coordinate, stop: Coordinate}) {
//     return <path d={"M " + start.x + " " + start.y + " H " + stop.x + " V " + stop.y + " H " + start.x + "Z"}/>
// }


export interface Coordinate {
    x: number;
    y: number;
}

class Vector {
    mag: number;
    unit: Vector|null;

    constructor(public u: number, public v: number, isUnit=false) {
        this.mag = Math.sqrt(u*u + v*v)
        
        if (isUnit) {
            this.unit = null;
        } else {
            this.unit = new Vector(u / this.mag, v / this.mag, true);
        }
    }
    
    add(val: Vector): Vector {
        return new Vector(this.u + val.u, this.v + val.v);
    }
    
    sub(val: Vector): Vector {
        return new Vector(this.u - val.u, this.v - val.v);
    }
    
    mult(val: number): Vector {
        return new Vector(this.u * val, this.v * val);
    }
    
}



export function ArrowPath({start, end, scale = 1}: {start: Coordinate, end: Coordinate, scale?: number}) {

    // Constants to change the look of the arrows.
    let lineWidth = 1 * scale;
    let arrowWidth = 10 * scale;
    let arrowLength = 10 * scale;

    // Get the slope as a vector and it's normal vector
    let T = new Vector(end.x - start.x, end.y - start.y);
    let Pu = new Vector(T.unit!.v, -T.unit!.u, true);

    // Did the math on paper and verified by testing.
    let localPoints = [Pu.mult(lineWidth), T.unit!.mult(T.mag - arrowLength), Pu.mult(arrowWidth), T.unit!.mult(arrowLength).sub(Pu.mult(lineWidth + arrowWidth)), 
        T.unit!.mult(arrowLength).add(Pu.mult(lineWidth + arrowWidth)).mult(-1), Pu.mult(arrowWidth), T.unit!.mult(T.mag - arrowLength).mult(-1)]

    // Build the arrow
    let command = "M" + start.x + " " + start.y + "  ";
    for (let v of localPoints) {
        command += "l " + v.u + " " + v.v + "  ";
    }
    command += "L " + start.x + " " + start.y;

    return <path d={command}/>
    
}


export function TextCircle({center, text, node = undefined, scale = 1, config = new svgConfig()}: {center: Coordinate, text: string, node?: StepNode, scale?: number, config?: svgConfig}) {
    // This is hard coded and not synced up with other radius uses.
    let color = "green";
    if (node) {
        if (node.type == StepNodeType.RECIPE) {
            color = "#004000"
            scale = 0.75
        }
        if (node.parents.some(node => node.root)) {
            scale = scale * 1.2
            color = "lightgreen"
        }
    }

    let radius = 10 * scale;

    const style: CSSProperties = {
        fontSize:  `${18 * scale}px`,
        paintOrder: "stroke",
        stroke: "#000000",
        strokeWidth: "3px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        fontWeight: 800
    }

    return (
        <g>
           {/* //Text and circle calculator visual display */}
            <circle cx={center.x} cy={center.y} r={radius} fill={color}/>

            {(config.showText) ?
            <>
            {/* <rect x={center.x - boxWidth / 2} y={center.y - radius * 3.2} fill="black" width={boxWidth} height={boxhight}></rect>
            <text x={center.x} y={center.y - scale * 6 - radius} fill="white" textAnchor="middle" fontSize={`${scale}em`}>{text}</text> */}
            <text x={center.x} y={center.y - scale * 6 - radius} fill="white" textAnchor="middle" style={style}>{text}</text>
            </>
            :
            <></>}

        </g>
    )
}


export function calcArrows(end: Coordinate, start: Coordinate, scale: number = 1): {a: Coordinate, b: Coordinate} {
    // I had to swap end and start for some reason.
    let radius = 10 * scale;
    let startVec = new Vector(start.x, start.y);
    let endVec = new Vector(end.x, end.y);
    let circleDistance = endVec.sub(startVec).unit!.mult(radius);
    let aCir = startVec.add(circleDistance);
    let bCir = endVec.sub(circleDistance);

    return {a: {x: aCir.u, y: aCir.v}, b: {x: bCir.u, y: bCir.v}};
}

