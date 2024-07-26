import React from 'react'

const ProductDescription = ({ description }: {
    description: {
        text: string;
        features: string[];
    }
}) => {
    return (
        <div className='p-5'>

            <p className='text-md font-semibold text-zinc-300 line-clamp-[28px]'>{description.text}  </p>

            <div className='mt-5'>
                <h3 className='text-zinc-800 dark:text-white font-semibold text-lg'>
                    Features
                </h3>
                <ol className='flex flex-col gap-3 text-gray-300 mt-3'>
                    {
                        description.features.map((feature, i) => (
                            <li className='flex items-center gap-4' key={i}><span className='p-1 h-1 bg-gray-300 rounded-full'></span>  {feature}</li>
                        ))
                    }

                </ol>
            </div>

        </div>
    )
}

export default ProductDescription