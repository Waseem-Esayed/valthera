import { createContext, useState } from "react";
import type CartProductType from "../types/CartProduct";

type CartContextType = {
  cart: CartProductType[];
  addToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  function addToCart(product: CartProductType) {
    setCart((prev) => {
      const exisitingProducts = prev.filter((p) => p.id === product.id);
      const amountInCart = exisitingProducts.length;

      if (amountInCart < product.inStock) {
        const existingSize = exisitingProducts.find(
          (p) => p.size === product.size,
        );
        if (existingSize) {
          const indexOfExsiting = exisitingProducts.indexOf(existingSize);
          exisitingProducts.splice(indexOfExsiting, 1);

          console.log();
          return [
            ...exisitingProducts,
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
