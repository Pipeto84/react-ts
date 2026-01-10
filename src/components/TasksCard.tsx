import "../styles/TasksPage.css";
import type { TasksList } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export const TasksCard = (list: TasksList) => {
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
            />
            <label key={uuid()} htmlFor={item.name} className="labelTask">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
