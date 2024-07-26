
import BrandLists from '@/components/BrandLists';
import BreadGrum from '@/components/BreadGrum';
import Pagination from '@/components/Pagination';
import PriceRange from '@/components/PriceRange';

import RenderProductList from '@/components/RanderProductList';
import RatingStar from '@/components/RatingStar';
import ResetFilter from '@/components/ResetFilter';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
const Products = dynamic(() => import('@/components/RanderProductList'), { ssr: true });
export const metadata: Metadata = {
    title: ` | MYSHOPBD`
}
export default function GetProductByCategory({ params }: { params: any }) {


    return (
        <section className=' w-full h-full'>
            <BreadGrum category={params.category} />
            <div className='flex items-start gap-4    overflow-x-hidden font-semibold mt-3' >
                <div className=' 2xl:w-[25%] md:w-[30%] lg:block hidden bg-black rounded-md pt-4'>
                    <header className='flex items-center justify-between '>
                        <h1 className='text-zinc-800 dark:text-white font-semibold'>Filters</h1>
                        <ResetFilter />
                    </header>
                    <BrandLists />
                    <RatingStar />
                    <PriceRange />
                </div>
                <div className=' 2xl:w-[75%]  w-full  bg-black  rounded-md pb-5 '>
                    <Products />
                </div>
            </div>
        </section>
    );
}
