import levenshtein from "js-levenshtein";

function matchDist(fromString: string, toString: string): number {
    let i = 0;
    let limit = Math.min(fromString.length, toString.length);
    while (i < limit) {
        if (fromString[i] != toString[i]) {
            return i;
        }
        i++;
    }
    return limit;
}

function removeFuzzyMatching(fromString: string, toString: string): {remaining: string, unused: string} {
    let output = "";
    while (fromString.length > 0 && toString.length > 0) {
        let dist = matchDist(fromString, toString);
        fromString = fromString.slice(dist);
        toString = toString.slice(dist);
        if (toString.length > 0) {
            output += toString.slice(0, 1)[0];
            toString = toString.slice(1);
        }
    }
    output += toString;
    return {remaining: output, unused: fromString};
}

export function simmilarityScoreFunc(fromString: string, toString: string): number {
    let inputVal = fromString.toLowerCase();
    let testItem = toString.toLowerCase();
    let inputParts = inputVal.split(" ");
    let testParts = testItem.split(" ");
    let compParts: Array<{remaining: string, unused: string}> = [];

    for (let iPart of inputParts) {
        let bestTPart = removeFuzzyMatching(iPart, testParts[0]);
        let bestTPartSaved = 0;
        let bestTPartI = 0;
        for (let tPartsIndex = 0; tPartsIndex < testParts.length; tPartsIndex++) {
            let partResult = removeFuzzyMatching(iPart, testParts[tPartsIndex]);
            if (testParts[tPartsIndex].length - partResult.remaining.length > bestTPartSaved) {
                bestTPart = partResult;
                bestTPartSaved = testParts[tPartsIndex].length - partResult.remaining.length;
                bestTPartI = tPartsIndex;
            }
        }
        compParts.push(bestTPart);
    }
    return levenshtein(compParts.map(p => p.unused).join(" "), compParts.map(p => p.remaining).join(" "))
}
