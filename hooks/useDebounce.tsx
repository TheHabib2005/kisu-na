import React, { useEffect, useState } from 'react'

const useDebounce = (value: string, time = 500) => {
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounceValue(value)
        }, time);
        return () => {
            clearTimeout(timer);
        }
    }, [value, time])


    return debounceValue
}

export default useDebounce