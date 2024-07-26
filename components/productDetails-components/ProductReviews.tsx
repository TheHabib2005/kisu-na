
import React from 'react'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import RatingForm from './RatingForm'

const ProductReviews = ({ reviews }: { reviews: any[] }) => {
    return (
        <div className=' md:p-5 py-5 px-0 w-full flex  md:flex-row flex-col gap-4'>
            <div className='md:w-1/2 w-full'>
                {
                    reviews.length > 0 ? reviews.map((review: any, index: number) => {
                        return <div key={index} className=' flex items-start  mt-5'>
                            <div className='w-[70px]'><img src={"/reviewer-default-avater-imge.png"} alt="" className='w-[50px] object-contain' /></div>
                            <div className='flex flex-col gap-3 text-white'>
                                <div className='text-yellow-500 flex items-center text-xl'>
                                    {
                                        Array(5).fill("").map((_, i) => {
                                            if (i < Math.round(review.rating)) {
                                                return <IoMdStar color="yellow" fontSize={20} key={i} />
                                            } else {
                                                return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                                            }
                                        })
                                    }
                                </div>
                                <p>{review.comment}</p>
                                <b>{review.reviewerName}</b>
                                <span className='text-gray-400'>{review.reviewerEmail}</span>
                                <span className='text-gray-400'>March 14, 2021</span>
                            </div>
                        </div>

                    }) : <div className='text-white font-semibold text-xl'> 🤢 NO REVIEW FOUND</div>
                }
            </div>

            <RatingForm />
        </div>

    )
}

export default ProductReviews