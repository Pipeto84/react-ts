import "../styles/TasksPage.css";

export const TasksList = () => {
  return (
    <div className="list">
      <input type="text" placeholder="name list..." className="nameList" />
      <div className="newTasks">
        <input type="text" placeholder="task..." className="nameTask" />
        <button className="addTask">+</button>
      </div>
      <button className="saveTask">Save</button>
    </div>
  );
};
