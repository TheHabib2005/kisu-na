"use client"

import { delay } from '@/utils';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const LogoutButton = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const handleLogin = async () => {
        setError({ error: false, message: "" });

        try {
            setLoading(true);
            let response = await fetch("http://localhost:8000/user/logout", {
                credentials: "include"
            });
            let data = await response.json();

            if (!response.ok) {
                toast.error(data.message);
                setError({ error: true, message: data.message });
                return;
            }




            if (data.success === true) {
                toast.success(data.message);
                await delay(1000);
                window.location.href = "/login";
            }
        } catch (error) {
            // setError({ error: true, message: "something was wroing ! " });
            toast.error("something was wrong ! ");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-3 bg-blue-600 text-white  w-[100px] mt-5 rounded-md cursor-pointer' onClick={handleLogin}>{loading ? "Loading..." : "Logout"}</div>
    )
}

export default LogoutButton