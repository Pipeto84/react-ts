import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { addUser } from "../features/user/usersSlice";
import { setLogIn } from "../features/user/logInSlice";
import { useTranslation } from "react-i18next";
import "../styles/Register.css";

export function Register() {
  const { t } = useTranslation("global");
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);
  const [newUser, setNewUser] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (newUser.userName === "" || newUser.password === "") {
      alert("Please complete the information");
      return;
    } else {
      setAdded(true);
      dispatch(addUser(newUser));
      dispatch(setLogIn({ ...newUser, acces: true }));
      setNewUser({ userName: "", password: "" });
    }
  };
  const handleClass = () => {
    if (added) {
      return "registrado";
    } else {
      return "registro";
    }
  };
  return (
    <div className={handleClass()}>
      {!added && (
        <div className="contenido-registro">
          <h3 className="titulo-registro">{t("register.title")}</h3>
          <div className="formulario-registro">
            <label className="label-registro">{t("register.nameLabel")}</label>
            <input
              type="text"
              placeholder={t("register.nameInput")}
              className="input-registro"
              autoFocus
            />
            <label className="label-registro">
              {t("register.lastNameLabel")}
            </label>
            <input
              type="text"
              placeholder={t("register.lastNameInput")}
              className="input-registro"
            />
            <label className="label-registro">{t("register.phoneLabel")}</label>
            <input
              type="text"
              placeholder={t("register.phoneInput")}
              className="input-registro"
            />
            <label className="label-registro">
              {t("register.birthDateLabel")}
            </label>
            <input
              type="date"
              placeholder={t("register.birthDateInput")}
              className="input-registro"
            />
            <label className="label-registro">{t("register.userLabel")}</label>
            <input
              type="text"
              placeholder={t("register.userInput")}
              className="input-registro"
              onChange={handleChange}
              name="userName"
            />
            <label className="label-registro">{t("register.password")}</label>
            <input
              type="text"
              placeholder={t("register.passwordInput")}
              className="input-registro"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="boton-registro" onClick={handleSubmit}>
            {t("register.btnRegister")}
          </button>
        </div>
      )}
      {added && (
        <div className="contenido-agregado">
          <h3 className="titulo-agregado">{t("register.welcome")}</h3>
          <p className="texto-agregado">
            {t("register.welcomeMessage")}
          </p>
          <NavLink to="/" className="boton-agregado">
            {t("register.btnContinue")}
          </NavLink>
        </div>
      )}
    </div>
  );
}
