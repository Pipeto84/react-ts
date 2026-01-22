import { useAppSelector } from '../app/hooks'
import '../styles/SearchPage.css'

import '../styles/Movie.css'

export const Movie = () => {
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const infoMovie  = useAppSelector((state) => state.infoMovie);
  return (
    <div className="movieList">
      {
        infoMovie &&
        infoMovie.map(movie => (
          <div key={movie.id} className="movieCard">
            <img src={`${urlImage}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h5>{movie.release_date.substring(0,4)}</h5>
            <p>{movie.overview}</p>
          </div>
        ))
      }
    </div>
  )
}