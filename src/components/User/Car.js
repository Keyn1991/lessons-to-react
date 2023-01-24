import React from 'react';
import './Css/CarCss.css'


const Car = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div className={'user-block'}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>


        </div>
    );
};

export {Car};

