import React from "react";
import type { Data, Date } from "../interfaces/index";
import "../styles/employeStyle/CardItem.css";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: string, date: Date) => void;
}

export const CardItem = ({ data, handleDragging, handleUpdateList }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  const handleOnClick = () => {
    handleUpdateList(data.id, "");
  };

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <p>{data.alias}</p>
      <button className="cancel" onClick={handleOnClick}>
        X
      </button>
    </div>
  );
};
