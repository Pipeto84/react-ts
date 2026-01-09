import "../styles/TasksPage.css";
import { TasksCard } from "../components/TasksCard";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { NavLink } from "react-router-dom";

export const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <NavLink className="newList" to="/newList">
        Create new list
      </NavLink>
      <div className="tasksGrid">
        {tasks.map((tasks) => (
          <TasksCard key={tasks.name} {...tasks} />
        ))}
      </div>
    </div>
  );
};
