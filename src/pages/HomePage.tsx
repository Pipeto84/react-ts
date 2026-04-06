import reactLogo from "../assets/react.svg";
import { useAppSelector } from "../app/hooks";
import { useTranslation } from "react-i18next";
import "../styles/HomePage.css";

export const HomePage = () => {
  const menu = useAppSelector((state) => state.menu);
  const [t, i18n] = useTranslation("home");
  const handleClassName = () => {
    if (menu.active) {
      return "logReact";
    } else {
      return "logo react";
    }
  };

  return (
    <div className="contenedorHome">
      <a target="_blank" className="targetLogo">
        <img src={reactLogo} className={handleClassName()} alt="React logo" />
      </a>
      <a href="https://github.com/Pipeto84" target="_blank" className="aTitulo">
        <h1 className="h1Home">React</h1>
      </a>
      <p className="infoHome">
        {t("home.welcome")}
        <br /> {t("home.designed")} Felipe Jaramillo U. ("Pipeto84" GitHub)
      </p>
    </div>
  );
};
