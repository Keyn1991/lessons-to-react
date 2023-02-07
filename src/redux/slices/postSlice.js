

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
    posts:[],
    errors: null,
    loading: null,
    selectedUser: null,

};

const getPosts = createAsyncThunk(
    'postSlice/getPosts',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await  postService.getPosts();
            return data
        }catch (er){
            return rejectWithValue(er.response.data)
        }
    }

);

const getPostById =  createAsyncThunk(
    'postSlice/get',
    async ({id}, {rejectWithValue})=> {
        try {
            const {data} = await postService.getPostById(id);
            return data
        }catch (er) {
            return rejectWithValue(er.response.data)
        }

    }
)

const postSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers: {
        setSelectedPost:(state, action) =>{
            state.selectedPost = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getPosts.fulfilled ,(state, action) =>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.selectedUser = action.payload
            })
});
const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions = {
    setSelectedPost,
    getPosts,
    getPostById

}
export {
    postReducer,
    postActions,
    postSlice
};
