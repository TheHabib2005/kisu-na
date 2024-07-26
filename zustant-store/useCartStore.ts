import { updateCartdb } from "@/utils";
import { Product } from "@/utils/interfaces";
import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
  thumbnail: string;
  quantity: number;
}
interface CartItemType {
  cart: any[];
  totalAmount: number;
  ProductaddToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}
export const useCartStore = create<CartItemType>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        totalAmount: 0,
        ProductaddToCart: (product) => {
          const existingProduct = [...get().cart].find(
            (item: any) => item?._id === product._id
          );
          let updatedCart: any = [...get().cart];
          if (existingProduct) {
            updatedCart = updatedCart.map((item: any) => {
              if (item._id === product._id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              } else {
                return {
                  ...item,
                };
              }
            });
          } else {
            updatedCart.push(product);
          }
          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc: any, item: Product) => acc + item.quantity! * item.price,
              0
            ),
          });
        },
        removeFromCart: (id) => {
          let updatedCart = [...get().cart].filter((c) => c._id !== id);
          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
        },
        incrementQuantity: (id) => {
          let updatedCart = [...get().cart];
          updatedCart = updatedCart.map((product) => {
            if (product._id === id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return product;
            }
          });

          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Cart Updated successfully");
        },
        decrementQuantity: (id) => {
          let updatedCart: any[] = [...get().cart];
          updatedCart = updatedCart.map((product) => {
            if (product._id === id) {
              return {
                ...product,
                quantity: product.quantity > 1 && product.quantity - 1,
              };
            } else {
              return product;
            }
          });

          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Cart Updated successfully");
        },
      }),
      {
        name: "cart",
      }
    )
  )
);
