import React from 'react'

const useHighLightText = () => {
    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));

        return (
            <span>
                {parts.map((part, index) => {
                    return part.toLowerCase() === highlight.toLowerCase() ? (
                        <span className="font-bold text-blue-600" key={index}>
                            {part}
                        </span>
                    ) : (
                        <span className=" text-md  text-white ">{part}</span>
                    );
                })}
            </span>
        );
    };
    return { getHighlightedText }
}

export default useHighLightText