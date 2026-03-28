import React from "react";
import type { Data, Date } from "../interfaces/index";
import copy from "../assets/copy.png";
import {useAppDispatch} from '../app/hooks'
import {addEmployee} from '../features/employeSlice'
import "../styles/employeStyle/CardItem.css";

interface Props {
  data: Data;
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
    dispatch(addEmployee({...data, id: crypto.randomUUID()}))
    console.log(data)
  };

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      title={data.name}
    >
      <p>{data.alias}</p>
      <div className="btnsItem">
        <button className="copy" onClick={handleCopy} title="Copy ">
          <img className="iconCopy" title="Copy item" src={copy} alt="icon copy" />
        </button>
        <button
          className="cancel"
          onClick={handleOnClick}
          title="Remove from day"
        >
          X
        </button>
      </div>
    </div>
  );
};
