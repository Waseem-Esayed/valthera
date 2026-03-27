import { useState } from "react";
import { CartContext } from "./CartContex";
import type CartProductType from "../types/CartProduct";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  function addToCart(product: CartProductType) {
    setCart((prev) => {
      const existingProducts = prev.filter((p) => p.id === product.id);
      const amountInCart = existingProducts.length;

      if (amountInCart < product.inStock) {
        const existingSize = existingProducts.find(
          (p) => p.size === product.size,
        );
        if (existingSize) {
          const indexOfExsiting = prev.indexOf(existingSize);
          const arrayWithoutPrev = prev.toSpliced(indexOfExsiting, 1);

          return [
            ...arrayWithoutPrev,
            { ...existingSize, amount: existingSize.amount + 1 },
          ];
        } else {
          return [...prev, product];
        }
      }

      return prev;
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };
