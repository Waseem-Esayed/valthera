import { useState } from "react";
import { CartContext } from "./CartContex";
import type CartProductType from "../types/CartProduct";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  function addToCart(product: CartProductType) {
    setCart((prev) => {
      const existingProducts = prev.filter((p) => p.id === product.id);
      const amountInCart =
        existingProducts.find((p) => p.size === product.size)?.amount ?? 0;
      const existingSize = existingProducts.find(
        (p) => p.size === product.size,
      );

      if (amountInCart < product.inStock) {
        if (existingSize) {
          return prev.map((p) => {
            if (p.id === product.id && p.size === product.size)
              return { ...p, amount: p.amount + 1 };
            return p;
          });
        } else {
          return [...prev, product];
        }
      }

      return prev;
    });
  }

  function updateAmount(product: CartProductType, newAmount: number) {
    if (newAmount === 0) {
      return;
    }
    setCart((prev) => {
      const sumAmount = prev
        .filter((p) => p.id === product.id)
        .reduce((acc, curr) => acc + curr.amount, 0);

      if (sumAmount < product.inStock || newAmount < product.amount) {
        return prev.map((p) => {
          if (p.id === product.id && p.size === product.size)
            return { ...p, amount: newAmount };
          return p;
        });
      }
      return prev;
    });
  }

  function deleteProduct(product: CartProductType) {
    setCart((prev) => {
      return prev.filter((p) => p.id !== product.id || p.size !== product.size);
    });
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateAmount, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };
