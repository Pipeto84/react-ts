import "../styles/TasksPage.css";
import type { TasksList } from "../features/tasks/taskSlice";

export const TasksCard = (list: TasksList) => {
  return (
    <div className="tasksCard">
      <h2>{list.name}</h2>
      <div>
        {list.items.map((item, index) => (
          <div className="tasksList">
            <input
              type="checkbox"
              key={index}
              value={item.name}
              id={item.name}
              className="inputTask"
            />
            <label key={index} htmlFor={item.name} className="labelTask">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
