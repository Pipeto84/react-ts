import { CardList } from "../../components/schedule/CardList";
import { useAppSelector } from "../../app/hooks";
import {useTranslation} from 'react-i18next'
import "../../styles/employeStyle/ListEmployees.css";

export const ItemsList = () => {
  const employeesList = useAppSelector((state) => state.itemsSchedule);
  const {t} = useTranslation("global"); 
  return (
    <div className="ItemsList">
      <p className="titleList">{t("schedule.itemsList")}</p>
      <div className="items">
        {employeesList.map((item) => (
          <CardList data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
