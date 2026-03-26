import reactLogo from "../assets/react.svg";
import { useAppSelector } from "../app/hooks";
import "../styles/HomePage.css";

export const HomePage = () => {
  const menu = useAppSelector((state) => state.menu);
  const handleClassName = () => {
    if (menu.active) {
      return "logReact";
    } else {
      return "logo react";
    }
  };
  return (
    <div className="contenedorHome">
      <a target="_blank" className="targetLogo">
        <img src={reactLogo} className={handleClassName()} alt="React logo" />
      </a>
      <a href="https://github.com/Pipeto84" target="_blank" className="aTitulo">
        <h1 className="h1Home">React</h1>
      </a>
      <p className="infoHome">
        This website is designed in React with TypeScript. Here you'll find a
        store with a shopping cart, employee scheduling with drag and drop, user
        login and registration, search bars, and a task lists.
        <br /> Designed by Felipe Jaramillo U. ("Pipeto84" GitHub)
      </p>
    </div>
  );
};
