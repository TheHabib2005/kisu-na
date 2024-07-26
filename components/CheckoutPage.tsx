"use client"
import { Product } from "@/utils/interfaces";
import { useCartStore } from "@/zustant-store/useCartStore";
import Link from "next/link";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrderDetails from "@/components/CheckoutOrder-details";


const CheckoutPageComponenet = () => {
    const { cart, totalAmount } = useCartStore()
    return (
        <div className="font-[sans-serif] bg-black  ">
            {
                cart.length > 0 ? <div className="w-full   lg:grid  flex flex-col-reverse lg:grid-cols-7  ">
                    <CheckoutForm />
                    <CheckoutOrderDetails />
                </div> : <div className="text-xl text-white font-bold text-center p-6">
                    <h1>No Product Found 😊</h1>
                    <p className="font-semibold text-zinc-500 capitalize mt-3 text-sm">please frist choose a Product then checkout </p>
                </div>
            }
        </div>
    );
};

export default CheckoutPageComponenet;
