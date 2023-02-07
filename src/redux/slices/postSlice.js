import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null,


};


const postSlice = createSlice({
        name: 'postSlice',
        initialState,
        reducers:{
            getPosts:(state, action) => {
                state.posts = action.payload
            }
        }
})

const {reducer: postReducer, actions:{getPosts}} = postSlice;

const postActions = {

    getPosts

}

export {
    postReducer,
    postActions,
    postSlice

}