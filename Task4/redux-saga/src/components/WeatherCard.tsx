import { FC } from "react"
import { List, Weather } from "../sagas/slice"

const WeatherCard: FC<Weather> = ({list}) => {
    console.log(list)
    return (
        <div className="relative flex flex-col gap-4 ">
             <div className="relative flex flex-col gap-4 items-center ">
            
            {list?.map((weather, index) => (
                <div  key={weather.dt_txt} className="flex gap-4 items-center ">
                    <h1 className='bg-white text-black px-6 py-3 rounded-xl shadow-gray-300 '>{new Date(weather.dt_txt).toLocaleDateString()}</h1>
                     <div className='bg-white text-black px-6 py-3 rounded-xl shadow-gray-300 '>
                        <h1>{index}</h1>
                        <h1>{new Date(weather.dt_txt).toLocaleTimeString()}</h1>      
                        <h1>{weather.main.temp}&deg;C</h1>
                        <h1>{weather.weather[0].description}</h1>
                        {/* <h1>{weather.wind}</h1> */}
                    </div>
                </div>
               
          ))}
      
        </div>
       
       
        </div>
       //   <div className="flex gap-4 items-center">
//   <h1 className='bg-white text-black px-6 py-3 rounded-xl shadow-gray-300 '>{new Date(tomorrow[0].dt * 1000).toLocaleDateString()}</h1>
//   {tomorrow?.map((weather) => (
//           <div key={weather.dt_txt} className='bg-white text-black px-6 py-3 rounded-xl shadow-gray-300 '>
//           <h1>{new Date(weather.dt_txt).toLocaleTimeString()}</h1>      
//           <h1>{weather.main.temp}&deg;C</h1>
//           <h1>{weather.weather[0].description}</h1>
//           {/* <h1>{weather.wind}</h1> */}
//       </div>
//   ))}
// </div>
       
       

    )
  }
  

  export default WeatherCard