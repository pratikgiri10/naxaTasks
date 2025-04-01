import { FC } from "react"
import { WeatherState, Weather as WeatherType} from "../sagas/slice"
import WeatherCard from "./WeatherCard"

const Weather: FC<WeatherState> = ({weather}) => {
    const date = new Date()
    console.log(weather)

    const dateSunrise = new Date(Number(weather.city.sunrise) * 1000)
    const sunrise = dateSunrise.toLocaleTimeString()

    const dateSunset = new Date(Number(weather.city.sunset) * 1000)
    const sunset = dateSunset.toLocaleTimeString()

    const today = weather?.list.filter((list) =>{ 
     return  new Date(list.dt_txt).getDate() == new Date().getDate()
    })
    const tomorrow = weather?.list.filter((list) =>{ 
        return  new Date(list.dt_txt).getDate() == date.getDate()+1
       })
    console.log("today: ",tomorrow)
   
  return (
    <div className="flex flex-col gap-10">
         <div className='min-w-64 bg-white px-6 py-3 rounded-xl shadow-lg flex flex-col gap-6'>
          <h1>{weather.city.name}, {weather.city.country}</h1> 
          <h1>Sunrise: {sunrise}</h1> 
          <h1>Sunset: {sunset}</h1>           
    </div>
    
   {weather && <WeatherCard list={today}/>}
    </div>
   
  )
}

export default Weather