import { createSlice } from "@reduxjs/toolkit"

export interface PostData{
id: number,
userId: number,
title: string,
body: string
}
export interface Post{
    post: PostData[]
}
const initialState = {
post: [{
    id: 1,
    userId: 1,
    title: 'tanstack',
    body: 'hello'
}]
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.post = action.payload
        }
    }

})

export const {getPost} = postSlice.actions

export default postSlice.reducer