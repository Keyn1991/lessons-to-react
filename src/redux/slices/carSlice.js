import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars:[],
    errors: null,
    loading: null,
    selectedCar: null,

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



const create =  createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI)=> {
        try {
            await carsService.create(car);
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
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
    getById,
    create

}
export {
    carReducer,
    carActions,
    carSlice
};