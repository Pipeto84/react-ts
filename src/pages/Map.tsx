import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import "../styles/Map.css";

export const Map = () => {
  return (
    <div className="mapa">
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <p className="tituloMapa">Navigation Map</p>
      <ul className="lista">
        <li>
          <NavLink to="/" className="nav-link-mapa">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className="nav-link-mapa">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/employes" className="nav-link-mapa">
            Employes
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="nav-link-mapa">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="nav-link-mapa">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className="nav-link-mapa">
            Log in
          </NavLink>
          <ul>
            <li>
              <NavLink to="/register" className="nav-link-mapa">
                Register
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/car" className="nav-link-mapa">
            Shopping cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
