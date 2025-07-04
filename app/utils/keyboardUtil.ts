import { ChangeEvent, KeyboardEvent } from "react"

// Call a function when enter is pressed for an element.
// Maybe not needed? It seems that enter is counted as a click by default. This does specialize it though.
export function OnEnterCall(func: Function) {
    return (ele: KeyboardEvent) => {
        if (ele.key == "Enter") {
            func()
        }
    }
}

export function onlyNumbers(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    console.log("Input value before processing: " + value);
    // while (value.length > 0 && !Number.isInteger(parseInt(value))) {
    //     console.log("Removing last character from input: " + value);
    //     value = value.slice(0, -1);  // Remove last character until it is an integer
    // }
    console.log("Input value after processing: " + value);
    event.target.value = value;
}
