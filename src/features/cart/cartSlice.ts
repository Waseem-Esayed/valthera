import { createSlice } from "@reduxjs/toolkit";
import type CartProductType from "../../types/CartProduct";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProductType[],
  reducers: {
    addProductToCart: (state, action) => {
      const amountInCart = state.filter(
        (p) => p.id === action.payload.id,
      ).length;
      if (amountInCart < action.payload.inStock) {
        state.push(action.payload);
      }
    },
    updateProductAmount: (state, action) => {
      // const { id, newAmount } = action.payload;
      // const product = state.find((p) => p.id === id);
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart, updateProductAmount } = cartSlice.actions;
