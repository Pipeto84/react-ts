import { useState, useRef, useEffect } from "react";
import { Weather } from "../components/search/Weather";
import { Movie } from "../components/search/Movie";
import iconWeatherColor from "../assets/weatherColor.svg";
import iconThermometer from "../assets/thermometer.svg";
import iconMovieColor from "../assets/movieColor.svg";
import iconPopcorn from "../assets/popcorn.svg";
import { useTranslation } from "react-i18next";
import "../styles/search/SearchPage.css";

export const SearchPage = () => {
  const { t } = useTranslation("global");
  const [selector, setSelector] = useState("Select a theme");
  const [dataInput, setDataInput] = useState("");
  const [send, setSend] = useState("");
  const [themeIcon, setThemeIcon] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const weather = () => {
    setSelector(t("search.weather"));
    setThemeIcon(true);
    setSend("");
    setClickSearch(false);
    inputRef.current?.focus();
  };
  const movie = () => {
    if (selector === "Movie" || selector === "Película") {
      setClickSearch(false);
    }
    setSelector(t("search.movie"));
    setThemeIcon(true);
    setSend("");
    inputRef.current?.focus();
  };
  const infoSearch = (
    <h4 className="textoSearcher">
      {t("search.info1")}
      <a className="toWeather" href="#" onClick={weather}>
        {t("search.weather")}{" "}
      </a>
      {t("search.info2")}
      <a className="toMovie" href="#" onClick={movie}>
        {t("search.movie")}
      </a>
    </h4>
  );
  const iconsSearch = () => {
    if (selector === "Select a theme" || selector === "Selecciona tema") {
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
    if ((selector === "Weather" || selector === "Clima") && themeIcon) {
      return (
        <>
          <h4 className="textoTema">{t("search.infoWeather")}</h4>
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
    } else if ((selector === "Movie" || selector === "Película") && themeIcon) {
      return (
        <>
          <h4 className="textoTema">{t("search.infoMovie")}</h4>
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
    console.log(selector);
    if (selector === "Weather" || selector === "Clima") {
      setDataInput("");
      setClickSearch(false);
    } else if (selector === "Movie" || selector === "Película") {
      setDataInput("");
      setClickSearch(true);
    }
  };
  const selected = () => {
    switch (selector) {
      case "Select a theme":
      case "Selecciona tema":
        return infoSearch;
      case "Clima":
      case "Weather":
        if (send.length > 0) {
          return <Weather dataInput={send} />;
        } else {
          return;
        }
      case "Película":
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
        return `${t("search.selectPlaceholder")}`;
        return `${t("search.selectPlaceholder")}`;
      case "Weather":
      case "Clima":
        return `${t("search.weatherPlaceholder")}`;
      case "Movie":
      case "Película":
        return `${t("search.moviePlaceholder")}`;
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
  useEffect(() => {
    setSelector(`${t("search.btnSelect")}`);
  }, [`${t("search.btnSearch")}`]);

  return (
    <div className={changeHeight()}>
      <form onSubmit={handleSubmit} className="container-search">
        <div className="dropdown">
          <button className="dropbtn" disabled>
            {selector}
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={weather}>
              {t("search.weather")}
            </a>
            <a href="#" onClick={movie}>
              {t("search.movie")}
            </a>
          </div>
        </div>
        <div className="searcher">
          <button
            type="submit"
            className="btnSearch"
            onClick={handleClickSearch}
          >
            {t("search.btnSearch")}
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
