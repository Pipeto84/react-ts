import type { ItemSchedule, Date } from "../../interfaces/index";
import { useTranslation } from "react-i18next";
import { CardItem } from "../../components/schedule/CardItem";
import "../../styles/schedule/ContainerStart.css";

interface Props {
  items: ItemSchedule[];
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: string, date: Date) => void;
}

export const ContainerStart = ({
  items = [],
  handleDragging,
  handleUpdateList,
}: Props) => {
  const { t } = useTranslation("global");
  return (
    <div className="containerStart">
      <p className="titleItems">{t("schedule.items")}</p>
      <div className="cardsStart">
        {items.map(
          (item) =>
            "" === item.date && (
              <CardItem
                data={item}
                key={item.id}
                handleDragging={handleDragging}
                handleUpdateList={handleUpdateList}
              />
            ),
        )}
      </div>
    </div>
  );
};
