import "../styles/HomePage.css";
import reactLogo from "../assets/react.svg";

export const HomePage = () => {
  return (
    <div className="contenedorHome">
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://github.com/Pipeto84" target="_blank" className="aTitulo">
        <h1 className="h1Home">React</h1>
      </a>
      <p className="infoHome">
        This website is designed in React with TypeScript. Here you'll find a
        store with a shopping cart, employee scheduling with drag and drop, user
        login and registration, search bars, and a task lists.<br /> Designed by Felipe
        Jaramillo U. ("Pipeto84" GitHub)
      </p>
    </div>
  );
};
