import { TasksCard } from "../components/TasksCard";
import { useAppSelector } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "../styles/TasksPage.css";

export const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <div className="tasks">
      <NavLink className="newListButton" to="/newList">
        New list
      </NavLink>
      <div className="tasksGrid">
        {tasks.map((tasks) => (
          <TasksCard key={uuid()} {...tasks} />
        ))}
      </div>
    </div>
  );
};
