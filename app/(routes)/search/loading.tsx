import ProductsSkelection from '@/components/ProductsSkelection'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const loading = () => {
    return (
        <div className='py-6'>
            <h1 className='animate-pulse w-[500px] h-10 rounded-md bg-zinc-900'></h1>
            <ProductsSkelection />
        </div>
    )
}

export default loading