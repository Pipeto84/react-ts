import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export type infoWeather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  wind: { speed: number; deg: number; gust?: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
};
const urlBasic = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "747159ad5510f324c5f01542f5cdf40c";
const initialState: infoWeather = {
  base: "",
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  dt: 0,
  id: 0,
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  name: "",
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  visibility: 0,
  wind: { speed: 0, deg: 0 },
  weather: [{ id: 0, main: "", description: "", icon: "" }],
};

const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(
      `${urlBasic}q=${city}&appid=${API_KEY}&lang=es`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("el error del clima es: ", error);
  }
};

export const weatherSlice = createSlice({
  name: "infoCity",
  initialState,
  reducers: {
    searchWeather: (state, action: PayloadAction<string>) => {
      return (state = fetchWeather(action.payload) as unknown as infoWeather);
    }
  },
});
export const { searchWeather } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.infoCity;

export default weatherSlice.reducer;
