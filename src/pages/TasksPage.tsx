import { TasksCard } from "../components/tasks/TasksCard";
import { useAppSelector } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import "../styles/TasksPage.css";

export const TasksPage = () => {
  const { t } = useTranslation("global");
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <div className="tasksPage">
      <div className="tasks">
        <NavLink className="newListButton" to="/newList">
          {t("tasks.newList")}
        </NavLink>
        <div className="tasksGrid">
          {tasks.map((tasks) => (
            <TasksCard key={uuid()} {...tasks} />
          ))}
        </div>
      </div>
    </div>
  );
};
