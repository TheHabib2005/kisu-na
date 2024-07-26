import { useCartStore } from '@/zustant-store/useCartStore'
import Link from 'next/link'
import React from 'react'

const CheckoutOrderDetails = () => {
    const { cart, totalAmount } = useCartStore()
    return (
        <div className="col-span-3  border-l border-zinc-700 lg:pt-5 pt-10 px-5 max-w-full">
            <h1 className="text-2xl my-5 text-white font-semibold  text-center">
                Your Orders
            </h1>
            {
                cart.length > 0 && cart.map((prod: any) => {
                    return <Link href={""} key={prod.id} className="flex  mt-6 items-center w-full gap-3">
                        <div className="bg-zinc-800 p-1  relative rounded-md">
                            <span className="absolute -top-2 -right-2 z-10 text-white bg-zinc-600  flex items-center justify-center w-5 h-5 rounded-full text-sm ">
                                {prod.quantity}
                            </span>
                            <img
                                src={prod.thumbnail}
                                className="w-[80px] "
                                alt=""
                            />
                        </div>
                        <div className="flex items-center    w-full justify-between ">
                            <h1 className="text-lg  text-zinc-400 font-semibold">
                                {prod.title}
                            </h1>

                            <span className="text-lg font-semibold text-zinc-400"> ${prod.price}</span>
                        </div>
                    </Link>
                })
            }
            {cart.length > 0 && <div className="flex flex-col gap-y-3 mt-8">
                <div className="flex items-center justify-between text-zinc-300 font-semibold">

                    <span>Subtotal</span>
                    <span> ${totalAmount}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 font-semibold">

                    <span>Shipping</span>
                    <span> $9.00</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 font-bold">

                    <span className="text-xl">Total</span>
                    <span className="text-xl"> ${totalAmount + 9}</span>
                </div>
            </div>}
        </div>
    )
}

export default CheckoutOrderDetails