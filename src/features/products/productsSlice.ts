import { createSlice } from "@reduxjs/toolkit";
import mockProducts from "../../../src/mock-data/products";

const productsSlice = createSlice({
  name: "products",
  initialState: mockProducts,
  reducers: {},
});

export default productsSlice.reducer;
