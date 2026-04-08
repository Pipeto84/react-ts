import { createSlice } from "@reduxjs/toolkit";
import type { menu } from "../interfaces/index";

const initialState: menu = {
  active: false,
};
export const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setActiveTrans: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveTrans } = translateSlice.actions;

export default translateSlice.reducer;
