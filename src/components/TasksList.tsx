import "../styles/TasksPage.css";
import type { TasksList, Task } from "../features/tasks/taskSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {useNavigate} from 'react-router-dom'
import { addTaskList } from "../features/tasks/taskSlice";

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const newList: TasksList = {
    name: "",
    items: [
      {
        name: "",
        completed: false,
      },
    ],
  };
  var indexTask = newList.items.length - 1;
  const addTask = () => {
    indexTask = indexTask + 1;
  };
  const saveList = () => {};
  const handleChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    newList.name = e.target.value;
  };
  const handleNameTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newList.items[indexTask].name = e.target.value;
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTaskList(newList));
    navigate('/tasks');
  };
  return (
    <form className="list" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=" name list..."
        className="nameList"
        // value={newList.name}
        onChange={handleChangeListName}
      />
      <div className="newTasks">
        <input
          type="text"
          placeholder=" task..."
          className="nameTask"
          // value={newList.items[indexTask].name}
          onChange={handleNameTaskChange}
        />
        <button className="addTask" onClick={addTask}>
          +
        </button>
      </div>
      <button type="submit" className="saveTask" onClick={saveList}>
        Save
      </button>
    </form>
  );
};
