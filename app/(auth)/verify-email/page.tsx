import OtpInput from '@/components/OtpInput'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "VERIFY-EMAIL   |  MYSHOPBD"
}
const VerifyEmail = async ({ searchParams }: { searchParams: any }) => {

    let user_id = searchParams.user_id

    console.log(user_id);

    const getUserVerificationCode = async () => {
        const response = await fetch(`${process.env.BASE_API_URL}/user/get-verification-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id })
        });
        if (!response.ok) {
            return {
                success: false,
                message: 'Something went wrong'
            }
        }

        let data = await response.json();
        return {
            success: true,
            verificationCode: data.verificationCode
        };
    };

    let result = await getUserVerificationCode();

    if (!result.success) {
        console.log(result.message);
        return <div>Error: {result.message}</div>
    };

    console.log(result);


    return (
        <div className='w-full max-h-screen flex items-center justify-center overflow-hidden'>
            <div className='w-[450px] p-6 bg-zinc-900/50  font-semibold rounded-md shadow-md my-20'>
                <h1 className='text-center text-xl '>VERIFY YOUR EMAIL</h1>
                <p className='text-center text-md  text-zinc-300 mt-3'>Please Enter a Verfication Code we Sent Your Eamil</p>
                <OtpInput userVerificationCode={result.verificationCode} />
            </div>
        </div>
    )
}

export default VerifyEmail