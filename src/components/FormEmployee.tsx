import React, { useEffect, useState } from "react";
import type { Data } from "../interfaces/index";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { addEmployee, editingEmployee } from "../features/employeSlice";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import "../styles/employeStyle/FormEmployee.css";

interface Props {
  data: string;
}
export const FormEmployee = ({ data }: Props) => {
  const employees = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("global");

  const [employee, setEmployee] = useState<Data>({
    id: "",
    alias: "",
    name: "",
    date: "",
  });
  const [canceled, setCanceled] = useState(false);

  const handleChangeAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (params.id) {
      if (!canceled) {
        dispatch(editingEmployee(employee));
      }
    } else if (employee.alias.length > 0 && employee.name.length > 0) {
      if (!canceled) {
        dispatch(addEmployee({ ...employee, id: uuid() }));
      }
    }
    navigate("/employes");
  };
  const handleCancel = () => {
    setCanceled(true);
  };
  const handleSave = () => {
    setCanceled(false);
  };

  useEffect(() => {
    if (params.id) {
      const employeeFound = employees.find((item) => item.id === params.id);
      if (employeeFound) {
        setEmployee(employeeFound);
      }
    }
  }, [params.id, employees]);

  return (
    <div className="cardNewEmployee">
      <p className="titleNewEmployee">{data}</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">{t("schedule.labelItem")}</label>
        <input
          name="alias"
          className="inputText"
          type="text"
          value={employee.alias}
          onChange={handleChangeAlias}
          autoComplete="off"
          autoFocus
          placeholder={t("schedule.inputItem")}
        />
        <label className="label">{t("schedule.labelDescription")}</label>
        <textarea
          name="name"
          className="inputTextDescription"
          value={employee.name}
          onChange={handleChangeName}
          autoComplete="off"
          placeholder={t("schedule.inputDescription")}
          rows={3}
        />
        <div className="buttons">
          <button
            className="saveButton"
            onClick={handleSave}
            disabled={employee.alias.length < 1 || employee.name.length < 1}
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
