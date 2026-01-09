import "../styles/TasksPage.css";
import type { TasksList, Task } from "../features/tasks/taskSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { addTaskList } from "../features/tasks/taskSlice";

export const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const newList: TasksList = {
    name: "",
    items: [],
  };
  const newTasks: Task[] = [{ name: "", completed: false },{ name: "", completed: false }];
  var indexTask = newList.items.length;
  const addTask = () => {
    newList.items.push(newTasks[indexTask]);
    indexTask = indexTask + 1;
  };
  const handleChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    newList.name = e.target.value;
  };
  const handleNameTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newTasks[indexTask].name = e.target.value;
  };
  const saveList = () => {
    newList.items.push(newTasks[indexTask]);
    dispatch(addTaskList(newList));
    navigate("/tasks");
  };
  return (
    <div className="list">
      <input
        type="text"
        placeholder=" name list..."
        className="nameList"
        // value={newList.name}
        onChange={handleChangeListName}
        autoFocus
      />
      <div className="newTasks">
        {newList.items.map((task, index) => (
          <div className="tasksList">
            <input
              type="checkbox"
              key={index}
              value={task.name}
              id={task.name}
              className="inputTask"
            />
            <label key={index} htmlFor={task.name} className="labelTask">
              {task.name}
            </label>
          </div>
        ))}
        <input
          type="text"
          placeholder=" task..."
          className="nameTask"
          // value={newList.items[index].name}
          onChange={handleNameTaskChange}
        />
        <button className="addTask" onClick={addTask}>
          +
        </button>
      </div>
      <button className="saveTask" onClick={saveList}>
        Save
      </button>
    </div>
  );
};
