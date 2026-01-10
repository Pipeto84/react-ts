import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="topnav">
      <NavLink className="active" to="/">
        Home
      </NavLink>
      <NavLink className="active" to="/tasks">
        Tasks
      </NavLink>
      <NavLink className="active" to="/employes">
        Employes
      </NavLink>
    </div>
  );
};
