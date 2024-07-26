"use client";
import CartItemWrapper from "@/components/carts-components/CartItemWrapper";
import { formatePrice } from "@/utils";
import { useCartStore } from "@/zustant-store/useCartStore";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { animated, useSpring } from 'react-spring';

const CartPage = () => {
  const { cart, totalAmount } = useCartStore();
  const fadeStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  return (
    <section className="w-full px-4 ">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-xl font-bold text-zinc-700 dark:text-blue-700">
            Your cart is empty
          </h1>

          <Link
            href={"/"}
            className="text-zinc-700 dark:text-blue-700 font-bold text-xl"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-6 w-full  gap-4 ">
          <div className="md:col-span-4 col-span-6  bg-[#000000] rounded-md p-4  h-min">
            {/* wrapper  */}

            <div className="grid grid-cols-12">
              <div className="col-span-8 text-center pb-3">
                <span className="font-semibold text-zinc-400">PRODUCT</span>
              </div>
              <div className="col-span-2  text-center">
                <span className="font-semibold text-zinc-400">PRICE</span>
              </div>
              <div className="col-span-2  text-center">
                <span className="font-semibold text-zinc-400">QUANTITY</span>
              </div>
            </div>
            <CartItemWrapper />
          </div>
          <div className="md:col-span-2 col-span-6 h-min bg-black rounded-md p-6">
            <div>
              <h1 className="text-xl text-zinc-400">Cart Totals</h1>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
              <span className="text-lg text-zinc-400">Subtotal </span>
              <span className="text-lg text-blue-600 ">{formatePrice(totalAmount)}.00 BDT</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
              <span className="text-lg text-zinc-400">Shipping Cost </span>
              <span className="text-lg text-blue-600 ">100 Tk</span>
            </div>

            <div className="flex items-center justify-between py-3 ">
              <span className="text-lg text-zinc-400">Total</span>
              <span className="text-lg text-blue-600">
                {formatePrice(totalAmount + 100)}.00 BDT
              </span>
            </div>
            <Link href={"/checkout"} className="p-2 text-center w-full rounded-md bg-blue-600 cursor-pointer mt-3 inline-flex">
              Proceed To Checkout
            </Link>
          </div>
        </div>
      )}

      {/* <div className="space-y-5 rounded-2xl bg-zinc-950 p-4 w-[400px]  
                    overflow-hidden
                    shadow-xl shadow-black/5
                    before:border-t before:border-zinc-950"  >
        <div className="h-40 rounded-lg bg-zinc-900/50"></div>
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
          <div className="flex items-center gap-5">
            <div className="h-5 w-2/5 rounded-lg bg-rose-100/20"></div>
            <div className="h-5 w-2/5 rounded-lg bg-rose-100/20"></div>


          </div>
        </div>
      </div> */}


    </section>
  );
};

export default CartPage;




