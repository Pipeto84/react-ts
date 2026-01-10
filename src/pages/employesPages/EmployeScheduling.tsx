import { DragAndDrop } from "../../components/DragAndDrop";
import { List } from "../../pages/employesPages/EmployeList";
import "../../styles/employeStyle/employePage.css";
import { NavLink } from "react-router-dom";

export const Scheduling = () => {
  return (
    <div className="employeesPage">
      <DragAndDrop />
      <NavLink className="newEmployee" to="/new">
        New employe
      </NavLink>;
      <List />
    </div>
  );
};
