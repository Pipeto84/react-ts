import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import "../styles/Map.css";

export const Map = () => {
  const { t } = useTranslation("global");
  return (
    <div className="mapa">
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <p className="tituloMapa">{t("map.title")}</p>
      <ul className="lista">
        <li>
          <NavLink to="/" className="nav-link-mapa">
            {t("map.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className="nav-link-mapa">
            {t("map.store")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employes" className="nav-link-mapa">
            {t("map.schedule")}
          </NavLink>
          <ul>
            <li>
              <NavLink to="/new" className="nav-link-mapa">
                {t("map.newItem")}
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/search" className="nav-link-mapa">
            {t("map.search")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="nav-link-mapa">
            {t("map.tasks")}
          </NavLink>
          <ul>
            <li>
              <NavLink to="/newList" className="nav-link-mapa">
                {t("map.newList")}
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/user" className="nav-link-mapa">
            {t("map.login")}
          </NavLink>
          <ul>
            <li>
              <NavLink to="/register" className="nav-link-mapa">
                {t("map.register")}
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/car" className="nav-link-mapa">
            {t("map.cart")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
