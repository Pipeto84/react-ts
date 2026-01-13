import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}
export interface TasksList {
  name: string;
  items: Task[];
}
const initialState: TasksList[] = [
  {
    name: "Daily Tasks",
    items: [
      { name: "Task 1", completed: false, id:uuid() },
      { name: "Task 2", completed: false, id:uuid() },
      { name: "Task 3", completed: false, id:uuid() },
    ],
  },
  {
    name: "Work Tasks",
    items: [
      { name: "Task A", completed: false, id:uuid() },
      { name: "Task B", completed: false, id:uuid() },
      { name: "Task C", completed: false, id:uuid() },
      { name: "Task D", completed: false, id:uuid() },
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
            console.log(item.completed)
          }else{
            console.log(item.completed)
          }
        });
      });
    },
    removeTaskList: (state, action: PayloadAction<string>) => {
      return state.filter((tasksList) => tasksList.name !== action.payload);
    },
    addTask: (
      state,
      action: PayloadAction<{ listName: string; task: Task }>
    ) => {
      const tasksList = state.find(
        (list) => list.name === action.payload.listName
      );
      if (tasksList) {
        tasksList.items.push(action.payload.task);
      }
    },
    toggleTaskCompletion: (
      state,
      action: PayloadAction<{ listName: string; taskName: string }>
    ) => {
      const tasksList = state.find(
        (list) => list.name === action.payload.listName
      );
      if (tasksList) {
        const task = tasksList.items.find(
          (item) => item.name === action.payload.taskName
        );
        if (task) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTaskList, clickTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
