import React from 'react';
import {useSelector} from "react-redux";
const Header = () => {
    const {selectedCar} = useSelector(state => state.cars )
    return (
        <div className={"header"}>
            {selectedCar && selectedCar.brand}
        </div>
    );
};

export {Header};