import React, { FormEvent, useEffect, useRef, useState } from "react";
import { clearInterval } from "timers";
import useDebounce from "./useDebounce";
import { productData } from "@/data";
import { useSearchParams } from "next/navigation";

const useSearchbar = () => {
    const [searchData, setSearchData] = useState<any[]>([]);
    const searchParams = useSearchParams()
    const [inputValue, setInputValue] = useState(searchParams.get("q") || "");
    const debouncedInputValue = useDebounce(inputValue);
    const [openSearchSuggestion, setOpenSearchSuggestion] = useState(false);
    const [me, setme] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentActiveIndex, setCurrentActiveIndex] = useState(-1)

    const fetchSearchData = async () => {
        try {
            let response = await fetch("http://localhost");
            let data = await response.json();
            setSearchData(productData);
            localStorage.setItem("search-data", JSON.stringify(productData));
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    const updateDataInside = async () => {
        let interval = setInterval(() => {
            // fetchSearchData()
        }, 500000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setme(true)
        let value = e.target.value
        setInputValue(value);
        if (value === "") {
            setme(false)
            setOpenSearchSuggestion(false);
        }

    };

    const filteredSearchData = [...searchData].filter((search) =>
        search.title
            .toLowerCase()
            .includes(debouncedInputValue.toLowerCase())
    );



    const handleSelectSuggestion = (item: string) => {
        setInputValue(item);
        window.location.href = `/search?q=${item}`
    }


    const handleDelete = () => {
        setInputValue("");
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue) {
            window.location.href = `/search?q=${inputValue}`
        }

    };

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (currentActiveIndex !== -1) {
                let value = filteredSearchData[currentActiveIndex].product_name
                setInputValue(value)
                window.location.href = `/search?q=${value}`
            } else if (inputValue) {
                window.location.href = `/search?q=${inputValue}`
            }
        }
        if (e.key === "ArrowUp") {
            if (currentActiveIndex > 0) {
                setCurrentActiveIndex(prev => prev - 1);
            }
        }
        if (e.key === "ArrowDown") {
            if (currentActiveIndex < filteredSearchData.length - 1) {
                setCurrentActiveIndex(prev => prev + 1);
            }
        }
    };



    useEffect(() => {
        setCurrentActiveIndex(-1)
    }, [openSearchSuggestion, setOpenSearchSuggestion])


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current !== event.target
            ) {
                setOpenSearchSuggestion(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);



    useEffect(() => {
        if (debouncedInputValue && me) {
            setOpenSearchSuggestion(true)
        } else {
            setOpenSearchSuggestion(false)
        }
    }, [debouncedInputValue])



    useEffect(() => {
        let dataExist = JSON.parse(window.localStorage.getItem("search-data")!);
        if (dataExist) {
            setSearchData(dataExist);
        } else {
            fetchSearchData();
        }
    }, []);

    useEffect(() => {
        updateDataInside();
    }, []);

    return { searchData, filteredSearchData, handleSelectSuggestion, handleSubmit, handleInputChange, inputValue, handleDelete, openSearchSuggestion, containerRef, inputRef, handleKeydown, currentActiveIndex };
};

export default useSearchbar;
