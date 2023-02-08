import React from 'react';

import {CarForm, Cars} from "../../components";
import {useSelector} from "react-redux";


const CarsPage = () => {
    const {loading} = useSelector(state => state.cars)


    return (
        <div className="App">


            <CarForm/>
            <hr/>
            {loading && <h1>LOADING..............</h1>}

            <Cars/>



        </div>
    )
};

export {CarsPage};