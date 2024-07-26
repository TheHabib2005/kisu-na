
import { calculateDiscountedPrice, delay, formatePrice } from '@/utils';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { MdOutlineDiscount, MdOutlineShare } from 'react-icons/md';
import { productData } from '@/data';
import AddTocartButton from './AddTocartButton';
import ProductTags from './ProductTags';
import TabsWrapper from './TabsWrapper';
import Image from 'next/image';
import ProductImages from './ProductImages';
import AddToWishlistButton from './AddToWishListButton';

const ProductDeatails = async ({ product }: { product: any }) => {
    // let product = { ...productData[id], quantity: 1 }
    // let data = await delay(100);
    let price = formatePrice(product.price);
    let discountPrice = parseInt(calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2));
    return (
        <>
            <div className='lg:flex items-start mt-10  w-full  gap-5'>
                <ProductImages images={product.images} />
                <div className='   md:ml-5 w-[50%]'>
                    <h1 className='text-zinc-800 dark:text-white text-3xl font-bold'>{product.title}</h1>
                    <div className='flex items-center gap-3 mt-3'>
                        <div className='text-yellow-500 flex items-center text-xl'>
                            {
                                Array(5).fill("").map((_, i) => {
                                    if (i < Math.round(product.rating)) {
                                        return <IoMdStar color="yellow" fontSize={20} key={i} />
                                    } else {
                                        return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                                    }
                                })
                            }
                        </div>
                        <span className='text-zinc-800 dark:text-white'>{product.reviews.length} Reviews</span>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <span className='text-zinc-800 dark:text-white text-2xl'>Tk {formatePrice(discountPrice)}.00</span>
                        <span className='text-xl line-through text-gray-400'>Tk  {price}.00</span>

                    </div>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDiscount className='text-gray-400' />

                        <span className='text-gray-400 ml-3'>Save {product.discountPercentage}% right now</span>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-zinc-800 dark:text-white font-semibold text-lg'>
                            Features
                        </h3>
                        <ol className='flex flex-col gap-3 text-gray-300 mt-3'>
                            {
                                product.features.map((feature: any, i: number) => (
                                    <li className='flex items-center gap-4' key={i}><span className='p-1 h-1 bg-gray-300 rounded-full'></span>  {feature}</li>
                                ))
                            }

                        </ol>

                        <span className='mt-3 inline-flex font-semibold capitalize'>{product.returnPolicy}</span>
                    </div>

                    <div className='flex items-center mt-5 gap-3'>
                        <AddTocartButton product={product} />
                        <AddToWishlistButton product={product} />
                        <button className=' text-white bg-zinc-900 p-4 text-xl  hover:bg-zinc-700 rounded-md'><MdOutlineShare /></button>
                    </div>
                    <ProductTags tags={product.tags} />
                </div>

            </div>
            {/* / */}


            <TabsWrapper reviews={product.reviews} description={{
                text: product.description,
                features: product.features
            }} />

        </>
    )
}

export default ProductDeatails