import { AnyAction } from "redux"
//shape of each task
export interface Task {
    text: string,   
}
//shape of list of task
export interface Todo {
    tasks: Task[]
}
//action types
export const ADD_TODO = 'task/add'
export const REMOVE_TODO = 'task/remove'
export const FETCH_TODO = 'task/fetch'

export interface AddAction extends AnyAction {
    type: typeof ADD_TODO,
    payload: Task
}
export interface RemoveAction {
    type: typeof REMOVE_TODO,
    payload: Task
}
export interface FetchAction extends AnyAction {
    type: typeof FETCH_TODO,
    payload: Task[]
}

export type TodoActionTypes = AddAction | RemoveAction | FetchAction