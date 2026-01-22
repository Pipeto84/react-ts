import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export type infoMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type searchMovies = {
  page: number;
  results: infoMovie[];
  total_pages: number;
  total_results: number;
};

const urlBase = "https://api.themoviedb.org/3/search/movie?";
const API_KEY = "d6bd2332172452f8a7ef7c9b84b03443";
const initialState: infoMovie[] = [];
const fetchMovie: (movie: string) => Promise<infoMovie[] | undefined> = async (
  movie: string,
) => {
  try {
    const response = await fetch(`${urlBase}query=${movie}&api_key=${API_KEY}`);
    const data: searchMovies = await response.json();
    return data.results;
  } catch (error) {
    console.error("el error en las peliculas es: ", error);
  }
};

export const movieSlice = createSlice({
  name: "infoMovie",
  initialState,
  reducers: {
    searchMovie: (state, action: PayloadAction<string>) => {
      return (state = fetchMovie(action.payload) as unknown as infoMovie[]);
    }
  }
});
export const { searchMovie } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.infoMovie;

export default movieSlice.reducer;
