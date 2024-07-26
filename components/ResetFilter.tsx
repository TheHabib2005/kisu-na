"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const ResetFilter = () => {
    const path = usePathname();
    const router = useRouter();

    return (
        <button className='text-sm text-zinc-800 dark:text-zinc-500 hover:text-neutral-200 ' onClick={() => {
            router.push(`${path}`)
            setTimeout(() => {
                window.location.reload()
            }, 200)
        }}>CLEAR ALL</button>
    )
}

export default React.memo(ResetFilter)