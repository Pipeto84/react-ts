import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { TasksList } from "../interfaces/index";
import { initialTasksState } from "../assets/index";

const initialState: TasksList[] = initialTasksState;

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
            item.completed = !item.completed;
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
