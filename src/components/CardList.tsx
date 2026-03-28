import type { Data } from "../interfaces/index";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { deleteEmployee } from "../features/employeSlice";
import edit from '../assets/edit3.png'
import trash from '../assets/borrar2.png'
import "../styles/employeStyle/CardList.css";

interface Props {
  data: Data;
}

export const CardList = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const handleDelete = (employee: Data) => {
    dispatch(deleteEmployee(employee));
  };
  return (
    <div className="cardList">
      <p>{data.alias + ": " + data.name + " ( " + data.date + " )"}</p>
      <div className="buttonsList">
        <Link className="edit" to={`/edit/${data.id}`}>
          <img className="iconoEdit" src={edit} alt="icono edit" />
        </Link>
        <button className="delete" onClick={() => handleDelete(data)}>
          <img className="iconoTrash" src={trash} alt="icono trash" />
        </button>
      </div>
    </div>
  );
};
