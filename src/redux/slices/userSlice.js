import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    users:[],
    errors: null,
    loading: null,
    selectedUser: null,

};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await  usersService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }

);

const getById =  createAsyncThunk(
    'userSlice/get',
    async ({id}, {rejectWithValue})=> {
    try {
        const {data} = await usersService.getById(id);
        return data
    }catch (e) {
        return rejectWithValue(e.response.data)
    }

    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers: {
    setSelectedUser:(state, action) =>{
            state.selectedUser = action.payload
    }
    },
extraReducers:builder =>
    builder
        .addCase(getAll.fulfilled ,(state, action) =>{
            state.loading = false
                state.users = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
                state.users = action.payload
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.selectedUser = action.payload
        })
});
const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    setSelectedUser,
    getAll,
    getById

}
export {
    userReducer,
    userActions,
    userSlice
};