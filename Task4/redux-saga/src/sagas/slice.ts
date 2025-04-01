import { createSlice } from "@reduxjs/toolkit";

export type Temp = {
    temp: string
}
export type List = {
    dt_txt: string,
    weather: string,
    wind: string,
    main: Temp
}
export type City = {
    name: string,
    country: string,
    sunrise: string,
    sunset: string
}
export type Weather = {
    city: City,
    list: List[]
}

export type WeatherState = {
    weather: Weather
}
const initialState: WeatherState = {
    weather: {
        city: {
            name: '',
            country: '',
            sunrise: '',
            sunset: ''
        },
        list: [{
            dt_txt: '',
            weather: '',
            wind: '',
            main: {
                temp: ''
            }
        }]
    }
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
       setWeather: (state: WeatherState, action) => {
            state.weather = action.payload
       }
    }
})

export const {setWeather} = weatherSlice.actions
export default weatherSlice.reducer