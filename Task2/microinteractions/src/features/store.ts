import { applyMiddleware, createStore } from "redux"
import {thunk} from 'redux-thunk'
import {Todo, ADD_TODO, REMOVE_TODO , TodoActionTypes, FETCH_TODO, FetchAction} from './types'

const initialState: Todo = {
    tasks: []
}

const taskReducer = (state = initialState, action: TodoActionTypes): Todo => {

switch(action.type){
    case ADD_TODO: 
        return {...state, tasks: [...state.tasks, action.payload]}
    case REMOVE_TODO: 
        return {...state, tasks: state.tasks.filter((task) => task.text !== action.payload.text)}
    case FETCH_TODO:
        return {...state, tasks: [...state.tasks, ...action.payload]}
    default: 
        return state     
}
}




//create store
export const store = createStore(taskReducer, applyMiddleware(thunk))

export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
