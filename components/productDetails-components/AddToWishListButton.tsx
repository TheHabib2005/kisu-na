//@ts-nocheck
"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React, { useState } from 'react'
import { ClipLoader, DotLoader, ClimbingBoxLoader, FadeLoader, ClockLoader } from 'react-spinners';
import Loader from '../Loader';
import { delay } from '@/utils';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa6';

const AddToWishlistButton = ({ product }: { product: any }) => {
    const { ProductaddToCart } = useCartStore();
    const [isLoading, setIsLoading] = useState(false)


    const saveDb = async () => {
        setIsLoading(true);
        ProductaddToCart(product);
        let data = await delay(3000);
        setIsLoading(false);
        toast.success("product added successfully")
    }



    return (
        <div>
            {
                isLoading && <Loader />
            }

            <button className=' text-white bg-zinc-900 p-4 text-xl  hover:bg-zinc-700 rounded-md' disabled={isLoading} onClick={saveDb}><FaRegHeart /></button>
        </div>
    )
}

export default AddToWishlistButton