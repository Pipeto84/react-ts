import { useState, useRef } from "react";
import { Weather } from "../components/Weather";
import { Movie } from "../components/Movie";
import iconWeatherColor from "../assets/weatherColor.svg";
import iconThermometer from "../assets/thermometer.svg";
import iconMovieColor from "../assets/movieColor.svg";
import iconPopcorn from "../assets/popcorn.svg";
import "../styles/SearchPage.css";

export const SearchPage = () => {
  const [selector, setSelector] = useState("Select a theme");
  const [dataInput, setDataInput] = useState("");
  const [send, setSend] = useState("");
  const [themeIcon, setThemeIcon] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const weather = () => {
    setSelector("Weather");
    setThemeIcon(true);
    setSend("");
    setClickSearch(false);
    inputRef.current?.focus();
  };
  const movie = () => {
    if (selector === "Movie") {
      setClickSearch(false);
    }
    setSelector("Movie");
    setThemeIcon(true);
    setSend("");
    inputRef.current?.focus();
  };
  const infoSearch = (
    <h4 className="textoSearcher">
      Find the current{" "}
      <a className="toWeather" href="#" onClick={weather}>
        Weather{" "}
      </a>
      in a city or find information about a {""}
      <a className="toMovie" href="#" onClick={movie}>
        Movie
      </a>
    </h4>
  );
  const iconsSearch = () => {
    if (selector === "Select a theme") {
      return (
        <div>
          <a href="#" onClick={weather}>
            <img
              className="iconWeather1"
              src={iconWeatherColor}
              alt="icono clima"
            />
          </a>
          <a href="#" onClick={movie}>
            <img
              className="iconMovie1"
              src={iconMovieColor}
              alt="icono pelicula"
            />
          </a>
        </div>
      );
    }
  };
  const iconsInfoTheme = () => {
    if (selector === "Weather" && themeIcon) {
      return (
        <>
          <h4 className="textoTema">Find the current weather in a city</h4>
          <img
            className="iconWeather1"
            src={iconWeatherColor}
            alt="icon weather"
          />
          <img
            className="iconWeather2"
            src={iconThermometer}
            alt="icon weather"
          />
        </>
      );
    } else if (selector === "Movie" && themeIcon) {
      return (
        <>
          <h4 className="textoTema">Find information about a movie</h4>
          <img className="iconMovie1" src={iconMovieColor} alt="icon movie" />
          <img className="iconMovie2" src={iconPopcorn} alt="icon movie" />
        </>
      );
    }
  };
  const handleChanges = (e: any) => {
    setDataInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSend(dataInput);
    setThemeIcon(false);
    if (selector === "Weather") {
      setDataInput("");
      setClickSearch(false);
    } else if (selector === "Movie") {
      setDataInput("");
      setClickSearch(true);
    }
  };
  const selected = () => {
    switch (selector) {
      case "Select a theme":
        return infoSearch;
      case "Weather":
        if (send.length > 0) {
          return <Weather dataInput={send} />;
        } else {
          return;
        }
      case "Movie":
        if (send.length > 0) {
          return <Movie dataInput={send} />;
        } else {
          return;
        }
      default:
        return;
    }
  };
  const handlePlaceHolder = () => {
    switch (selector) {
      case "Select a theme":
        return " Select a theme...";
      case "Weather":
        return " Enter a city...";
      case "Movie":
        return " Enter movie title...";
      default:
        return "";
    }
  };
  const changeHeight = () => {
    if (selector === "Movie" && clickSearch === true) {
      return "searchMovie";
    } else {
      return "search";
    }
  };
  const handleClickSearch = () => {
    setClickSearch(true);
  };
  return (
    <div className={changeHeight()}>
      <form onSubmit={handleSubmit} className="container-search">
        <div className="dropdown">
          <button className="dropbtn" disabled>
            {selector}
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={weather}>
              Weather
            </a>
            <a href="#" onClick={movie}>
              Movies
            </a>
          </div>
        </div>
        <div className="searcher">
          <button
            type="submit"
            className="btnSearch"
            onClick={handleClickSearch}
          >
            Search
          </button>
          <input
            type="text"
            className="inputSearch"
            value={dataInput}
            onChange={handleChanges}
            placeholder={handlePlaceHolder()}
            id="inputSearch"
            autoComplete="off"
            ref={inputRef}
          />
        </div>
      </form>
      {selected()}
      {iconsSearch()}
      {iconsInfoTheme()}
    </div>
  );
};
