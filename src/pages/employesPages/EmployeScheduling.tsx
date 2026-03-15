import { DragAndDrop } from "../../components/DragAndDrop";
import { List } from "../../pages/employesPages/EmployeList";
import "../../styles/employeStyle/employePage.css";

export const Scheduling = () => {
  return (
    <div className="employeesPage">
      <DragAndDrop />
      <List />
    </div>
  );
};
