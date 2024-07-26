import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className='lg:flex items-start mt-10   gap-5 animate-pulse bg-black w-full pb-5'>
            {/* Placeholder for ProductImages */}
            <div className='flex md:flex-row-reverse flex-col  gap-3  w-[50%]'>
                <div className='w-full h-[350px] bg-zinc-900 rounded-lg'></div>
                <div className='flex gap-4 flex-col'>
                    {Array(4).fill("").map((_, index) => (
                        <div key={index} className='bg-zinc-900 h-24 w-24 rounded-md'></div>
                    ))}
                </div>
            </div>
            <div className='md:ml-5  w-[50%]'>
                {/* Placeholder for title */}
                <div className='bg-zinc-900 h-10 rounded mb-4'></div>
                {/* Placeholder for rating and reviews */}
                <div className='flex items-center gap-3 mt-3'>
                    <div className='flex items-center gap-1'>
                        {Array(5).fill("").map((_, i) => (
                            <div key={i} className='bg-zinc-900 h-5 w-5 rounded'></div>
                        ))}
                    </div>
                    <div className='bg-zinc-900 h-5 w-20 rounded'></div>
                </div>
                {/* Placeholder for price */}
                <div className='mt-5 flex items-center gap-5'>
                    <div className='bg-zinc-900 h-8 w-24 rounded'></div>
                    <div className='bg-zinc-900 h-8 w-20 rounded'></div>
                </div>
                {/* Placeholder for discount */}
                <div className='flex items-center mt-3'>
                    <div className='bg-zinc-900 h-6 w-6 rounded'></div>
                    <div className='bg-zinc-900 h-5 w-40 rounded ml-3'></div>
                </div>
                {/* Placeholder for features */}
                <div className='mt-5'>
                    <div className='bg-zinc-900 h-8 w-32 rounded mb-4'></div>
                    <ul className='flex flex-col gap-3'>
                        {Array(4).fill("").map((_, i) => (
                            <li key={i} className='flex items-center gap-4'>
                                <div className='bg-zinc-900 h-4 w-4 rounded-full'></div>
                                <div className='bg-zinc-900 h-4 w-full rounded'></div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Placeholder for return policy */}
                <div className='mt-3 bg-zinc-900 h-5 w-48 rounded mb-4'></div>
                {/* Placeholder for buttons */}
                <div className='flex items-center mt-5 gap-3'>
                    <div className='bg-zinc-900 h-10 w-32 rounded'></div>
                    <div className='bg-zinc-900 h-10 w-32 rounded'></div>
                    <div className='bg-zinc-900 h-10 w-10 rounded'></div>
                </div>
                <ul className='flex  gap-3 mt-3'>
                    {Array(6).fill("").map((_, i) => (
                        <div className='bg-zinc-900 h-6 w-12 rounded' key={i}></div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Loading