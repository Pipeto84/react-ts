import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    userName: "Felipe",
    password: "12345",
  },
  {
    userName: "q",
    password: "1",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;