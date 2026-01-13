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
    alias: "Pipe",
    name: "Felipe",
    date: "",
  },
  {
    id: "2",
    alias: "Juancho",
    name: "Juan",
    date: "",
  },
  {
    id: "3",
    alias: "Mauro",
    name: "Mauricio",
    date: "",
  },
  {
    id: "4",
    alias: "Jose",
    name: "Jose",
    date: "",
  },
  {
    id: "5",
    alias: "Sebas",
    name: "Sebastian",
    date: "",
  },
  {
    id: "6",
    alias: "Marco",
    name: "Marco",
    date: "",
  },
  {
    id: "7",
    alias: "Rafa",
    name: "Rafael",
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
