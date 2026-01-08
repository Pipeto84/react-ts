import "../styles/TasksPage.css";
import type { TasksList } from "../pages/TasksPage";

export const TasksCard = (list: TasksList) => {
  return (
    <div className="tasksCard">
      <h2>{list.name}</h2>
      <div>
        {list.items.map((item, index) => (
          <div>
            <input type="checkbox" key={index} checked={item.completed} />
            <label key={index}>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
