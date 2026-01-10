import type { Data, Date } from "../interfaces";
import { CardItem } from "./CardItem";
import "../styles/employeStyle/ContainerEmployees.css";

interface Props {
  items: Data[];
  hanleDragging: (dragging: boolean) => void;
  hanleUpdateList: (id: string, date: Date) => void;
}

export const ContainerEmployees = ({
  items = [],
  hanleDragging,
  hanleUpdateList,
}: Props) => {
  return (
    <div className="containerEmployees">
      <p>Employees</p>
      <div className="all">
        {items.map(
          (item) =>
            "" === item.date && (
              <CardItem
                data={item}
                key={item.id}
                handleDragging={hanleDragging}
                handleUpdateList={hanleUpdateList}
              />
            )
        )}
      </div>
    </div>
  );
};
