import { createSlice } from "@reduxjs/toolkit";
import type { users } from "../../interfaces/index";
import { initialStateUsers } from "../../assets/index";

const initialState: users[] = initialStateUsers;
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
