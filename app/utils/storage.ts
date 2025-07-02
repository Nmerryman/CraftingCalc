
interface StorageInterface {
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
}

class StorageWrapper implements StorageInterface {
    // Allow reuse of whatever storage object is used by isolating instances
    constructor(public base: StorageInterface, public metaRoot: string = "_meta", public cacheNames: Set<string> = new Set()) {}

    getItem(key: string): string | null {
        if (!this.cacheNames.has(key)) {
            return null;
        } else {
            return this.base.getItem(this.metaRoot + key);
        }
    }    

    setItem(key: string, value: string): void {
        this.base.setItem(this.metaRoot + key, value);        
        this.cacheNames.add(key)
    }

    getKeys(): Set<string> {
        return this.cacheNames
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


const test = new StorageWrapper(localStorage)
