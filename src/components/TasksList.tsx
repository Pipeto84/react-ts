import "../styles/TasksPage.css";
import type { TasksList, Task } from "../features/tasks/taskSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { addTaskList } from "../features/tasks/taskSlice";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const [nameList, setNameList] = useState("");
  const [nameTask, setNameTask] = useState("");
  const [newTasks, setNewTasks] = useState<Task[]>([]);
  const newList: TasksList = {
    name: "",
    items: [],
  };
  var indexTask = newList.items.length;
  const addTask = () => {
    newList.name = nameList;
    setNewTasks((list) => [...list, { name: nameTask, completed: false }]);
    indexTask = indexTask + 1;
    setNameTask("");
  };
  const handleChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameList(e.target.value);
  };
  const handleNameTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
  };
  const saveList = () => {
    setNewTasks((list) => [...list, { name: nameTask, completed: false }]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newList.name = nameList;
    newList.items.push(...newTasks);
    dispatch(addTaskList(newList));
    navigate("/tasks");
  };
  return (
    <form className="list" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=" name list..."
        className="nameList"
        value={nameList}
        onChange={handleChangeListName}
        autoFocus
      />
      <div className="newTasks">
        <div className="newTasksList">
          {newTasks.map((task, index) => (
            <div className="tasksList" key={uuid()}>
              <input
                type="checkbox"
                key={uuid()}
                value={task.name}
                id={task.name}
                className="inputTask"
              />
              <label key={uuid()} htmlFor={task.name} className="labelTask">
                {task.name}
              </label>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder=" task..."
          className="nameTask"
          value={nameTask}
          onChange={handleNameTaskChange}
        />
        <button className="addTask" onClick={addTask} type="button">
          +
        </button>
      </div>
      <button className="saveTask" type="submit" onClick={saveList}>
        Save
      </button>
    </form>
  );
};
