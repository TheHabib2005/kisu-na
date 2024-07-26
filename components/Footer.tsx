import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { MdOutlineLocationOn } from 'react-icons/md'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className=" bg-[#000] border-t-[1px] border-solid border-zinc-900 ">
            <div className="footer-container">
                <div className=" py-[80px] max-[767px]:py-[60px]">
                    <div className="flex flex-wrap justify-between items-center  ">
                        <div className="w-full flex flex-wrap  justify-between">
                            <div
                                className="min-[992px]:w-[25%] px-[12px] w-full  "
                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                            >
                                <div className="flex flex-col ">
                                    <Link href={"/"} title='myshopbd.com'>
                                        <img
                                            src="/myshopbd-light.png"
                                            className="max-w-[200px] max-[767px]:max-w-[170px]  mb-[10px]"
                                            alt="footer logo"
                                        />
                                    </Link>
                                    <p className="gi-footer-detail max-w-[400px]  p-[0] text-[14px] leading-[27px] font-normal text-[#777] inline-block relative max-[1199px]:text-[14px]">
                                        Grabit is the biggest market of grocery products. Get your daily
                                        needs from our store.
                                    </p>

                                </div>
                            </div>
                            <div
                                className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-info wow fadeInUp"
                                data-wow-delay="0.2s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <div className="gi-footer-widget">
                                    <h4 className="gi-footer-heading text-[18px] font-medium mb-[20px] text-zinc-300 leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize font-Poppins border-b-[1px] border-solid border-black max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                        Category
                                        <div className="gi-heading-res">
                                            <i className="fi-rr-angle-small-down" aria-hidden="true" />
                                        </div>
                                    </h4>
                                    <div className="gi-footer-links gi-footer-dropdown">
                                        <ul className="align-itegi-center">
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="shop-left-sidebar-col-3.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Dairy &amp; Milk
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="shop-banner-left-sidebar-col-3.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Snack &amp; Spice
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="shop-full-width-col-5.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Fast Food
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="shop-list-left-sidebar.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Juice &amp; Drinks
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="shop-list-full-col-2.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Bakery
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center">
                                                <a
                                                    href="shop-banner-right-sidebar-col-4.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Seafood
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-service wow fadeInUp md:mt-0 mt-8 "
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <div className="gi-footer-widget">
                                    <h4 className="gi-footer-heading text-[18px] font-medium mb-[20px] text-zinc-300 leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize font-Poppins border-b-[1px] border-solid border-black max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                        Account
                                        <div className="gi-heading-res">
                                            <i className="fi-rr-angle-small-down" aria-hidden="true" />
                                        </div>
                                    </h4>
                                    <div className="gi-footer-links gi-footer-dropdown">
                                        <ul className="align-itegi-center">
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="register.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Sign In
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="cart.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    View Cart
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="privacy-policy.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Return Policy
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="#"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Become a Vendor
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                <a
                                                    href="#"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Affiliate Program
                                                </a>
                                            </li>
                                            <li className="gi-footer-link m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center">
                                                <a
                                                    href="checkout.html"
                                                    className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                >
                                                    Payments
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="min-[992px]:w-[25%] gi-footer-toggle px-[12px] w-full gi-footer-cont-social mb-[-20px] wow fadeInUp md:mt-0 mt-8"
                                data-wow-delay="0.5s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.5s",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <div className="gi-footer-contact mb-[30px] max-[991px]:mb-[0]">
                                    <div className="gi-footer-widget">
                                        <h4 className="gi-footer-heading text-[18px] font-medium mb-[20px] text-zinc-300 leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize font-Poppins border-b-[1px] border-solid border-black max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                                            Contact
                                            <div className="gi-heading-res">
                                                <i className="fi-rr-angle-small-down" aria-hidden="true" />
                                            </div>
                                        </h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center">
                                                <li className="gi-footer-link gi-foo-location m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                    <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                        <MdOutlineLocationOn />
                                                    </span>
                                                    <p className="m-[0] text-[14px] font-normal text-[#777]">
                                                        2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                                                    </p>
                                                </li>
                                                <li className="gi-footer-link gi-foo-call m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                    <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                        <FaWhatsapp />
                                                    </span>
                                                    <a
                                                        href="tel:+009876543210"
                                                        className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                    >
                                                        +00 9876543210
                                                    </a>
                                                </li>
                                                <li className="gi-footer-link gi-foo-mail m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                                                    <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                                                        <AiOutlineMail />
                                                    </span>
                                                    <a
                                                        href="mailto:example@email.com"
                                                        className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                                                    >
                                                        example@email.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gi-footer-social">
                                    <div className="gi-footer-widget">
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-itegi-center flex flex-wrap">
                                                <li className="gi-footer-link pr-[5px]">
                                                    <a
                                                        href="#"
                                                        className="h-[30px] w-[30px] bg-zinc-800 rounded-[5px] capitalize flex items-center justify-center text-white text-[15px]"
                                                    >
                                                        <FaFacebookF />

                                                    </a>
                                                </li>
                                                <li className="gi-footer-link pr-[5px]">
                                                    <a
                                                        href="#"
                                                        className="h-[30px] w-[30px] bg-zinc-800 rounded-[5px] capitalize flex items-center justify-center text-white text-[15px]"
                                                    >
                                                        <AiOutlineInstagram />

                                                    </a>
                                                </li>
                                                <li className="gi-footer-link pr-[5px]">
                                                    <a
                                                        href="#"
                                                        className="h-[30px] w-[30px] bg-zinc-800 rounded-[5px] capitalize flex items-center justify-center text-white text-[15px]"
                                                    >
                                                        <FaTwitter />


                                                    </a>
                                                </li>
                                                <li className="gi-footer-link pr-[5px]">
                                                    <a
                                                        href="#"
                                                        className="h-[30px] w-[30px] bg-zinc-800 rounded-[5px] capitalize flex items-center justify-center text-white text-[15px]"
                                                    >
                                                        <FaYoutube />

                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>


    )
}

export default Footer