
import AddProductForm from '@/components/Add-Product-form'
import { Metadata } from 'next'
import React from 'react'
const metadata: Metadata = {
    title: "Add New Product | MYSHOPBD"
}
const AddProductPage = () => {
    return (
        <AddProductForm />
    )
}

export default AddProductPage