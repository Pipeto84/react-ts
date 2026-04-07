import type { Date } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { ContainerEmployees } from "./ContainerEmployees";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useAppSelector } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/employeStyle/DragAndDrop.css";

export const DragAndDrop = () => {
  const employees = useAppSelector((state) => state.employees);
  const { isDragging, handleDragging, handleUpdateList } = useDragAndDrop();
  const { t } = useTranslation("global");
  return (
    <div className="container-employees">
      <div className="start-employees">
        <h1 className="titleFont">{t("schedule.title")}</h1>
        <NavLink className="btnNewEmployee" to="/new">
          {t("schedule.newItem")}
        </NavLink>
      </div>
      <div className="employeesSheduling">
        <ContainerEmployees
          items={employees}
          hanleDragging={handleDragging}
          hanleUpdateList={handleUpdateList}
        />
      </div>
      <div className="grid">
        <ContainerCards
          date={t("schedule.monday") as Date}
          key={"monday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerCards
          date={t("schedule.tuesday") as Date}
          key={"tuesday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerCards
          date={t("schedule.wednesday") as Date}
          key={"wednesday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerCards
          date={t("schedule.thursday") as Date}
          key={"thursday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerCards
          date={t("schedule.friday") as Date}
          key={"friday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        /> 
        <ContainerCards
          date={t("schedule.saturday") as Date}
          key={"saturday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <ContainerCards
          date={t("schedule.sunday") as Date}
          key={"sunday"}
          items={employees}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      </div>
    </div>
  );
};
