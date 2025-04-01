
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { Task, ADD_TODO, REMOVE_TODO, AddAction, RemoveAction, FETCH_TODO, TodoActionTypes, FetchAction, Todo } from "./types"
import { AnyAction, Dispatch, UnknownAction } from "redux"
import { RootState } from "./store"
export const addTodo = (task: Task): AddAction => ({
    type: ADD_TODO,
    payload: task
})
export const removeTodo = (task: Task): RemoveAction => ({
    type: REMOVE_TODO,
    payload: task
})

export const fetchTask = ():any => {
    return async(dispatch: any) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=1')
            const task = await res.json()
            dispatch({type: FETCH_TODO, payload: task.map((curTask: any) => ({ text: curTask.title }) )})
        } catch (error) {
            console.log(error)
        }
    }
}