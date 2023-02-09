import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars:[],
    prev:null,
    next: null,
    carForUpdate: null,
    errors: null,
    loading: null,
    selectedCar: null,

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, {rejectWithValue})=> {
        try {
            const {data} = await  carsService.getAll(page);
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
            thunkAPI.dispatch(getAll({page: 1}))
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
                const {prev, next, items} = action.payload
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
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