import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export type ProductosStore = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  agregar: boolean;
};
const response = await fetch("https://fakestoreapi.com/products");
const data: ProductosStore[] = await response.json();
data.map((item) => (item.agregar = false));
const initialState: ProductosStore[] = data;

export const storeSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<ProductosStore[]>) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setStore } = storeSlice.actions;

export const selectStore = (state: RootState) => state.products;

export default storeSlice.reducer;
