import React from "react";
import type { Date, Data } from "../interfaces";
import { CardItem } from "./CardItem";
import "../styles/employeStyle/ContainerCards.css";
import { dragEmployee } from "../features/employes/employeSlice";
import { useAppDispatch } from "../app/hooks";

interface Props {
  date: Date;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: string, date: Date) => void;
}

export const ContainerCards = ({
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
    const updateEployee = {
      id: e.dataTransfer.getData("text"),
      date: date,
    };
    dispatch(dragEmployee(updateEployee));
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
          date === item.date && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
            />
          )
      )}
    </div>
  );
};
