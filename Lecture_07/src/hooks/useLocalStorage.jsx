import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
    // If we are using next js, which is server side react so we don't have window object. That's why making this check so that we can use same in nextjs projects also.
    if(typeof window === 'undefined') return undefined;

    // if a value already stored
    const localValue = JSON.parse(localStorage.getItem(key));
    if(localValue) return localValue;

    // return result of a function
    if(initValue instanceof Function) return initValue();

    return initValue;
}

const useLocalStorage = (key, initValue) => {
    // const [value, setValue] = useState(JSON.parse(localStorage.getItem('key')) || initValue);

    const [value, setValue] = useState(() => {
        return getLocalValue(key, initValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, initValue])

    return [value, setValue];
}

export default useLocalStorage