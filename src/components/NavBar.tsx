import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../app/hooks";

export const NavBar = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
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
      <NavLink className="active" to="/store">
        Store
      </NavLink>
      <NavLink to="/car">
        <Badge badgeContent={shoppingList.length} color="secondary">
          <ShoppingCartIcon color="inherit" />
        </Badge>
      </NavLink>
    </div>
  );
};
