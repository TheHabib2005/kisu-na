import useHighLightText from "@/hooks/useHighLightText";
import useSearchbar from "@/hooks/useSearchbar";
import { Product } from "@/utils/interfaces";

import React, { FC } from "react";

interface Iprops {
    list: any[];
    containerRef?: React.RefObject<HTMLDivElement>;
    inputValue?: string;
    handleSelectSuggestion: (item: string) => void;
    currentActiveIndex: number;
}
const SearchSuggestionList: FC<Iprops> = ({
    currentActiveIndex,
    list,
    containerRef,
    inputValue,
    handleSelectSuggestion,
}) => {
    {
    }

    const { getHighlightedText } = useHighLightText()

    return (
        <div
            className="absolute w-full  bg-zinc-950 z-10 top-[100%] left-0 mt-2 p-2 rounded-lg"
            ref={containerRef}
        >
            {list.slice(0, 10).map((item: Product, index) => {
                return (
                    <div
                        className={`flex items-center mt-2 gap-2  transition-all duration-100 ease-linear p-2 cursor-pointer rounded-md ${currentActiveIndex === index
                            ? "bg-zinc-900 "
                            : "hover:bg-[#2b2b2b]"
                            }`}
                        key={index + Math.random() * 100}
                        onClick={() => {
                            handleSelectSuggestion(item.title);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-5 ${currentActiveIndex === index ? "text-white" : "text-zinc-500"
                                }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>

                        {getHighlightedText(item.title, inputValue || "")}
                    </div>
                );
            })}
        </div>
    );
};

export default SearchSuggestionList;
