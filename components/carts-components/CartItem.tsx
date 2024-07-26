"use client";
import { useCartStore } from '@/zustant-store/useCartStore';
import Link from 'next/link';
import React from 'react'
import ItemQuantity from './ItemQuantity';
import { formatePrice } from '@/utils';

const CartItem = ({ item }: { item: any }) => {


    const { removeFromCart } = useCartStore()

    return (
        <div className="grid grid-cols-12 py-3 border-t border-neutral-800 items-center">
            <div className="col-span-8 text-center flex items-center gap-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
                <div>
                    <img
                        src={item.thumbnail}
                        className="w-[70px]"
                        alt=""
                    />
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <Link href={"/"} className="text-left text-xl font-semibold text-zinc-400">
                        {item.title}


                    </Link>
                    <button onClick={() => removeFromCart(item.id)} className='text-bold text-blue-600 mt-1 text-lg opacity-70 hover:opacity-100'>Remove</button>
                </div>
            </div>
            <div className="col-span-2  text-center">
                <span className='text-lg font-semibold text-zinc-400'>
                    Tk {formatePrice(item.price)}.00 </span>
            </div>
            <div className="col-span-2  text-center">
                <ItemQuantity id={item.id} quantity={item.quantity} />
            </div>

        </div>
    )
}

export default CartItem