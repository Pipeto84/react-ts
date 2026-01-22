import { useState, useRef } from "react";
import { Weather } from "../components/Weather";
import { Movie } from "../components/Movie";
import { useAppDispatch } from "../app/hooks";
import { searchWeather } from "../features/weatherSlice";
import { searchMovie } from "../features/movieSlice";
import iconWeatherColor from "../assets/weatherColor.svg";
import iconThermometer from "../assets/thermometer.svg";
import iconMovieColor from "../assets/movieColor.svg";
import iconPopcorn from "../assets/popcorn.svg";
import "../styles/SearchPage.css";

export const SearchPage = () => {
  const [selector, setSelector] = useState("Searcher");
  const [dataInput, setDataInput] = useState("");
  const [send, setSend] = useState("");
  const [themeIcon, setThemeIcon] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const weather = () => {
    setSelector("Weather");
    setThemeIcon(true);
    setSend("");
    inputRef.current?.focus();
  };
  const movie = () => {
    setSelector("Weather");
    setThemeIcon(true);
    setSend("");
    inputRef.current?.focus();
  };
  const infoSearch = (
    <h4 className="textoSearcher">
      Busca el{" "}
      <a className="toWeather" href="#" onClick={weather}>
        Clima{" "}
      </a>
      actual de una ciudad o busca información de una
      <a className="toMovie" href="#" onClick={movie}>
        {" "}
        Película.
      </a>
    </h4>
  );
  const iconsSearch = () => {
    if (selector === "Searcher") {
      return (
        <>
          <a href="#" onClick={weather}>
            <img
              className="iconWeather1"
              src={iconWeatherColor}
              alt="icono clima"
            />
          </a>
          <a href="#" onClick={movie}>
            <img
              className="iconMOvie1"
              src={iconMovieColor}
              alt="icono pelicula"
            />
          </a>
        </>
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
      dispatch(searchWeather(dataInput));
      setDataInput("");
    } else if (selector === "Movie") {
      dispatch(searchMovie(dataInput));
      setDataInput("");
    }
  };

  const selected = () => {
    switch (selector) {
      case "Searcher":
        return infoSearch;
      case "Weather":
        if (send.length > 0) {
          return <Weather></Weather>;
        } else {
          return;
        }
      case "Movie":
        if (send.length > 0) {
          return <Movie></Movie>;
        } else {
          return;
        }
      default:
        return;
    }
  };
  const handlePlaceHolder = () => {
    switch (selector) {
      case "Searcher":
        return "Select a theme...";
      case "Weather":
        return "Enter a city...";
      case "Movie":
        return "Enter movie title...";
      default:
        return "";
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 searcher">
          <button type="submit" className="btn btn-outline-dark buttonSearch">
            Search
          </button>
          <button
            type="button"
            className="buttonList dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu listThemes">
            <li>
              <a onClick={weather} className="dropdown-item">
                Weather
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a onClick={movie} className="dropdown-item">
                Movie
              </a>
            </li>
          </ul>
          <input
            type="text"
            className="form-control , inputText"
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
