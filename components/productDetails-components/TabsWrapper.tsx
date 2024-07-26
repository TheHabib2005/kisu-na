"use client"
import React, { useState } from 'react'

import RatingForm from './RatingForm'
import ProductReviews from './ProductReviews'
import ProductDescription from './ProductDescription'
import { delay } from '@/utils'


const TabsWrapper = ({ reviews, description }: {
    reviews: any[], description: {
        text: string;
        features: string[];
    }
}) => {
    console.log("tab wrapper");

    const [currentActiveComponent, setCurrentActiveComponent] = useState("description");

    return (
        <section className='w-full py-8 '>
            <div className='flex  items-center gap-4 text-white mt-10 pb-5 border-b border-zinc-600'>
                <div className={`font-semibold ${currentActiveComponent === "description" && "bg-blue-600"} text-white p-2 rounded-md cursor-pointer`} onClick={() => setCurrentActiveComponent("description")}>Description</div>
                <div className={`font-semibold ${currentActiveComponent === "reviews" && "bg-blue-600"} text-white p-2 rounded-md cursor-pointer flex items-center`} onClick={() => setCurrentActiveComponent("reviews")}>Reviews <span className='w-5 h-5 flex items-center justify-center rounded-full ml-2 bg-gray-600 text-zinc-400'>{reviews.length}</span></div>
                <div>Support</div>
            </div>
            {currentActiveComponent === "description" ? <ProductDescription description={description} />
                : <ProductReviews reviews={reviews} />}


        </section>
    )
}

export default TabsWrapper