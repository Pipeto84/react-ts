import "../styles/TasksPage.css";
import { TasksCard } from "../components/TasksCard";

export type Task = {
  name: string;
  completed: boolean;
};
export type TasksList = {
  name: string;
  items: Task[];
};
var TasksList: TasksList[] = [
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
    ],
  },
];

export const TasksPage = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <button className="newList">Create new list</button>
      <div className="tasksGrid">
        {TasksList.map((tasksList) => (
          <TasksCard key={tasksList.name} {...tasksList} />
        ))}
      </div>
    </div>
  );
};
