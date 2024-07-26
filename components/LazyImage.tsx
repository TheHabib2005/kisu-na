"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";

const LazyImage = ({
    src,
    className,
}: {
    src: string;
    className?: string;
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [show, setshow] = useState(false);
    let color = `#${Math.random().toString(16).substring(2, 8)}`;



    return (
        <div ref={ref} className="">
            {inView &&
                (show ? (
                    <img
                        src={src}
                        alt="product.title"
                        className=" rounded-md w-full  h-auto"
                    />
                ) : (
                    <div
                        className="w-full h-[300px]"
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            {inView && (
                <img
                    src={src}
                    className=" w-full h-[300px]"
                    onLoad={() => {
                        setshow(true);
                    }}
                    alt="product.title"
                    hidden
                />
            )}
        </div>
    );
};

export default LazyImage;
