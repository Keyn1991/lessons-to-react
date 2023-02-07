import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
       const dispatch = useDispatch()
       const {cars, errors, loading} =  useSelector(state => state.cars)

        useEffect( ()=> {
            dispatch(carActions.getAll())


            },[])


    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>LOADING.......</h1>}

            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};