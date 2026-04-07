import { FormEmployee } from "../../components/FormEmployee";
import {useTranslation} from 'react-i18next'
import "../../styles/employeStyle/FormEmployee.css";

export const Edit = () => {
  const { t } = useTranslation("global");
  return (
    <div className="containerEditEmployee">
      <FormEmployee data={t("schedule.titleEditItem")} />
    </div>
  );
};
