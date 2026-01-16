import "../styles/TasksPage.css";
import type { TasksList, Task } from "../features/taskSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { addTaskList, deleteList } from "../features/taskSlice";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();
  const [list, setlist] = useState<TasksList>({
    id: uuid(),
    name: "",
    items: [],
  });
  const [nameList, setNameList] = useState("");
  const [nameTask, setNameTask] = useState("");
  const [newTasks, setNewTasks] = useState<Task[]>([]);
  const newList: TasksList = {
    id: "",
    name: "",
    items: [],
  };
  var indexTask = newList.items.length;
  const addTask = () => {
    newList.name = nameList;
    setNewTasks((list) => [
      ...list,
      { name: nameTask, completed: false, id: uuid() },
    ]);
    indexTask = indexTask + 1;
    setNameTask("");
  };
  const handleChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameList(e.target.value);
    setlist({ ...list, [e.target.name]: e.target.value });
  };
  const handleNameTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
    setlist({ ...list, [e.target.name]: e.target.value });
  };
  const saveList = () => {
    setNewTasks((list) => [
      ...list,
      { name: nameTask, completed: false, id: uuid() },
    ]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newList.name = nameList;
    newList.items.push(...newTasks);
    if (params.id) {
      newList.id = params.id;
      dispatch(deleteList(newList.id));
      dispatch(addTaskList(newList));
    } else {
      newList.id = uuid();
      dispatch(addTaskList(newList));
    }
    navigate("/tasks");
  };
  useEffect(() => {
    if (params.id) {
      const listFound = tasks.find((list) => list.id === params.id);
      if (listFound) {
        setlist(listFound);
        setNameList(listFound.name);
        setNewTasks(listFound.items);
      }
    }
  }, [params.id, tasks]);

  return (
    <form className="newList" onSubmit={handleSubmit}>
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
          {newTasks.map((task) => (
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
          placeholder=" name task..."
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
