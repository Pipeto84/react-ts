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
  amount: number;
};
const initialState: ProductosStore[] = [];

export const storeSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<ProductosStore[]>) => {
      state = action.payload;
      return state;
    },
    addProduct: (state, action: PayloadAction<number>) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.agregar = !item.agregar;
        }
      });
      return state;
    },
  },
});
export const { setStore, addProduct } = storeSlice.actions;

export const selectStore = (state: RootState) => state.products;

export default storeSlice.reducer;
