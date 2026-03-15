import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Felipe",
    password: "12345",
  },
  {
    name: "q",
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