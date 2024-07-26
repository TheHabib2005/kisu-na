import { Product } from "@/utils/interfaces";

export const addProduct = async (product: Product) => {
  try {
    let response = await fetch("dummyjson.com/products/category/laptop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
      credentials: "include",
    });
    let data = await response.json();
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: "something went wrong!",
    };
  }
};
