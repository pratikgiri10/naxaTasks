import { useState } from "react"
import { useAppDispatch, useAppSelector} from "./hooks/hooks"
import WeatherComponent from "./components/Weather"
import {Weather} from './sagas/slice'

function App() {
  const [input, setInput] = useState('')
  const weather = useAppSelector((state) => state.weather.weather)
//  console.log(weather)
  const dispatch = useAppDispatch()
 
  const handleFetchWeather = () => {
  if(input ==  '') 
    return
  dispatch({type: 'FETCH_WEATHER', payload: {input}})
  setInput('')
  
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-gray-500">
        <h1 className='text-2xl text-red-500 text-center'>Redux Saga</h1>
        <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        className="bg-white px-4 py-2 border-1 outline-none"
        type="text" placeholder="enter a city"/>
        <button
        onClick={handleFetchWeather}
        className="bg-black text-white px-2 py-1 text-xl duration-300 active:scale-90">Check Weather</button>
        <div>
          {weather && <WeatherComponent weather={weather}/>}
          
        </div>
    </div>
  )
}

export default App
