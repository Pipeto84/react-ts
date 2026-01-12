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
      state.push({ ...action.payload, agregar: true, amount: 1 });
    },
    removeToShopping: (state, action: PayloadAction<ProductosStore>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    lessToShopping: (state, action: PayloadAction<ProductosStore>) => {
      return state.map((item) => {
        const cant = item.amount - 1;
        if (item.id === action.payload.id && cant > 0) {
          return { ...item, amount: cant };
        }
        return item;
      });
    },
    moreToShopping: (state, action: PayloadAction<ProductosStore>) => {
      return state.map((item) => {
        const cant = item.amount + 1;
        if (item.id === action.payload.id) {
          return { ...item, amount: cant };
        }
        return item;
      });
    },
  },
});
export const { addToShopping, removeToShopping, lessToShopping, moreToShopping } = shoppingSlice.actions;

export const selectShopping = (state: RootState) => state.shopping;

export default shoppingSlice.reducer;
