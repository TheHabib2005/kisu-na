"use client"
import { calculateDiscountedPrice } from '@/utils';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { MdOutlineDiscount, MdOutlineShare } from 'react-icons/md';
import { productData } from '@/data';
import AddTocartButton from './AddTocartButton';
import ProductTags from './ProductTags';
import TabsWrapper from './TabsWrapper';
import Image from 'next/image';

const ProductInfo = () => {
    const { product_name, product_price } = JSON.parse(localStorage.getItem('product-details')!);
    return (
        <div className='   md:pt-0 pt-10 md:w-[55%]'>
            <h1 className='text-zinc-800 dark:text-white text-3xl font-bold'>{product_name}</h1>
            <div className='flex items-center gap-3 mt-3'>
                <div className='text-yellow-500 flex items-center text-xl'>
                    {
                        Array(5).fill("").map((_, i) => {
                            if (i < Math.round(4.3)) {
                                return <IoMdStar color="yellow" fontSize={20} key={i} />
                            } else {
                                return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                            }
                        })
                    }
                </div>
                <span className='text-zinc-800 dark:text-white'>{10} Reviews</span>
            </div>
            <div className='mt-5 flex items-center gap-5'>
                <span className='text-zinc-800 dark:text-white text-3xl'>${calculateDiscountedPrice(product_price, 20).toFixed(2)}</span>
                <span className='text-2xl line-through text-gray-400'>${product_price}</span>

            </div>
            <div className='flex items-center mt-3'>
                <MdOutlineDiscount className='text-gray-400' />

                <span className='text-gray-400 ml-3'>Save {20}% right now</span>
            </div>
            <div className='mt-5'>
                <h3 className='text-zinc-800 dark:text-white font-semibold text-lg'>
                    Features
                </h3>
                <ol className='flex flex-col gap-3 text-gray-300 mt-3'>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span>  Made with full cotton</li>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Slim fit for any body</li>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Quality control by JC</li>
                </ol>
            </div>

            <div className='flex items-center mt-5 gap-3'>
                <AddTocartButton product={[]} />
                <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><FaRegHeart /></button>
                <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><MdOutlineShare /></button>
            </div>
            <ProductTags tags={["iphone 15", "apple", "ios 15", "iphone 15 pro max", "iphone 256GB"]} />
        </div>
    )
}

export default ProductInfo