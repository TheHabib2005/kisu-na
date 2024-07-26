"use client"
import CheckoutPageComponenet from "@/components/CheckoutPage";
import { Product } from "@/utils/interfaces";
import { useCartStore } from "@/zustant-store/useCartStore";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
    return <CheckoutPageComponenet />
};

export default CheckoutPage;
