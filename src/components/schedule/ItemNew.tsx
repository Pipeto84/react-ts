import { ItemsForm } from "../../components/schedule/ItemsForm";
import { useTranslation } from "react-i18next";
import "../../styles/schedule/ItemsForm.css";

export const ItemNew = () => {
  const { t } = useTranslation("global");

  return (
    <div className="container-new-item">
      <ItemsForm data={t("schedule.titleNewItem")} />
    </div>
  );
};
