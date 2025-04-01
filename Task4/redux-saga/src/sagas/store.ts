import { configureStore} from "@reduxjs/toolkit";
import weatherReducer from './slice.ts'
import createSagaMiddleware from "redux-saga";
import rootSaga, { fetchUser } from "./sagas.ts";


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

})

sagaMiddleware.run(rootSaga)
// const action = type => store.dispatch({type})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch