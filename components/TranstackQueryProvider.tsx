"use client"
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { ReactNode } from 'react'

const TranstackQueryProvider = ({ children }: { children: ReactNode }) => {

    const client = new QueryClient()

    return (
        <QueryClientProvider client={client} >{children}</QueryClientProvider>
    )
}

export default TranstackQueryProvider