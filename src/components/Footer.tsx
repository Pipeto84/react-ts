import github from "../assets/github.png";
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import gps from '../assets/gps.png'
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="infoContact">
          <img src={email} className="iconContact" alt="email" />
          <p className="textContact">pipejarauribeboteroa@gmail.com</p>
        </div>
        <div className="infoContact">
          <img src={phone} className="iconContact" alt="phone" />
          <p className="textContact">+57 301 423 08 99</p>
        </div>
        <div className="infoContact">
          <img src={gps} className="iconContact" alt="gps" />
          <p className="textContact">Medellín, Colombia</p>
        </div>
      </div>
      <div className="iconos">
        <a href="https://github.com/Pipeto84" target="_blank">
          <img src={github} className="github" alt="github" />
        </a>
      </div>
      <NavLink to="/map" className="mapa-link">
        Navigation Map
      </NavLink>
    </div>
  );
};
