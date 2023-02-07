import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars:[],
    errors: null,
    loading: null,
    selectedUser: null,

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await  carsService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }

);

const getById =  createAsyncThunk(
    'carSlice/get',
    async ({id}, {rejectWithValue})=> {
    try {
        const {data} = await carsService.getById(id);
        return data
    }catch (e) {
        return rejectWithValue(e.response.data)
    }

    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
    setSelectedCar:(state, action) =>{
            state.selectedCar = action.payload
    }
    },
extraReducers:builder =>
    builder
        .addCase(getAll.fulfilled ,(state, action) =>{
            state.loading = false
                state.cars = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
                state.cars = action.payload
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.selectedCar = action.payload
        })
});
const {reducer: carReducer, actions: {setSelectedCar}} = carSlice;

const carActions = {
    setSelectedCar,
    getAll,
    getById

}
export {
    carReducer,
    carActions,
    carSlice
};