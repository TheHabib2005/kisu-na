"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = ({ images }: { images: { big: string; small: string }[] }) => {
    let [src, setSrc] = useState(images[0].big);

    return (
        <div className='flex md:flex-row-reverse flex-col   gap-3 xl:w-[40%] lg:w-[50%] md:w-[50%] w-full'>
            <div className='w-full h-auto'>
                <img src={src} className=' rounded-md' />
            </div>

            <div className='flex  gap-4 flex-col'>
                {
                    images.map((image, index) => {
                        return <Image
                            key={index}
                            src={image.small}
                            width={100}
                            height={145000}
                            alt="product-image"
                            className='cursor-pointer rounded-md'
                            onClick={() => {
                                setSrc(image.big)
                            }}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default ProductImages