import axios from "axios"
import { Inputs } from "./PostForm"
// import { Data } from "./FetchTodo"
import { UpdateInputs } from "./UpdateForm"
export interface FetchDataList{
    data: FetchData[]
}
export interface FetchData {
    body: string,
    id: number,
    title: string,
    userId: number
}
export const fetchPost = (): Promise<FetchDataList> => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}
export const createPost = (data: Inputs) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', data)
}
export const updatePost = (data: UpdateInputs) => {
    return axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
}
export const deletePost = () => {
    return axios.delete('https://jsonplaceholder.typicode.com/posts/1')
}
