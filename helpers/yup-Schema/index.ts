import { array, object, string } from "yup";
export const signupFormValidateSchema = object({
  username: string()
    .required("username must be provided")
    .min(5, "username must be at least 5 characters")
    .trim(),
  email: string().email().required("email must be provided"),
  password: string()
    .min(6, "password must be at least 6 characters")
    .required("please Enter your Password")
    .trim(),
});

export const signinFormValidateSchema = object({
  email: string().email().required("email must be provided"),
  password: string()
    .min(6, "password must be at least 6 characters")
    .required("please Enter your Password")
    .trim(),
});

export const productInputSchema = object({
  product_name: string().required("product name must be required"),

  product_brand: string().required("product brand must be required"),
  product_category: string().required("product category must be required"),
  product_image: string().required("product image must be required"),

  product_price: string().required("product price must be required"),
});
