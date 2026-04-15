import { ItemsForm } from "../../components/schedule/ItemsForm";
import { useTranslation } from "react-i18next";
import "../../styles/schedule/ItemsForm.css";

export const ItemEdit = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container-edit-item">
      <ItemsForm data={t("schedule.titleEditItem")} />
    </div>
  );
};
