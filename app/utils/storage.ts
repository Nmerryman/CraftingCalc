
interface StorageInterface {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
}


export class StorageWrapper implements StorageInterface {
    // Allow reuse of whatever storage object is used by isolating instances
    // Meta prefixe must not be a subset of another meta prefix
    constructor(public base: StorageInterface, public metaRoot: string = "_meta", public cacheNames: Set<string> = new Set()) {
        if (cacheNames.size === 0) {    // No guarantee that cache exists, so check
            const existingMeta = base.getItem(metaRoot);    // meta root only stores currently existing keys
            if (existingMeta && existingMeta.length > 0) {  // Not sure if the length check is needed
                const parsed = JSON.parse(existingMeta) as Array<string>;
                for (const key of parsed) {
                    this.cacheNames.add(key);
                }
            }
        }
    }

    getItem(key: string): string | null {
        if (!this.cacheNames.has(key)) {
            return null;
        } else {
            return this.base.getItem(this.metaRoot + key);
        }
    }    

    setItem(key: string, value: string): void {
        if (key !== "") {   // Don't let a user overwrite meta data
            this.base.setItem(this.metaRoot + key, value);
            if (!this.cacheNames.has(key)) {
                this.cacheNames.add(key);
                // Update the meta root to include this key
                this.base.setItem(this.metaRoot, JSON.stringify(Array.from(this.cacheNames)));
            }
        }
    }

    getKeys(): Set<string> {
        return this.cacheNames
    }

    getKeysArray(): Array<string> {
        return Array.from(this.cacheNames);
    }

    removeItem(key: string): void {
        this.base.removeItem(this.metaRoot + key);
        this.cacheNames.delete(key);
    }

    shallowClone(): StorageWrapper {
        // Designed to work in useState
        return new StorageWrapper(this.base, this.metaRoot, this.cacheNames)        
    }
}


export class RamStorage extends StorageWrapper {
    // This doesn't really need to be good. It just exists so that I can create a state object without next.js complaining.
    constructor() {
        let storage: Record<string, string> = {};
        super({
            setItem: (key: string, value: string) => { storage[key] = value; },
            getItem: (key: string) => { return storage[key] || null; },
            removeItem: (key: string) => { delete storage[key]; }
        });
    }
}

// const test = new StorageWrapper(localStorage)
