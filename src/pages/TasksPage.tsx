import "../styles/TasksPage.css";
import { TasksCard } from "../components/TasksCard";
import { useAppSelector } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import type {Task, TasksList} from '../features/taskSlice'

export const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks);
  // const tasksSort  = tasks.map((list)=>{
  //   list.items.sort((a,b)=>Number(b.completed) - Number(a.completed))
  // })
  // console.log(tasksSort)

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <NavLink className="newListButton" to="/newList">
        Create new list
      </NavLink>
      <div className="tasksGrid">
        {tasks.map((tasks) => (
          <TasksCard key={uuid()} {...tasks} />
        ))}
      </div>
    </div>
  );
};
