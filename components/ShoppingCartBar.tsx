"use client";

import { Product } from "@/utils/interfaces";
import { useGlobalTempState } from "@/zustant-store/globalTemporyStore";
import { useCartStore } from "@/zustant-store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Loader from "./Loader";
import { formatePrice } from "@/utils";
const CartBar: FC = () => {
    const { isCartBarOpen, setIsCartBarOpen } = useGlobalTempState();
    const {
        cart,
        totalAmount,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
    } = useCartStore();
    return (
        <div
            className={`w-[100%]  h-screen flex justify-between   fixed top-0 ${isCartBarOpen ? " right-0" : "right-[-100%]"
                }  z-10 transition-all duration-100 `}
        >
            <div
                className="w-full bg-black/70 h-screen md:block hidden"
                onClick={() => {
                    setIsCartBarOpen(false);
                }}
            ></div>

            <div
                className="flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[600px] dark:border-neutral-700 dark:bg-black/100 dark:text-white"
                id="headlessui-dialog-panel-:r3:"
                data-headlessui-state="open"
            >
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">My Cart</p>
                    <button aria-label="Close cart">
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="h-6 transition-all ease-in-out hover:scale-110 "
                                onClick={() => {
                                    setIsCartBarOpen(false);
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                    <ul className="flex-grow overflow-auto py-4">
                        {cart.length > 0 ? (
                            cart.map((product: any) => {
                                console.log(product);

                                return (
                                    <li
                                        className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                                        key={product.id}
                                    >
                                        <div className="relative flex w-full flex-row justify-between px-1 py-4">
                                            <div className="absolute z-40 -mt-2 ml-[55px]">
                                                <div>
                                                    <button
                                                        type="submit"
                                                        aria-label="Remove cart item"
                                                        aria-disabled="false"
                                                        className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
                                                        onClick={() => removeFromCart(product.id)}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                            data-slot="icon"
                                                            className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18 18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <p
                                                        aria-live="polite"
                                                        className="sr-only"
                                                        role="status"
                                                    />
                                                    {/* <Loader /> */}
                                                </div>
                                            </div>
                                            <Link
                                                className="z-30 flex flex-row space-x-4"
                                                href={`/products/${product.category}/${product.id}`}
                                            >
                                                <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                                    <Image
                                                        alt="Acme Circles T-Shirt"
                                                        width={64}
                                                        height={64}
                                                        className="h-full w-full object-cover"
                                                        src={product.thumbnail}
                                                    />
                                                </div>
                                                <div className="flex flex-1 flex-col text-base">
                                                    <span className="leading-tight">{product.title}</span>
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                        Brand:{product.brand}
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className="flex h-16 flex-col justify-between">
                                                <p className="flex justify-end space-y-2 text-right text-md">
                                                    Tk {formatePrice(product.price)}.00

                                                </p>
                                                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                                    <div>
                                                        <button
                                                            aria-label="Reduce item quantity"
                                                            aria-disabled="false"
                                                            className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                                                            disabled={product.quantity > 1 ? false : true}
                                                            onClick={() => decrementQuantity(product._id)}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                aria-hidden="true"
                                                                data-slot="icon"
                                                                className="h-4 w-4 dark:text-neutral-500"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M5 12h14"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <p
                                                            aria-live="polite"
                                                            className="sr-only"
                                                            role="status"
                                                        />
                                                    </div>
                                                    <p className="w-6 text-center">
                                                        <span className="w-full text-sm">
                                                            {product.quantity}
                                                        </span>
                                                    </p>
                                                    <div>
                                                        <button
                                                            onClick={() => incrementQuantity(product._id)}
                                                            className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                aria-hidden="true"
                                                                data-slot="icon"
                                                                className="h-4 w-4 dark:text-neutral-500"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <p
                                                            aria-live="polite"
                                                            className="sr-only"
                                                            role="status"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                    className="h-16"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    ></path>
                                </svg>
                                <p className="mt-6 text-center text-2xl font-bold">
                                    Your cart is empty.
                                </p>
                            </div>
                        )}
                    </ul>
                    {cart.length > 0 && (
                        <>
                            <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700"></div>

                                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                                    <p>Total</p>
                                    <p className="text-right text-base text-black dark:text-white">

                                        Tk {formatePrice(totalAmount)}.00 <span className="ml-1 inline">BDT</span>
                                    </p>
                                </div>
                            </div>
                            <Link
                                href={`/checkout`}
                                className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                            >
                                Proceed to Checkout
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartBar;
