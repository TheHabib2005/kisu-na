import InputFeild from "@/components/InputFeild";
import ProductKeywordInput from "@/components/ProductKeywordInput";
import { productInputSchema } from "@/helpers/yup-Schema";
import { addProduct } from "@/lib/api.action";
import { delay } from "@/utils";
import { Product } from "@/utils/interfaces";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
const useAddProductForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [keywordInputValue, setkeywordInputValue] = useState("");
    const [keywordInputError, setkeywordInputError] = useState({
        error: false,
        message: "",
    });

    //handle file upload in database and show preview image
    // const handleFileUpload = async (file: any) => {
    //     try {
    //         setLoading(true);
    //         await delay(500);
    //         const blobUrl = URL.createObjectURL(file);
    //         setProductImageUrl(blobUrl);
    //     } catch (error) {
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // handle add-product insert a batabase
    const handleAddProduct = async (product: Product) => {
        setLoading(true);
        let res = await addProduct(product);
        if (res.success) {
            toast.success(res.message);
            setLoading(false);
            router.push("/dashboard/products-list");
        } else {
            toast.error(res.message);
            setLoading(false);
            return;
        }
    };

    // used a  useformik hook
    const { errors, handleSubmit, handleChange, handleBlur, values, touched } =
        useFormik({
            initialValues: {
                product_name: "",
                product_brand: "",
                product_category: "",
                product_image: "",
                product_price: "",
            },
            validationSchema: productInputSchema,
            onSubmit: async (values) => {
                let product = { ...values, product_image: "productImageUrl" };

                // if (navigator.onLine) {
                //     handleAddProduct();
                // } else {
                //     setLoading(true);
                //     await delay(3000);
                //     setLoading(false);
                //     toast.error("please conncet to the internet");
                // }
            },
        });

    // PRODUCT - KEYWORD ADD FUNCTIONLATY

    const KeywordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setkeywordInputValue(value);
    };

    const KeywordInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let key = e.key === "Enter";

        if (key && keywordInputValue && keywordInputValue.length < 15) {
            let newValue = keywordInputValue;

            if (keywords.includes(newValue)) {
                toast.error("this keyword has already been added");
                return;
            }
            setKeywords((currentKey) => [...currentKey, keywordInputValue]);
            setkeywordInputValue("");
        }
    };

    const KeywordInputBlur = () => {
        if (keywords.length === 0) {
            setkeywordInputError({
                error: true,
                message: "At lest one or more keywords must be required",
            });
        } else {
            setkeywordInputError({
                error: false,
                message: "",
            });
        }
    };
    const KeywordDelete = (index: number) => {
        setKeywords((currentKey) => {
            let updatedValue = [...currentKey];
            updatedValue = updatedValue.filter(
                (keyword, keyIndex) => keyIndex !== index
            );
            return updatedValue;
        });
    };



    return {
        loading,
        keywordInputError,
        setkeywordInputError,
        keywordInputValue,
        setkeywordInputValue,
        keywords,
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        KeywordInputBlur,
        KeywordDelete,
        KeywordInputChange,
        KeywordInputKeydown,
    };
};

export default useAddProductForm;
