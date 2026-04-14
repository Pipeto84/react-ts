// import type { Date, Data } from "../interfaces";
// import { CardItem } from "./CardItem";
// import { dragEmployee } from "../features/employeSlice";
// import { useAppDispatch } from "../app/hooks";
// import "../styles/employeStyle/ContainerCards.css";

// interface Props {
//   day: Date;
//   date: Date;
//   items: Data[];
//   isDragging: boolean;
//   handleDragging: (dragging: boolean) => void;
//   handleUpdateList: (id: string, date: Date) => void;
// }

// export const ContainerCards = ({
//   day,
//   items = [],
//   date,
//   isDragging,
//   handleDragging,
//   handleUpdateList,
// }: Props) => {
//   const dispatch = useAppDispatch();
//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const updateEployee = {
//       id: e.dataTransfer.getData("text"),
//       date: day,
//     };
//     dispatch(dragEmployee(updateEployee));
//     handleDragging(false);
//   };

//   return (
//     <div
//       className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       <p>{date}</p>
//       {items.map(
//         (item) =>
//           day === item.date && (
//             <CardItem
//               data={item}
//               key={item.id}
//               handleDragging={handleDragging}
//               handleUpdateList={handleUpdateList}
//             />
//           ),
//       )}
//     </div>
//   );
// };
