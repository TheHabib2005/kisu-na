
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'

const ItemQuantity = ({ quantity, id }: { quantity: number, id: number }) => {
    const { incrementQuantity, decrementQuantity } = useCartStore()
    return (
        <div className="w-full flex items-center justify-center gap-2">
            <button className="w-9 h-9  rounded-md bg-zinc-900 flex items-center justify-center" disabled={quantity > 1 ? false : true} onClick={() => decrementQuantity(id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4 w-4 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                    />
                </svg>
            </button>
            <span className="text-xl text-zinc-400">{quantity}</span>
            <button className="w-9 h-9  rounded-md bg-zinc-900  flex items-center justify-center" onClick={() => incrementQuantity(id)}>
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4 w-4 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
            </button>
        </div>
    )
}

export default ItemQuantity