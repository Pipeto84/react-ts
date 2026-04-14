import type { ItemSchedule, Date } from "../../interfaces";
import { CardItem } from "./CardItem";
import { dragItem } from "../../features/scheduleSlice";
import { useAppDispatch } from "../../app/hooks";
import "../../styles/schedule/ContainerDays.css";

interface Props {
  day: Date;
  date: Date;
  items: ItemSchedule[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: string, date: Date) => void;
}

export const ContainerDays = ({
  day,
  items = [],
  date,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const updateItem = {
      id: e.dataTransfer.getData("text"),
      date: day,
    };
    dispatch(dragItem(updateItem));
    handleDragging(false);
  };

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{date}</p>
      {items.map(
        (item) =>
          day === item.date && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
            />
          ),
      )}
    </div>
  );
};
