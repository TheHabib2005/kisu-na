import React, { FC } from 'react'
interface Props {
    isDisabled: boolean
    handleOrders: (index: number) => void;
    activeRevirsing: () => void
    index: number
    orders: number[]
}
const Cell: FC<Props> = ({ isDisabled, handleOrders, activeRevirsing, index, orders }) => {

    let color = `#${Math.random().toString(16).substring(2, 8)}`

    return (
        <button style={{ backgroundColor: orders.includes(index) ? color : 'transparent' }} disabled={isDisabled} className={`text-white border ${orders.includes(index) ? ' border-transparent' : "border-zinc-800 "} rounder-sm h-[100px] cursor-pointer `} onClick={() => {
            handleOrders(index)
            activeRevirsing()
        }}>
            {/* <span className='' style={{ backgroundColor: color }}>fdgfdg</span> */}
        </button>
    )
}

export default Cell