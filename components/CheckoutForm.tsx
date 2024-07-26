import React from 'react'

const CheckoutForm = () => {
    return (
        <div className="col-span-4  p-6 max-w-full ">
            <h1 className="text-2xl my-5 text-white font-semibold  text-center">
                Checkout Form
            </h1>
            <div>
                <h1 className="text-xl text-white font-semibold font-sans">
                    Contact
                </h1>
                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Email or mobile phone number
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                    />
                </div>
            </div>
            <form className="mt-8">
                <h1 className="text-xl text-white font-semibold font-sans">
                    Shipping address
                </h1>
                <div className="relative mt-4 flex flex-col">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Country or Religin
                    </span>
                    <select
                        name="country"
                        className="w-full p-3 bg-black outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-zinc-400 "
                    >
                        <option value="">bangladesh</option>
                        <option value="">bangladesh</option>{" "}
                        <option value="">bangladesh</option>{" "}
                        <option value="">bangladesh</option>{" "}
                        <option value="">bangladesh</option>
                    </select>
                </div>
                <div className="relative mt-4 flex flex-col">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        City or state
                    </span>
                    <select
                        name="country"
                        className="w-full p-3 bg-black outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-zinc-400 capitalize"
                    >
                        <option value="">dhaka</option>
                        <option value="">noakhali</option>{" "}
                        <option value="">rajshai</option>{" "}
                        <option value="">cummila</option>
                    </select>
                </div>
                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Enter your username
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                    />
                </div>
                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Address
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                    />
                </div>

                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Payment Method
                    </span>

                    <div className="flex items-center gap-x-2 ">
                        <input type="radio" checked={true} name="" id="cod" />
                        <label htmlFor="cod" className="text-white font-semibold text-md cursor-pointer"> Cash on delivery</label>
                    </div>


                </div>

                <button className="w-full mt-10 p-4 cursor-pointer rounded-md bg-blue-700 hover:bg-blue-900 text-white font-semibold">
                    Place Order
                </button>
            </form>
        </div>
    )
}

export default CheckoutForm