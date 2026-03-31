import { FormEmployee } from "../../components/FormEmployee";
import "../../styles/employeStyle/FormEmployee.css";

export const Edit = () => {
  return (
    <div className="containerEditEmployee">
      <FormEmployee data={"Edit Item"} />
    </div>
  );
};
