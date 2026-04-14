import { useState } from "react";
import type { Date } from "../interfaces";
import { useAppDispatch } from "../app/hooks";
import { dragItem } from "../features/scheduleSlice";

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useAppDispatch();
  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging);
  };

  const handleUpdateList = (id: string, date: Date) => {
    const update = {
      id,
      date,
    };
    dispatch(dragItem(update));
  };

  return {
    isDragging,
    handleDragging,
    handleUpdateList,
  };
};
