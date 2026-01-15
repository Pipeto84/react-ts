import "../styles/TasksPage.css";
import type { TasksList } from "../features/taskSlice";
import { clickTask, deleteTask, deleteList } from "../features/taskSlice";
import { useAppDispatch } from "../app/hooks";
import { v4 as uuid } from "uuid";
import trash from '../assets/borrar.png'
import edit from '../assets/edit2.png'

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
  const handleClick = (listId: string) => {
    console.log("el id es: ", listId);
  };
  const handleEditList = ()=>{

  }
  return (
    <div className="tasksCard" id={list.id} key={uuid()} onClick={() => handleClick(list.id)}>
      <div className="nameDeleteList">
        <h2 >{list.name}</h2>
        <a onClick={() => handleEditList()}>
          <img
            className="iconoEdit"
            src={edit}
            alt="icono edit"
          />
        </a>
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
        ))}
      </div>
    </div>
  );
};
