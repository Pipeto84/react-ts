import { FormEmployee } from "../../components/FormEmployee";
import { useTranslation } from "react-i18next";
import "../../styles/employeStyle/FormEmployee.css";

export const New = () => {
  const { t } = useTranslation("global");

  return (
    <div className="container-new-employee">
      <FormEmployee data={t("schedule.titleNewItem")} />
    </div>
  );
};
