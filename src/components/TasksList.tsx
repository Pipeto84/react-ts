import "../styles/TasksPage.css";
import type {TasksList, Task} from '../features/tasks/taskSlice'

export const TaskList = () => {
  const newList:TasksList = {
    name: "",
    items: [
      {
        name: "",
        completed: false,
      },
    ],
  };
  var indexTask = 0;
  const addTask = () => {
    indexTask=indexTask+1;
  }

  return (
    <div className="list">
      <input type="text" placeholder="name list..." className="nameList" value={newList.name}/>
      <div className="newTasks">
        <input type="text" placeholder="task..." className="nameTask" value={newList.items[indexTask].name}/>
        <button className="addTask" onClick={addTask}>+</button>
      </div>
      <button className="saveTask">Save</button>
    </div>
  );
};
