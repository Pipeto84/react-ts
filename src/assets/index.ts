import { v4 as uuid } from "uuid";
import type { TasksList, users } from "../interfaces/index";
import type { ItemSchedule } from "../interfaces/index";

export const itemsSchedule: ItemSchedule[] = [
  {
    id: "1",
    name: "Work",
    description: "Go to the office from 8am to 5pm",
    date: "",
  },
  {
    id: "2",
    name: "Bike",
    description: "Ride a bike for 1 hour",
    date: "",
  },
  {
    id: "3",
    name: "Shopping",
    description: "Go shopping at the supermarket",
    date: "",
  },
];
export const initialTasksState: TasksList[] = [
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
export const initialStateUsers: users[] = [
  {
    userName: "Felipe",
    password: "12345",
  },
  {
    userName: "q",
    password: "1",
  },
];
