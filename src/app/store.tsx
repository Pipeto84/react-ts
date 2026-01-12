import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import employeReducer from '../features/employes/employeSlice'
import storeReducer from '../features/storeSlice'
import shoppingReducer from '../features/shoppingSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeReducer,
    products: storeReducer,
    shopping: shoppingReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];