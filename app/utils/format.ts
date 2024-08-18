import * as _ from "lodash";


export function printArray(array: Array<any>) {
    console.log(array.map((e, i) => (i + ".[" + e + "]")).join(" "))
}

export function log(data: any) {
    console.log(_.cloneDeep(data));
}
