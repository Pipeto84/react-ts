import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface Task {
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
      { name: "Task 1", completed: false },
      { name: "Task 2", completed: false },
      { name: "Task 3", completed: false },
    ],
  },
  {
    name: "Work Tasks",
    items: [
      { name: "Task A", completed: false },
      { name: "Task B", completed: false },
      { name: "Task C", completed: false },
      { name: "Task D", completed: false },
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
    // removeTaskList: (state, action: PayloadAction<string>) => {
    //   return state.filter((tasksList) => tasksList.name !== action.payload);
    // },
    // addTask: (
    //   state,
    //   action: PayloadAction<{ listName: string; task: Task }>
    // ) => {
    //   const tasksList = state.find(
    //     (list) => list.name === action.payload.listName
    //   );
    //   if (tasksList) {
    //     tasksList.items.push(action.payload.task);
    //   }
    // },
    // toggleTaskCompletion: (
    //   state,
    //   action: PayloadAction<{ listName: string; taskName: string }>
    // ) => {
    //   const tasksList = state.find(
    //     (list) => list.name === action.payload.listName
    //   );
    //   if (tasksList) {
    //     const task = tasksList.items.find(
    //       (item) => item.name === action.payload.taskName
    //     );
    //     if (task) {
    //       task.completed = !task.completed;
    //     }
    //   }
    // },
  },
});

export const { addTaskList } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;
