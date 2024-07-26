"use client";
import useOtpInput from "@/hooks/useOtp";
import { isArray } from "lodash";
import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ userVerificationCode }: { userVerificationCode: number }) => {



    const { otp, handleKeyDown, handleChange, updateUserVerifedStatus, loading, handleClick, correctOtp, inputRefs } = useOtpInput(userVerificationCode)

    return (
        <div className="p-3">
            <div
                className="grid gap-3 mb-5"
                style={{ gridTemplateColumns: `repeat(${otp.length},1fr)` }}
            >
                {otp.map((value, index) => {
                    return (
                        <input
                            type="text"
                            key={index}
                            ref={(input) => {
                                inputRefs.current[index] = input
                            }}
                            value={value}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className={`w-full bg-zinc-900 py-4 rounded-md text-white font-semibold text-2xl ${correctOtp === "none" && "focus:border border-zinc-500"
                                } outline-none text-center ${correctOtp === "success" && " border-2 border-green-500 "
                                } ${correctOtp === "error" && "border-2 border-red-500"}`}
                            onChange={(e) => handleChange(e, index)}
                            onClick={() => handleClick(index)}
                        />
                    );
                })}


            </div>
            {correctOtp === "success" && (
                <button className="w-full p-3 rounded-md cursor-pointer bg-blue-600" onClick={updateUserVerifedStatus}>
                    {loading ? "Loading..." : " Submit otp"}
                </button>
            )}

        </div>
    );
};

export default OtpInput;
