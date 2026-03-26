import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../app/hooks";
import menu from "../assets/menu2.png";
import "../styles/NavBar.css";
import { useState } from "react";

export const NavBar = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const user = useAppSelector((state) => state.logIn);
  const [menuActive, setMenuActive] = useState(false);

  const handleOnclik = () => {
    setMenuActive(!menuActive);
  };
  const activeMenu = () => {
    if (menuActive) {
      return "nav-menu nav-menu_visible";
    } else {
      return "nav-menu";
    }
  };
  return (
    <div className="topnav">
      <button className="nav-toggle" onClick={handleOnclik}>
        <img className="iconMenu" src={menu} alt="icono menu" />
      </button>
      <div className={activeMenu()}>
        <NavLink className="linkNav" to="/">
          Home
        </NavLink>
        <NavLink className="linkNav" to="/store">
          Store
        </NavLink>
        <NavLink className="linkNav" to="/employes">
          Employees
        </NavLink>
        <NavLink className="linkNav" to="/search">
          Search
        </NavLink>
        <NavLink className="linkNav" to="/tasks">
          Tasks
        </NavLink>
        {user.acces && (
          <NavLink to="/user" className="nav-link-user">
            {user.userName}
          </NavLink>
        )}
        {!user.acces && (
          <NavLink className="linkNav" to="/user">
            Log in
          </NavLink>
        )}
        <NavLink to="/car" className="linkNav">
          <Badge badgeContent={shoppingList.length} color="secondary">
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </NavLink>
      </div>
    </div>
  );
};
