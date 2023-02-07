import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";



import {carsService} from "../../services";
import {carValidator} from "../../validators/validator";

const CarForm = ({setCars}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver:joiResolver(carValidator)});






    const submit = async (car) => {
        const {data} = await carsService.create(car);
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




        </div>
    );
};

export {
    CarForm
};