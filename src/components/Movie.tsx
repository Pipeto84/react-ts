import { useEffect, useState } from "react";
import type { infoMovie } from "../interfaces/index";
import "../styles/SearchPage.css";

interface Props {
  dataInput: string
}


export const Movie = ({ dataInput }: Props) => {
  const [infoMovie, setInfoMovie] = useState<infoMovie[]>([]);
  const urlBaseMovie = "https://api.themoviedb.org/3/search/movie?";
  const API_KEY_Movie = "d6bd2332172452f8a7ef7c9b84b03443";
  const fetchMovie = async (movie: string) => {
    try {
      const response = await fetch(
        `${urlBaseMovie}query=${movie}&api_key=${API_KEY_Movie}`,
      );
      const data = await response.json();
      setInfoMovie(data.results);
    } catch (error) {
      console.error("el error en las peliculas es: ", error);
    }
  };

  const urlImage = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetchMovie(dataInput);
  }, [dataInput]);
  return (
    <div className="movieList">
      {infoMovie &&
        infoMovie.map((movie) => (
          <div key={movie.id} className="movieCard">
            <img src={`${urlImage}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h5>{movie.release_date.substring(0, 4)}</h5>
            <p>{movie.overview}</p>
          </div>
        ))}
    </div>
  );
};
