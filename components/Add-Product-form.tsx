"use client";
import InputFeild from "@/components/InputFeild";
import Loader from "@/components/Loader";
import KeywordInput from "@/components/ProductKeywordInput";
import useAddProductForm from "@/hooks/useAddProductForm";

import Image from "next/image";

const AddProductForm = () => {
    const {
        loading,
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
    } = useAddProductForm();

    return (
        <div>
            {loading && <Loader />}
            <h1 className="p-5 font-semibold text-xl">Add New Product</h1>

            <form
                className="p-3 w-[90%]  mx-auto"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="flex items-start gap-4 w-full justify-between">
                    <InputFeild
                        className=""
                        wrapperClassName=""
                        error={
                            errors.product_name && touched.product_name && errors.product_name
                        }
                        name={"product_name"}
                        placeholder={"Enter a product name..."}
                        type={"text"}
                        value={values.product_name}
                        title={"Enter product name"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <InputFeild
                        className=""
                        wrapperClassName=""
                        handleBlur={handleBlur}
                        error={
                            errors.product_brand &&
                            touched.product_brand &&
                            errors.product_brand
                        }
                        name={"product_brand"}
                        placeholder={"Enter a product brand..."}
                        type={"text"}
                        value={values.product_brand}
                        title={"Enter product brand"}
                        handleChange={handleChange}
                    />
                </div>

                <div className="flex gap-4 items-start justify-between w-full">
                    <InputFeild
                        className=""
                        wrapperClassName=""
                        handleBlur={handleBlur}
                        error={
                            errors.product_category &&
                            touched.product_category &&
                            errors.product_category
                        }
                        name={"product_category"}
                        placeholder={"Enter a product category..."}
                        type={"text"}
                        value={values.product_category}
                        title={"Enter product category"}
                        handleChange={handleChange}
                    />
                    <InputFeild
                        className=""
                        wrapperClassName=""
                        handleBlur={handleBlur}
                        error={
                            errors.product_price &&
                            touched.product_price &&
                            errors.product_price
                        }
                        name={"product_price"}
                        placeholder={"Enter a product price..."}
                        type={"text"}
                        value={values.product_price}
                        title={"Enter product price"}
                        handleChange={handleChange}
                    />
                </div>
                <div className="flex gap-4 items-start justify-between w-full"></div>

                <KeywordInput />


                <button
                    className="text-white bg-blue-800 p-3 rounded-md outline-none  capitalize w-full"
                    type="submit"
                >
                    add product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
