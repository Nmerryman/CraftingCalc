
export class Permutation {
    permutationLimits: Record<string, number>;   // Base of each digit
    permutationState: Record<string, number>;    // Current permutation state
    done: boolean;

    constructor(limits: Record<string, number>) {
        this.permutationLimits = limits;
        this.permutationState = {};
        for (const name of Object.keys(limits)) {
            this.permutationState[name] = 0;
        }
        this.done = false;
    }

    get() {
        return this.permutationState;
    }

    hash() {
        return JSON.stringify(this.permutationState);
    }

    incrementPermutation() {
        let names = Object.keys(this.permutationLimits);
        let pointer = names.length - 1;

        while (pointer >= 0) {
            const looking = names[pointer];
            this.permutationState[looking] += 1;
            if (this.permutationLimits[looking] == this.permutationState[looking]) {
                this.permutationState[looking] = 0;
                pointer -= 1;
            } else {
                return;
            }
        }
        if (Object.values(this.permutationState).reduce((a, b) => a + b, 0) == 0) {
            this.done = true;
        }
        return;
    }

}

