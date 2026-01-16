import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}
export interface TasksList {
  id: string;
  name: string;
  items: Task[];
}
const initialState: TasksList[] = [
  {
    id: uuid(),
    name: "Daily Tasks",
    items: [
      { name: "Task 1", completed: false, id: uuid() },
      { name: "Task 2", completed: false, id: uuid() },
      { name: "Task 3", completed: false, id: uuid() },
    ],
  },
  {
    id: uuid(),
    name: "Work Tasks",
    items: [
      { name: "Task A", completed: false, id: uuid() },
      { name: "Task B", completed: false, id: uuid() },
      { name: "Task C", completed: false, id: uuid() },
      { name: "Task D", completed: false, id: uuid() },
    ],
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskList: (state, action: PayloadAction<TasksList>) => {
      state.push(action.payload);
    },
    clickTask: (state, action: PayloadAction<string>) => {
      state.forEach((list) => {
        list.items.forEach((item) => {
          if (item.id === action.payload) {
            item.completed = true;
          }
        });
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.forEach((list) => {
        list.items = list.items.filter((item) => item.id !== action.payload);
      });
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.filter((list) => list.id !== action.payload);
      return state.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addTaskList, clickTask, deleteTask, deleteList } =
  taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
