"use client";
// components/MyComponent.server.jsx
import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import ProductCardSkeleton from "./ProductCardSkelection";
import ProductCard from "./productCard";
import Pagination from "./Pagination";
import { productData } from "@/data";
import ProductNotFound from "./Product-not-found";
import Error from "./Error";
import ProductsSkelection from "./ProductsSkelection";
import Loader from "./Loader";
import useFetchProduct from "@/hooks/useFetchProduct";

export default function RenderProductList() {

    const { isLoading, isFetching, products, isError, error } = useFetchProduct()



    if (isFetching) {
        return <ProductsSkelection />;
    }

    if (error) {
        return <Error />;
    }
    if (products.length <= 0 && !isFetching) {
        return <ProductNotFound />;
    }

    return (
        <div>
            <div className="grid grid-flow-row xl:gap-6 gap-4 grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-4 pt-3   pb-5   ">
                {products.map((product, index) => {
                    return <ProductCard product={product} index={product._id} key={index} />;
                })}
            </div>
            <div className="my-10">
                {!isFetching && <Pagination paginationItems={20} />}
            </div>
        </div>
    );
}
