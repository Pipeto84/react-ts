import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../app/hooks";

export const NavBar = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const user = useAppSelector((state) => state.logIn);
  return (
    <div className="topnav">
      <NavLink className="linkNav" to="/">
        Home
      </NavLink>
      <NavLink className="linkNav" to="/tasks">
        Tasks
      </NavLink>
      <NavLink className="linkNav" to="/employes">
        Employees
      </NavLink>
      <NavLink className="linkNav" to="/search">
        Search
      </NavLink>
      <NavLink className="linkNav" to="/store">
        Store
      </NavLink>
      {user.acces && (
        <NavLink to="/user" className="nav-link-user">
          {user.name}
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
  );
};
