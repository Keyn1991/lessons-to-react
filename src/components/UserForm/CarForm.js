import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import '../User/Css/CarCss.css'
import {carValidator} from "../../validators/CarValidator";
import {carService} from "../../service";

const CarForm = ({setCars}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver:joiResolver(carValidator)});

    const delSubmit = async (id) =>  {
       const {data} = await carService.deleteById(id);
        setCars(cars => {
        const idItem = cars.findIndex(value => value.id === id);
        cars.splice(idItem, 1)
        return [...cars]
    })
    }




    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data])
        reset()

    }

    return (


        <div className={'users-block'}>
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'id'} {...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}
            <br/><br/>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <br/><br/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <br/><br/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <br/><br/>
            <hr/>
            <button className={'registration-user'} disabled={!isValid}>Registration</button>
            <br/><br/>

        </form>

                <hr/>
                <button>Update</button>
                <hr/>
                <button onClick={() => delSubmit()}>Delete</button>

        </div>
    );
};

export {
    CarForm
};