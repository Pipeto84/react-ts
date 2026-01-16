import "../styles/TasksPage.css";
import type { TasksList } from "../features/taskSlice";
import { clickTask, deleteTask, deleteList } from "../features/taskSlice";
import { useAppDispatch } from "../app/hooks";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import trash from "../assets/borrar.png";
import edit from "../assets/edit2.png";

export const TasksCard = (list: TasksList) => {
  const dispatch = useAppDispatch();
  const handleTaskClick = (taskId: string) => {
    dispatch(clickTask(taskId));
  };
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };
  const handleDeleteList = (listId: string) => {
    dispatch(deleteList(listId));
  };
  return (
    <div
      className="tasksCard"
      id={list.id}
      key={uuid()}
    >
      <div className="nameDeleteList">
        <h2>{list.name}</h2>
        <NavLink to={`/editList/${list.id}`}>
          <img className="iconoEdit" src={edit} alt="icono edit" />
        </NavLink>
        <a onClick={() => handleDeleteList(list.id)}>
          <img className="iconoTrash" src={trash} alt="icono trash" />
        </a>
      </div>
      <div key={uuid()}>
        {list.items.map((item) =>
          !item.completed ? (
            <div className="tasksList" key={uuid()}>
              <input
                type="checkbox"
                key={uuid()}
                value={item.name}
                id={item.name}
                className="inputTask"
                onChange={() => handleTaskClick(item.id)}
                checked={item.completed}
              />
              <label key={uuid()} htmlFor={item.name} className="labelTask">
                {item.name}
              </label>
              <button
                className="deleteTask"
                onClick={() => handleDeleteTask(item.id)}
              >
                x
              </button>
            </div>
          ) : (
            <div className="tasksListCompleted" key={uuid()}>
              <input
                type="checkbox"
                key={uuid()}
                value={item.name}
                id={item.name}
                className="inputTaskCompleted"
                onChange={() => handleTaskClick(item.id)}
                checked={item.completed}
              />
              <label key={uuid()} htmlFor={item.name} className="labelTaskCompleted">
                {item.name}
              </label>
              <button
                className="deleteTask"
                onClick={() => handleDeleteTask(item.id)}
              >
                x
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
