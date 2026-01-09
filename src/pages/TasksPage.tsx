import "../styles/TasksPage.css";
import { TasksCard } from "../components/TasksCard";
import {  } from "../features/tasks/taskSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";



export const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <button className="newList">Create new list</button>
      <div className="tasksGrid">
        {tasks.map((tasks) => (
          <TasksCard key={tasks.name} {...tasks} />
        ))}
      </div>
    </div>
  );
};
