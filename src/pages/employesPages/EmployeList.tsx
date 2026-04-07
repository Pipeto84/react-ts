import { CardList } from "../../components/CardList";
import { useAppSelector } from "../../app/hooks";
import {useTranslation} from 'react-i18next'
import "../../styles/employeStyle/ListEmployees.css";

export const List = () => {
  const employeesList = useAppSelector((state) => state.employees);
  const {t} = useTranslation("global"); 
  return (
    <div className="employeesList">
      <p className="titleList">{t("schedule.itemsList")}</p>
      <div className="employees">
        {employeesList.map((item) => (
          <CardList data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
