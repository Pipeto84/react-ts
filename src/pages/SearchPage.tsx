import { useState, useRef } from "react";
import "../styles/SearchPage.css"

export const SearchPage = () => {
  const [selector, setSelector] = useState("Searcher")
  const [dataInput, setDataInput] = useState("")
  const [send, setSend] = useState("")
  const [themeIcon, setThemeIcon] = useState(false)
  const inputRef= useRef<HTMLInputElement>(null);

  const weather = () => {};
  const movie = () => {};
  return (
    <div className="search">
      <form action="">
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
          <ul className="dropdown-menu listaTemas">
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
            className="form-control , entrada"
            // value={dataInput}
            // onChange={handleChanges}
            // placeholder={handlePlaceHolder()}
            id="inputSearch"
            autoComplete="off"
            // ref={inputRef}
          />
        </div>
      </form>
    </div>
  );
};
