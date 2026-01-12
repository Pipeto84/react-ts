import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { ProductosStore } from "../features/storeSlice";

const initialState: ProductosStore[] = [];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToShopping: (state, action: PayloadAction<ProductosStore>) => {
      state.push({...action.payload, agregar: true, amount: 1});
    },
  },
});
export const { addToShopping } = shoppingSlice.actions;

export const selectShopping = (state: RootState) => state.shopping;

export default shoppingSlice.reducer;
