import { ContainerStart } from "../../components/schedule/ContainerStart";
import { ContainerDays } from "../../components/schedule/ContainerDays";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { useAppSelector } from "../../app/hooks";
import { useTranslation } from "react-i18next";
import type { Date } from "../../interfaces/index";
import "../../styles/schedule/DragAndDrop.css";

export const DragAndDrop = () => {
  const items = useAppSelector((state) => state.itemsSchedule);
  const { isDragging, handleDragging, handleUpdateList } = useDragAndDrop();
  const { t } = useTranslation("global");

  return (
    <div className="containerItems">
      <div className="itemsSchedule">
        <ContainerStart
          items={items}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      </div>
      <div className="daysSchedule">
        <ContainerDays
          date={t("schedule.monday") as Date}
          day={"monday"}
          key={"monday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.tuesday") as Date}
          day={"tuesday"}
          key={"tuesday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.wednesday") as Date}
          day={"wednesday"}
          key={"wednesday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.thursday") as Date}
          day={"thursday"}
          key={"thursday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.friday") as Date}
          day={"friday"}
          key={"friday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.saturday") as Date}
          day={"saturday"}
          key={"saturday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerDays
          date={t("schedule.sunday") as Date}
          day={"sunday"}
          key={"sunday"}
          items={items}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      </div>
    </div>
  );
};
