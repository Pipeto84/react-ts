import "../styles/TasksPage.css";
import type { TasksList } from "../features/taskSlice";
import { clickTask, deleteTask, deleteList } from "../features/taskSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { v4 as uuid } from "uuid";
import trash from '../assets/borrar.png'

export const TasksCard = (list: TasksList) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const handleTaskClick = (taskId: string) => {
    dispatch(clickTask(taskId));
    console.log(tasks);
  };
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };
  const handleDeleteList = (listId: string) => {
    dispatch(deleteList(listId));
  }
  return (
    <div className="tasksCard" key={uuid()}>
      <div className="nameDeleteList">
        <h2>{list.name}</h2>
        <a onClick={() => handleDeleteList(list.id)}>
          <img
            className="iconoTrash"
            src={trash}
            alt="icono trash"
          />
        </a>
      </div>
      <div key={uuid()}>
        {list.items.map((item) => (
          <div className="tasksList" key={uuid()}>
            <input
              type="checkbox"
              key={uuid()}
              value={item.name}
              id={item.name}
              className="inputTask"
              onChange={() => handleTaskClick(item.id)}
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
        ))}
      </div>
    </div>
  );
};
