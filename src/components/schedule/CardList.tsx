import type { ItemSchedule } from "../../interfaces/index";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { deleteItem } from "../../features/scheduleSlice";
import edit from '../../assets/edit3.png'
import trash from '../../assets/borrar2.png'
import "../../styles/schedule/CardList.css";

interface Props {
  data: ItemSchedule;
}

export const CardList = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const handleDelete = (item: ItemSchedule) => {
    dispatch(deleteItem(item));
  };
  return (
    <div className="cardList">
      <p>{data.name + ": " + data.description + " ( " + data.date + " )"}</p>
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
