import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setActive } from "../features/menuSlice";
import { setActiveTrans } from "../features/translateSlice";
import iconMenu from "../assets/menu.png";
import iconTranslate from "../assets/translate.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/NavBar.css";

export const NavBar = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const user = useAppSelector((state) => state.logIn);
  const menu = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const [menuActive, setMenuActive] = useState(menu.active);
  const [languagesActive, setlanguagesActive] = useState(false)
  const { t, i18n } = useTranslation("global");

  const handleOnclikMenu = () => {
    setMenuActive(!menuActive);
    dispatch(setActive(!menuActive));
  };
  const activeMenu = () => {
    if (menuActive) {
      return "nav-menu nav-menu_visible";
    } else {
      return "nav-menu";
    }
  };
  const handleClickLink = () => {
    setMenuActive(false);
  };
  const handleOnclikTranslate = () => {
    setlanguagesActive(!languagesActive);
    dispatch(setActiveTrans(!languagesActive));
  };
  const activeLanguage = () => {
    if (languagesActive) {
      return "languages languages_visible";
    } else {
      return "languages";
    }
  };
  const handleClickEn = () => {
    i18n.changeLanguage("en");
    setlanguagesActive(false);
  }
  const handleClickEs = () => {
    i18n.changeLanguage("es");
    setlanguagesActive(false);
  }

  return (
    <div className="topnav">
      <button className="nav-toggle" onClick={handleOnclikMenu}>
        <img className="iconMenu" src={iconMenu} alt="icono menu" />
      </button>
      <div className={activeMenu()}>
        <NavLink className="linkNav" to="/">
          <button className="btnLink" onClick={handleClickLink}>
            {t("navBar.home")}
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/store">
          <button className="btnLink" onClick={handleClickLink}>
            {t("navBar.store")}
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/employes">
          <button className="btnLink" onClick={handleClickLink}>
            {t("navBar.schedule")}
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/search">
          <button className="btnLink" onClick={handleClickLink}>
            {t("navBar.search")}
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/tasks">
          <button className="btnLink" onClick={handleClickLink}>
            {t("navBar.tasks")}
          </button>
        </NavLink>
        <NavLink to="/car" className="linkNav">
          <button className="btnLink" onClick={handleClickLink}>
            <Badge badgeContent={shoppingList.length} color="secondary">
              <ShoppingCartIcon color="inherit" />
            </Badge>
          </button>
        </NavLink>
      </div>
      <div className="navUser">
        {user.acces && (
          <NavLink to="/user" className="nav-link-user">
            <button className="btnLink-user" onClick={handleClickLink}>
              {user.userName}
            </button>
          </NavLink>
        )}
        {!user.acces && (
          <NavLink className="linkNav-user" to="/user">
            <button className="btnLinkLogin" onClick={handleClickLink}>
              {t("navBar.login")}
            </button>
          </NavLink>
        )}
      </div>
      <button className="btnTranslate" onClick={handleOnclikTranslate}>
        <img
          className="iconTranslate"
          src={iconTranslate}
          alt="icono translate"
        />
      </button>
      <div className={activeLanguage()}>
        <a className="language" href="#" onClick={handleClickEn}>English</a>
        <a className="language" href="#" onClick={handleClickEs}>Español</a>
      </div>
    </div>
  );
};
