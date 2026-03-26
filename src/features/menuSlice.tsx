import { createSlice } from "@reduxjs/toolkit";
import type { menu } from "../interfaces/index";

const initialState: menu = {
  active: false,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;

export default menuSlice.reducer;
