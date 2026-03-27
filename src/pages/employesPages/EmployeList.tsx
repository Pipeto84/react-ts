import { CardList } from "../../components/CardList";
import { useAppSelector } from "../../app/hooks";
import "../../styles/employeStyle/ListEmployees.css";

export const List = () => {
  const employeesList = useAppSelector((state) => state.employees);
  return (
    <div className="employeesList">
      <p className="titleList">Employees List</p>
      <div className="employees">
        {employeesList.map((item) => (
          <CardList data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
