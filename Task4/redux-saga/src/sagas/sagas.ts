// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}
// e73c65919d0f5c19d280cb2a461c1ab4
// 'api.openweathermap.org/data/2.5/forecast?q={ktm},{+977}&appid={e73c65919d0f5c19d280cb2a461c1ab4}'
import {put, call, all, takeEvery} from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit'
import { setWeather } from './slice'
import { store } from './store'

export function* fetchUser(){
   
    console.log('Hello Sagas')
}
interface Input {
    input: string
}

const getWeatherApi = async (input: string) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${input}&appid=e73c65919d0f5c19d280cb2a461c1ab4`)
    return await res.json()
}
export function* fetchWeather(action: PayloadAction<Input>){
    try{
        const data = yield call(getWeatherApi, action.payload.input)
        yield put({type: 'FETCH_SUCCESS', payload: data})
    }catch(err){
        console.log(err)
    }
    
}
export function* fetchSuccess(action: PayloadAction){
    store.dispatch(setWeather(action.payload))
    // console.log('weather fetched: ', action.payload)
    // dispatch(setWeather(action.payload))
}
export function* watchFetchWeather(){

    yield takeEvery('FETCH_WEATHER', fetchWeather)
}
export function* watchFetchSuccess(){
    yield takeEvery('FETCH_SUCCESS', fetchSuccess)
}

export default function* rootSaga(){
    yield all([
        fetchUser(),
        watchFetchWeather(),
        watchFetchSuccess(),
    ])
}