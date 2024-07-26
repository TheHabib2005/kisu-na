import React from 'react'
import ProductCardSkeleton from './ProductCardSkelection';

const ProductsSkelection = () => {
    return (
        <div className="grid  h-screen overflow-hidden xl:gap-6 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3">
            {Array(10)
                .fill("")
                .map((prod, index) => {
                    return <ProductCardSkeleton key={index} />;
                })}
        </div>
    )
}

export default ProductsSkelection