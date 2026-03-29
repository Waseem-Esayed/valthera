import { createContext } from "react";
import type CartProductType from "../types/CartProduct";

type CartContextType = {
  cart: CartProductType[];
  addToCart: (product: CartProductType) => void;
  updateAmount: (product: CartProductType, newAmount: number) => void;
  deleteProduct: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  updateAmount: () => {},
  deleteProduct: () => {},
});
