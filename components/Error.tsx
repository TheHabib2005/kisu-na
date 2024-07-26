"use client"
import React from 'react'

const Error = ({ message }: { message?: string }) => {
    const handleTryAgain = () => {
        window.location.reload()
    }
    return (
        <div className='w-fulll p-6 flex flex-col items-center justify-center gap-y-3'>
            <h1 className='text-xl font-semibold uppercase '>we are feching some {message || <span className='font-bold  text-blue-600'>netowrk</span>} problem...</h1>
            <button className='p-3 text-white bg-blue-600 outline-none capitalize rounded-md' onClick={handleTryAgain}>try again</button>
        </div>
    )
}

export default Error