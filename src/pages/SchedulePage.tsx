import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { DragAndDrop } from "../components/schedule/DragAndDrop";
import { ItemsList } from "../components/schedule/ItemsList";

import "../styles/schedule/SchedulePage.css";

export const SchedulePage = () => {
  const { t } = useTranslation("global");

  return (
    <div className="schedulePage">
      <div className="container-schedule">
        <div className="start-schedule">
          <h1 className="titleSchedule">{t("schedule.title")}</h1>
          <NavLink className="btnNewItem" to="/new">
            {t("schedule.newItem")}
          </NavLink>
        </div>
        <DragAndDrop />
      </div>
        <ItemsList />
    </div>
  );
};
