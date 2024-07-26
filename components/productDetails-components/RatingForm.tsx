import React from 'react'

const RatingForm = () => {
    return (
        <div className='md:w-1/2 md:px-4 w-full'>
            <div>
                <h3 className='text-zinc-700 dark:text-white font-semibold text-xl'>Write your review</h3>
                <p className='text-zinc-300 text-lg'>Your email address will not be published. Required fields are marked*</p>
            </div>


            <form className='flex flex-col gap-y-4 mt-10 w-full'>

                <div className='w-full'>
                    <label htmlFor="email" className='text-zinc-700 dark:text-white text-lg mb-3 inline-flex font-semibold'>Email *</label>
                    <input type="text" name='email' id='email' className='p-3 w-full outline-none  rounded-md' placeholder='Example@gmail.com' />
                </div>
                <div className='w-full mt-3'>
                    <label htmlFor="email" className='text-zinc-700 dark:text-white text-lg mb-3 inline-flex font-semibold'>Your Review *</label>

                    <textarea name='email' id='email' className='p-3 w-full h-[150px] outline-none  rounded-md' placeholder='This is Nice Product!' ></textarea>
                </div>
                <select name="rating-star" id="rating-star" className='p-3 rounded-md cursor-pointer outline-none'>
                    <option value="5">5 Star</option>
                    <option value="4">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                </select>

                <button className='w-full bg-blue-600 cursor-pointer text-white textlg- font-semibold p-3 rounded-md mt-3 '>Send Review</button>

            </form>
        </div>
    )
}

export default RatingForm