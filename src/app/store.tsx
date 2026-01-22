import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import employeReducer from '../features/employeSlice'
import storeReducer from '../features/storeSlice'
import shoppingReducer from '../features/shoppingSlice'
import weatherReducer from '../features/weatherSlice'
import movieReducer from '../features/movieSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeReducer,
    products: storeReducer,
    shopping: shoppingReducer,
    infoCity: weatherReducer,
    infoMovie: movieReducer
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];