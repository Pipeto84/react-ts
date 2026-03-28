import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { Data, Date } from "../interfaces/index";

type idData = {
  id: string;
  date: Date;
};

export const initialState: Data[] = [
  {
    id: "1",
    alias: "Work",
    name: "Go to the office from 8am to 5pm",
    date: "",
  },
  {
    id: "2",
    alias: "Bike",
    name: "Ride a bike for 1 hour",
    date: "",
  },
  {
    id: "3",
    alias: "Shopping",
    name: "Go shopping at the supermarket",
    date: "",
  },
];

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    dragEmployee: (state, action: PayloadAction<idData>) => {
      const { id, date } = action.payload;
      const employeeFound = state.find((employee) => employee.id === id);
      if (employeeFound) {
        employeeFound.date = date;
      }
    },
    editingEmployee: (state, action: PayloadAction<Data>) => {
      const { id, alias, name } = action.payload;
      const employeeFound = state.find((employee) => employee.id === id);
      if (employeeFound) {
        employeeFound.id = id;
        employeeFound.alias = alias;
        employeeFound.name = name;
      }
    },
    addEmployee: (state, action: PayloadAction<Data>) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action: PayloadAction<Data>) => {
      const employeeFound = state.find(
        (employee) => employee.id === action.payload.id
      );
      if (employeeFound) {
        state.splice(state.indexOf(employeeFound), 1);
      }
    },
  },
});

export const { dragEmployee, editingEmployee, addEmployee, deleteEmployee } =
  employeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;
