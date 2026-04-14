import type { ItemSchedule, Date } from "../../interfaces/index";
import copy from "../../assets/copy.png";
import trash from "../../assets/borrar2.png";
import { useAppDispatch } from "../../app/hooks";
import { addItem, deleteItem } from "../../features/scheduleSlice";
import "../../styles/schedule/CardItem.css";

interface Props {
  data: ItemSchedule;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: string, date: Date) => void;
}

export const CardItem = ({ data, handleDragging, handleUpdateList }: Props) => {
  const dispatch = useAppDispatch();
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  const handleOnClick = () => {
    handleUpdateList(data.id, "");
  };
  const handleCopy = () => {
    dispatch(addItem({ ...data, id: crypto.randomUUID(), date: "" }));
  };
  const handleDelete = (employee: ItemSchedule) => {
    dispatch(deleteItem(employee));
  };

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      title={data.name}
    >
      <p>{data.name}</p>
      <div className="btnsItem">
        <button className="copy" onClick={handleCopy} title="Copy ">
          <img
            className="iconCopy"
            title="Copy item"
            src={copy}
            alt="icon copy"
          />
        </button>
        {data.date && (
          <button
            className="cancel"
            onClick={handleOnClick}
            title="Remove from day"
          >
            X
          </button>
        )}
        {!data.date && (
          <button className="btnTrash" onClick={() => handleDelete(data)}>
            <img
              src={trash}
              className="iconTrash"
              alt="Delete item"
              title="Delete item"
            />
          </button>
        )}
      </div>
    </div>
  );
};
