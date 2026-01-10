import "../styles/HomePage.css";
import reactLogo from "../assets/react.svg";

export const HomePage = () => {
  return (
    <div className="contenedorHome">
      <a href="https://github.com/Pipeto84" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://github.com/Pipeto84" target="_blank" className="aTitulo">
        <h1 className="h1Home">React TS Pipeto84</h1>
      </a>
    </div>
  );
};
