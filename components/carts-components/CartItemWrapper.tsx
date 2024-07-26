"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'
import CartItem from './CartItem'

const CartItemWrapper = () => {

    const { cart } = useCartStore()

    return (
        <>
            {
                cart.length > 0 ? cart.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                }) : <div>
                    <div className='text-white font-semibold'>
                        Your cart is empty
                    </div>
                </div>
            }
        </>
    )
}

export default CartItemWrapper