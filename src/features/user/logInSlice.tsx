import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
  acces: false,
};

export const logInSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.acces = action.payload.acces;
    },
  },
});

export const { setLogIn } = logInSlice.actions;

export default logInSlice.reducer;