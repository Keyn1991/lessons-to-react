import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, price,year} = car
    const dispatch = useDispatch();
    return (
        <div className={"users"}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year {year}</div>
            <button className={'btn'} onClick={()=> dispatch(carActions.setSelectedCar(car))}>select</button>
            <button className={'btn'} onClick={()=> dispatch(carActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {Car};


