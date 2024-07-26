import SignupForm from '@/components/SignupForm'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "SIGN-UP  | MYSHOPBD"
}
const SignUp = () => {
    return (
        <SignupForm />
    )
}

export default SignUp