
export function printArray(array: Array<any>) {
    console.log(array.map((e, i) => (i + ".[" + e + "]")).join(" "))
}
