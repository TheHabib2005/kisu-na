"use client"
import Link from "next/link";
import React, { useState } from "react";
import ProductActionPopup from "./productActionPopup";
import { delay } from "@/utils";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

const ProductItem = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLaoding] = useState(false);
    const router = useRouter();


    const handleDelete = async () => {
        try {
            setIsLaoding(true);
            await delay(2000);
            toast.success("Delete")
            // window.location.reload();
        } catch (error: any) {
            throw new Error(error.message)
        } finally {
            setIsLaoding(false);
            setIsMenuOpen(false);
        }
    }

    return (
        <div className="grid grid-cols-12 py-1 border-t border-neutral-800 items-center relative">
            {
                isLoading && <div className="w-full h-screen bg-black opacity-50 z-[10000] fixed top-0 left-0 flex items-center justify-center">
                    <ClipLoader size={25} color="#fff" />
                </div>
            }
            <ProductActionPopup isMenuOpen={isMenuOpen} ondelete={handleDelete} />
            <div className="col-span-6 text-center flex items-center gap-6">
                <div className="flex flex-col gap-y-1 p-3 cursor-pointer" onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                }}>
                    <span className="w-1 h-1 inline-flex rounded-full bg-white" onClick={() => {

                    }}></span>
                    <span className="w-1 h-1 inline-flex rounded-full bg-white"></span>
                    <span className="w-1 h-1 inline-flex rounded-full bg-white"></span>
                </div>
                <img
                    src="/air-jordan-4-retro-oxidized-green-big-kids-shoes-2bkqbW-removebg-preview (1).png"
                    className="w-[70px]"
                    alt=""
                />
                <span className="text-left font-semibold">
                    JavaScript Developer T-shirt - Black
                </span>
            </div>
            <div className="col-span-2  text-center">
                <span>350.00৳ </span>
            </div>
            <div className="col-span-2  text-center">Snickers</div>
            <div className="col-span-2  text-center">NIKE</div>
        </div>
    );
};

export default ProductItem;
