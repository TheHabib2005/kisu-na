"use client";
import { signinFormValidateSchema, signupFormValidateSchema } from "@/helpers/yup-Schema";
import { delay } from "@/utils";
import { useGoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import InputFeild from "./InputFeild";

interface UserDataTypes {
    email: string;
    password: string;
}
const SignInForm = () => {
    const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState("")
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const handleSignIn = async (user: UserDataTypes) => {
        setError({ error: false, message: "" });
        try {
            setLoading(true);
            let response = await fetch(
                "http://localhost:8000/user/sign-in",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                    credentials: "include"
                }
            );
            let data = await response.json();

            if (!response.ok) {
                toast.error(data.message);
                setError({ error: true, message: data.message });
                return;
            }

            if (data.success) {
                toast.success(data.message);
                await delay(1000);
                window.location.href = "/"
            }
        } catch (error) {
            setError({ error: true, message: "something was wrong" });
            toast.error("something was wrong!");
        } finally {
            setLoading(false);
        }
    };

    const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
        useFormik({
            initialValues: {
                username: "",
                email: "",
                password: "",
            } as UserDataTypes,
            validationSchema: signinFormValidateSchema,
            onSubmit: async (values) => {
                if (navigator.onLine) {
                    handleSignIn(values);
                } else {
                    setLoading(true);
                    await delay(3000);
                    setLoading(false);
                    toast.error("please conncet to the internet");
                }
            },
        });

    const isButtonDisable = errors.password ? true
        : false || errors.email
            ? true
            : false;

    return (
        <main className="h-screen relative  text-white  flex justify-center items-center overflow-hidden">
            <div className=" flex justify-center flex-1">
                <div>
                    <div className="mt-6 flex flex-col items-center sm:w-full">
                        <Link href={"/"}>
                            <Image
                                width={250}
                                height={100000}
                                alt="myshopbd-logo"
                                src={"/myshopbd-light.png"}
                                className="select-none"
                            />
                        </Link>
                        <h1 className="text-2xl xl:text-3xl font-bold">SIGN-IN</h1>

                        <div className="w-full flex-1 mt-5">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-zinc-900 text-zinc-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                    onClick={() => { }}
                                >
                                    <div className="bg-zinc-800 p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">Sign Up with Google</span>
                                </button>
                            </div>
                            {error.error && (
                                <span className="flex  w-full p-3 items-center text-center text-lg text-red-500 font-semibold justify-center">
                                    {error.message}
                                </span>
                            )}
                            <div className="my-5 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-zinc-400 tracking-wide font-medium bg-black transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>
                            <form className="mx-auto max-w-xs" onSubmit={handleSubmit} >

                                <InputFeild
                                    error={errors.email && touched.email && errors.email}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    name="email"
                                    type="text"
                                    placeholder="example@gmail.com..."
                                    title=""
                                    value={values.email}
                                    className="p-4 bg-zinc-900/50 rounded-md font-semibold outline-none placeholder:capitalize"
                                    wrapperClassName="flex flex-col mb-4 gap-y-2"
                                />{" "}
                                <InputFeild
                                    error={errors.password && touched.password && errors.password}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                    title=""
                                    value={values.password}
                                    wrapperClassName="flex flex-col mb-4 gap-y-2  "
                                    className="p-4 bg-zinc-900/50 rounded-md font-semibold outline-none placeholder:capitalize"
                                />
                                <Link href={""}>Reset Password</Link>

                                <button
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-zinc-900"
                                    disabled={isButtonDisable}
                                >
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        {loading ? "Loading..." : "Sign Up"}
                                    </span>
                                </button>
                                <p className="mt-6 text-sm text-zinc-300 text-center font-semibold">
                                    I agree to abide by templatana &apos; s
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted ml-1 mr-1"
                                    >
                                        Terms of Service
                                    </a>
                                    and its
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted ml-1"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                                <p className="mt-6 text-lg text-zinc-300 text-center">
                                    Create a New Account{" "}
                                    <Link className="text-blue-600" href={"/sign-up"}>
                                        Create Account
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {loading && (
                <div className="w-full h-screen absolute top-0 left-0 z-50 bg-black/50 flex items-center justify-center">
                    <ClipLoader color="#fff" />
                </div>
            )}
        </main>
    );
};

export default SignInForm;
