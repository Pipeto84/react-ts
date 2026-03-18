import github from "../assets/github.png";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <h2>React TS</h2>
      <div className="iconos">
        <a href="https://github.com/Pipeto84" target="_blank">
          <img src={github} className="github" alt="github" />
        </a>
      </div>
      <NavLink to="/mapa" className="mapa-link">
        Navigation Map
      </NavLink>
    </div>
  );
};
