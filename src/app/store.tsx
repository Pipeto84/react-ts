import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import employeReducer from '../features/employes/employeSlice'


export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];