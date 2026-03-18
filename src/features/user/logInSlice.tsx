import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  acces: false,
};

export const logInSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
      state.acces = action.payload.acces;
    },
  },
});

export const { setLogIn } = logInSlice.actions;

export default logInSlice.reducer;