import { useState } from "react";

import Debug from "debug";
const debug = Debug("utils")

export const toPromise = async asyncGen => {
    let contents = [];
    try {
        for await (const content of asyncGen) {
            contents = [...contents, content];
        }
    } catch (e) {
        console.log("Exception", e);
        return [undefined];
    }
    return contents;
}

export const toPromise1 = async asyncGen => (await toPromise(asyncGen))[0];

export const noop = () => null;

export const zip = (arr, ...arrs) => {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
  }

export const curry = (fn, ...oldArgs) => (...newArgs) => {
    const args = [...oldArgs, ...newArgs];
    return (args.length < fn.length) ? curry(fn, ...args) : fn(...args);
};

export const displayContentID = contentID => contentID ? contentID.toString().slice(-999) : "None";

export const useHash = () => {
    console.log("history", window.history, "hash", window.location.hash);
    //history.replaceState(undefined, undefined, "#hash_value")
    const locationHash = window.location.hash.replace("#","");
    const [hash,setHashState] = useState(locationHash || null);
    debug("hash", hash);
    const setHash = hash => {
        //const title = "Pollinations - "+ displayContentID(hash);
        const title=undefined;
        window.history.replaceState(undefined, title, "#"+hash);
        //window.title = title;
        setHashState(hash);
    }
    return [hash, setHash];
};


export const callLogger = (f,name = null) => (...args) => {
    if (!name)
      name = f.name;
    const _debug = debug.extend(name);
    _debug("Calling ",name, "with input", ...args);
    console.log("--- In:", ...args);
    const output = f(...args);
    if (output instanceof Promise)
        output.then(out => _debug("Output of", name,":", out));
    else
        _debug("Output of", name,":", output);
    return output;
  }
  