import React, { useEffect, useState } from "react";
import type { ItemSchedule } from "../../interfaces/index";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { addItem, editingItem } from "../../features/scheduleSlice";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import "../../styles/schedule/ItemsForm.css";

interface Props {
  data: string;
}
export const ItemsForm = ({ data }: Props) => {
  const items = useAppSelector((state) => state.itemsSchedule);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  const [item, setItem] = useState<ItemSchedule>({
    id: "",
    name: "",
    description: "",
    date: "",
  });
  const [canceled, setCanceled] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (params.id) {
      if (!canceled) {
        dispatch(editingItem(item));
      }
    } else if (item.name.length > 0 && item.description.length > 0) {
      if (!canceled) {
        dispatch(addItem({ ...item, id: uuid() }));
      }
    }
    navigate("/schedule");
  };
  const handleCancel = () => {
    setCanceled(true);
  };
  const handleSave = () => {
    setCanceled(false);
  };

  useEffect(() => {
    if (params.id) {
      const itemFound = items.find((item) => item.id === params.id);
      if (itemFound) {
        setItem(itemFound);
      }
    }
  }, [params.id, items]);

  return (
    <div className="cardNewItem">
      <p className="titleNewItem">{data}</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">{t("schedule.labelItem")}</label>
        <input
          name="name"
          className="inputText"
          type="text"
          value={item.name}
          onChange={handleChangeName}
          autoComplete="off"
          autoFocus
          placeholder={t("schedule.inputItem")}
        />
        <label className="label">{t("schedule.labelDescription")}</label>
        <textarea
          name="description"
          className="inputTextDescription"
          value={item.description}
          onChange={handleChangeDescription}
          autoComplete="off"
          placeholder={t("schedule.inputDescription")}
          rows={3}
        />
        <div className="buttons">
          <button
            className="saveButton"
            onClick={handleSave}
            disabled={item.name.length < 1 || item.description.length < 1}
          >
            {t("schedule.save")}
          </button>
          <button className="cancelButton" onClick={handleCancel}>
            {t("schedule.cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};
