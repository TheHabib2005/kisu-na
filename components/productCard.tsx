"use client"
import { calculateDiscountedPrice, formatePrice } from '@/utils'
import { IoMdStar, IoMdStarHalf } from "react-icons/io"
import LazyImage from './LazyImage'

const ProductCard = ({ product, index }: {
    product: any
    index: number
}) => {
    let number = 1900;
    let formattedNumber = number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    console.log(formattedNumber); // Outputs: $1,900.00

    return (
        <>

            <div className="relative  flex  flex-col overflow-hidden rounded-lg  min-w-full  dark:bg-zinc-900/70 shadow-md mx-auto cursor-pointer col-span-1 hover:bg-zinc-800 hover:scale-105 hover:transition-transform duration-200 group p-2 h-min" onClick={() => {
                localStorage.setItem("product-details", JSON.stringify(product))
                window.open(`/products/smartphone/${index}`)
            }} >
                <div
                    className="relative  overflow-hidden  flex  rounded-xl cursor-pointer justify-center items-start    "
                >
                    <div className='w-full   overflow-hidden '>
                        <LazyImage src={product.thumbnail} />
                    </div>
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium  text-white">
                        {Math.round(product.discountPercentage)}% OFF
                    </span>
                </div>
                <div className="mt-4 px-5 ">
                    <a href="#">
                        <h5 className="text-xl tracking-tight  text-zinc-800 dark:text-white  group-hover:text-blue-600">
                            {product.title}
                            {product.title.length > 30 && <span className="ml-5  text-zinc-800 dark:text-white">{"..."}</span>}
                        </h5>
                    </a>
                    <div className="mt-2 mb-3">
                        <p>
                            <span className="text-2xl font-bold  text-zinc-800 dark:text-white ">
                                {formatePrice(2050)}

                            </span>
                            <span className="text-sm ml-2 text-zinc-800 dark:text-white  line-through">
                                {formatePrice(product.price)}
                            </span>
                        </p>
                        <div className="flex items-center">
                            {
                                Array(5).fill("").map((_, i) => {
                                    if (i < Math.round(5)) {
                                        return <IoMdStar color="yellow" fontSize={20} key={i} />
                                    } else {
                                        return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                                    }
                                })
                            }
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black">
                                {5}
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductCard