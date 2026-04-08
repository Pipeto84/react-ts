import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import employeReducer from "../features/employeSlice";
import storeReducer from "../features/storeSlice";
import shoppingReducer from "../features/shoppingSlice";
import logInReducer from "../features/user/logInSlice";
import usersReducer from "../features/user/usersSlice";
import menuReducer from "../features/menuSlice";
import translateReducer from "../features/translateSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeReducer,
    products: storeReducer,
    shopping: shoppingReducer,
    logIn: logInReducer,
    users: usersReducer,
    menu: menuReducer,
    translate: translateReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
