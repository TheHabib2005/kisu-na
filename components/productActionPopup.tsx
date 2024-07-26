"use client"
import React, { FC } from 'react'


interface Props {
    isMenuOpen: boolean;
    ondelete: () => void;
}

const ProductActionPopup: FC<Props> = ({ isMenuOpen, ondelete }) => {
    return (
        <div className={`w-[200px]  ${isMenuOpen ? "flex flex-col" : "hidden"} gap-y-2 p-2  bg-zinc-950 absolute top-[80%] left-2 z-50 rounded-md`}>
            <button className="p-2 bg-zinc-900  w-full rounded-md">Move Product</button>
            <button className="p-2 bg-zinc-900  w-full rounded-md" onClick={ondelete}>Delete Product</button>
        </div>
    )
}

export default ProductActionPopup