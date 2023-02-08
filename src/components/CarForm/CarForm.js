import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";




import {carValidator} from "../../validators/validator";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = (car) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver:joiResolver(carValidator)});
    const dispatch = useDispatch();
const save = async (car) => {
    await dispatch(carActions.create({car}))
    reset()
}




    return (


        <div className={'users-block'}>
            <form onSubmit={handleSubmit(save)}>

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