"use client";
import { it } from "node:test";
import React, { useState } from "react";

const RatingStar = () => {
    const [ratingStarData, setRatingStarData] = useState([
        {
            id: Math.round(Math.random() * 20),
            isChecked: false,
            value: 5,
        },
        {
            id: Math.round(Math.random() * 20),
            isChecked: false,
            value: 4,
        },
        {
            id: Math.round(Math.random() * 20),
            isChecked: false,
            value: 3,
        },
    ]);
    return (
        <div className="mt-5  border-t  border-neutral-700  pt-3 select-none">
            <div className="flex items-center justify-between cursor-pointer">
                <h1 className="text-zinc-800 dark:text-white">Product Rating</h1>
            </div>
            {
                <ul className="flex flex-col gap-y-3 my-3 px-2">
                    {/* rendering a brands list */}
                    {ratingStarData.map((item) => {
                        return (
                            <label
                                htmlFor={item.value.toString()}
                                key={item.id}
                                className="flex items-center gap-x-4 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={item.isChecked}

                                    id={item.value.toString()}
                                />
                                <span className="capitalize flex items-center">{

                                    Array(item.value).fill("").map(star => {
                                        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-yellow-500" key={item.value}>
                                            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                                        </svg>

                                    })

                                }</span>
                            </label>
                        );
                    })}
                </ul>
            }
        </div>
    );
};

export default React.memo(RatingStar);
