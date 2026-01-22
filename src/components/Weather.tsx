import { useAppSelector } from '../app/hooks'
import '../styles/SearchPage.css'

export const Weather = () => {
  const Kelvin = 273.15
  const urlImg = 'https://openweathermap.org/img/wn/'
  const infoCity = useAppSelector((state) => state.infoCity);
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
