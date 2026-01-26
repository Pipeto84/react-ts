import type {infoWeather} from '../interfaces/index'
import { useEffect, useState } from 'react'
import '../styles/SearchPage.css'

interface Props {
  dataInput: string
}

export const Weather = ({ dataInput }: Props) => {
  const [infoCity, setInfoCity] = useState<infoWeather>({} as infoWeather);
  const urlBasicWeather = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY_Weather = "747159ad5510f324c5f01542f5cdf40c";
  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(
        `${urlBasicWeather}q=${city}&appid=${API_KEY_Weather}&lang=es`,
      );
      const data: infoWeather = await response.json();
      setInfoCity(data);
      console.log(infoCity)
    } catch (error) {
      console.error("el error del clima es: ", error);
    }
  };
  console.log(dataInput)
  const Kelvin = 273.15
  const urlImg = 'https://openweathermap.org/img/wn/'
  useEffect(() => {
    fetchWeather(dataInput);
  }, [dataInput]);
  return (
    <div>
      {
        infoCity && (
          <div className='infoWeather'>
            <h2>{infoCity.name + ', ' + infoCity.sys.country }</h2>
            <h5>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(0)} ॰C</h5>
            <h5>Descripcion meteorologica: {infoCity.weather[0].description}</h5>
            <img src={`${urlImg}${infoCity.weather[0].icon}@2x.png`}/>
          </div>
        )
      }
    </div>
  )
}
