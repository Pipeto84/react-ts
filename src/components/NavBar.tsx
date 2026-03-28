import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setActive } from "../features/menuSlice";
import iconMenu from "../assets/menu.png";
import { useState } from "react";
import "../styles/NavBar.css";

export const NavBar = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const user = useAppSelector((state) => state.logIn);
  const menu = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const [menuActive, setMenuActive] = useState(menu.active);

  const handleOnclik = () => {
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

  return (
    <div className="topnav">
      <button className="nav-toggle" onClick={handleOnclik}>
        <img className="iconMenu" src={iconMenu} alt="icono menu" />
      </button>
      <div className={activeMenu()}>
        <NavLink className="linkNav" to="/">
          <button className="btnLink" onClick={handleClickLink}>
            Home
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/store">
          <button className="btnLink" onClick={handleClickLink}>
            Store
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/employes">
          <button className="btnLink" onClick={handleClickLink}>
            Schedule
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/search">
          <button className="btnLink" onClick={handleClickLink}>
            Search
          </button>
        </NavLink>
        <NavLink className="linkNav" to="/tasks">
          <button className="btnLink" onClick={handleClickLink}>
            Tasks
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
              Log in
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};
