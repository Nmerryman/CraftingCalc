
// const serverUrl = new URL("https://rshim.hydris.dev");
const serverUrl = new URL("http://localhost:8000");

const projectName = "CC";

type errorRespOptions = 
    "No data for this user." |
    "Invalid request." |
    "Incorrect password." |
    "Server error." |
    string

type getResponse = {
    error?: errorRespOptions,
    data?: string,
    hasPassword?: boolean
}

type pushResponse = {
    message?: string,
    error?: errorRespOptions,
}

function calcHash(entryName: string): number {
    let count = 0;
    for (const c of projectName) {
        count += c.charCodeAt(0);
    }
    count += ":".charCodeAt(0);
    for (const c of entryName) {
        count += c.charCodeAt(0);
    }
    return count;
}

function entryUrl(accessStr: string, entry: string): URL {
    const target = new URL(`${accessStr}/${projectName}`, serverUrl);
    target.searchParams.append("entry", entry);
    target.searchParams.append("hash", calcHash(entry).toString());
    return target;
}

export async function pingServer(): Promise<boolean> {
    return fetch(serverUrl).then((e) => {
        if (e.ok) {
            return true;
        } else {
            throw "bad";
        }
    }).catch(() => {
        return false;
    })
}

export async function pullNameInfo(entry: string): Promise<getResponse> {
    return fetch(entryUrl("pull", entry))
        .then(res => {
            if (!res.ok) {
                throw new Error("Server error.");
            }
            return res.json().then(j => j as getResponse);
        })
        .catch(() => {
            return {"error": "Server error."}
        });
}

export async function pushNameInfo(entry: string, content: string, password: undefined|string = undefined): Promise<pushResponse> {
    const url = entryUrl("push", entry);
    if (typeof password === "string") {
        url.searchParams.set("password", password);
    }
    const wrappedContent = {data: content};
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({"data": "testing"}),
        body: JSON.stringify(wrappedContent),
    }).then(res => {
        if (!res.ok) {
            throw new Error("Server error.");
        }
        return res.json().then(j => j as pushResponse)
    })
    .catch(() => {
        return {"error": "Server error."};
    })
    
}

