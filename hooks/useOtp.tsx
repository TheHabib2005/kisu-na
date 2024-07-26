import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const useOtpInput = (verificationCode: number) => {
    const [otp, setOtp] = useState(Array(5).fill(""));
    const inputRefs = useRef<HTMLInputElement[] | any[]>([]);
    const [loading, setLoading] = useState(false)
    const [correctOtp, setCorrectOtp] = useState<"success" | "error" | "none">(
        "none"
    );
    // const verifictionCode = 12345;
    const [verifictionCode, setVerifictionCode] = useState(verificationCode);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        let value: any = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        // verify otp
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === otp.length) {
            let userOtp = parseInt(combinedOtp);
            if (userOtp == verifictionCode) {
                setCorrectOtp("success");
            } else {
                setCorrectOtp("error");
            }
            inputRefs.current[index].blur();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    };

    const handleClick = (index: number) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    const updateUserVerifedStatus = async () => {
        // Update user verification status here using your preferred method
        setLoading(true)
        const response = await fetch(
            'http://localhost:8000/user/user-verification',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    verificationCode,
                }),
            }
        );

        if (!response.ok) {
            // Handle error case
            toast.error("Failed to update user verification status");
            setLoading(false)
            return;
        }
        setLoading(false)

        const data = await response.json();
        if (data.success) {
            toast.success("User verification Complete successfully");
            window.location.href = "/login"
        } else {
            toast.error("Failed to update user verification status");
        }



    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
    return {
        otp,
        handleKeyDown,
        handleChange,
        handleClick,
        correctOtp,
        inputRefs,
        loading,
        updateUserVerifedStatus
    };
};

export default useOtpInput;
