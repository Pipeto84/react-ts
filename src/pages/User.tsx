import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLogIn } from "../features/user/logInSlice";
import { useTranslation } from "react-i18next";
import "../styles/user/User.css";

export function User() {
  const { t } = useTranslation("global");
  const [acces, setAcces] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const [user, setUser] = useState({
    userName: "",
    password: "",
    acces: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const userFinded = users.find(
      (u) => u.userName === user.userName && u.password === user.password,
    );
    if (userFinded) {
      setAcces(true);
      setUser({ ...user, acces: true });
      dispatch(setLogIn({ ...user, acces: true }));
    } else {
      navigate("/errorUser");
    }
  };
  const handleCerrar = () => {
    setAcces(false);
    setUser({ userName: "", password: "", acces: false });
    dispatch(setLogIn({ userName: "", password: "", acces: false }));
  };
  return (
    <div className="ingresar">
      {!acces && (
        <div className="contenido-ingresar">
          <h3 className="titulo-ingresar">{t("signIn.title")}</h3>
          <div className="formulario-ingresar">
            <label className="label-ingresar">{t("signIn.userLabel")}</label>
            <input
              type="text"
              placeholder={t("signIn.userInput")}
              className="input-ingresar"
              onChange={handleChange}
              name="userName"
              autoFocus
            />
            <label className="label-ingresar">{t("signIn.password")}</label>
            <input
              type="text"
              placeholder={t("signIn.passwordInput")}
              className="input-ingresar"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="boton-ingresar" onClick={handleSubmit}>
            {t("signIn.btnSignIn")}
          </button>
          <NavLink to="/register" className="registro-link">
            {t("signIn.register")}
          </NavLink>
          <button className="boton-cerrar" onClick={handleCerrar}>
            {t("signIn.signOut")}
          </button>
        </div>
      )}
      {acces && (
        <div className="contenido-ingresoU">
          <h3 className="titulo-ingresoU">{t("signIn.welcome")}</h3>
          <p className="texto-ingresoU">{t("signIn.welcomeMessage")}</p>
          <NavLink to="/" className="boton-ingresoU">
            {t("signIn.btnContinue")}
          </NavLink>
        </div>
      )}
    </div>
  );
}
