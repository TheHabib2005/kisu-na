import React, { FC, useState } from "react";
import InputFeild from "./InputFeild";
import toast from "react-hot-toast";
import useAddProductForm from "@/hooks/useAddProductForm";
interface Props {
    // keywords: string[];
    // setKeywords: React.Dispatch<React.SetStateAction<string[]>>
}
const KeywordInput: FC<Props> = () => {

    const { keywordInputError, setkeywordInputError, keywordInputValue, setkeywordInputValue, keywords, KeywordInputChange, KeywordInputBlur, KeywordInputKeydown, KeywordDelete } = useAddProductForm()

    console.log(keywordInputError);

    return (
        <div>
            <InputFeild
                title="Product Keyword"
                placeholder="Add keywords..."
                error={false}
                name="product_keyword"
                type="text"
                value={keywordInputValue}
                className=""
                wrapperClassName=""
                handleChange={KeywordInputChange}
                handleInputKeydown={KeywordInputKeydown}
                handleBlur={KeywordInputBlur}
            />

            {keywords.length > 0 && (
                <div className="flex items-center w-full gap-3 py-1 pb-5 flex-wrap">
                    {keywords.map((keyword, index) => {
                        return (
                            <div
                                key={index}
                                className="p-2 rounded-md bg-zinc-900 flex items-center gap-3"
                            >
                                <span className="capitalize font-medium">{keyword}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5  text-zinc-400 cursor-pointer"
                                    onClick={() => KeywordDelete(index)}
                                    aria-label="Clear input"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default KeywordInput;
