import { KeyboardEvent } from "react"

// Call a function when enter is pressed for an element.
// Maybe not needed? It seems that enter is counted as a click by default. This does specialize it though.
export function OnEnterCall(func: Function) {
    return (ele: KeyboardEvent) => {
        if (ele.key == "Enter") {
            func()
        }
    }
}
