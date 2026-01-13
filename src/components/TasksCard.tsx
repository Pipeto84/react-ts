import "../styles/TasksPage.css";
import type { TasksList } from "../features/taskSlice";
import  { clickTask, deleteTask } from "../features/taskSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { v4 as uuid } from "uuid";

export const TasksCard = (list: TasksList) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const handleTaskClick = (taskId: string) => {
    dispatch(clickTask(taskId));
    // console.log(tasks)
  }
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
    // console.log(tasks)
  }
  return (
    <div className="tasksCard" key={uuid()}>
      <h2>{list.name}</h2>
      <div key={uuid()}>
        {list.items.map((item) => (
          <div className="tasksList" key={uuid()}>
            <input
              type="checkbox"
              key={uuid()}
              value={item.name}
              id={item.name}
              className="inputTask"
              onChange={()=>handleTaskClick(item.id)}
            />
            <label key={uuid()} htmlFor={item.name} className="labelTask">
              {item.name}
            </label>
            <button className="deleteTask" onClick={() => handleDeleteTask(item.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
