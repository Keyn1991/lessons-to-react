import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import '../User/Css/UserCss.css'

import {userValidator} from "../../validators/UserValidator";
import {userService} from "../../service";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver:joiResolver(userValidator)});

    const submit = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev => [...prev, data])
        reset()
    }
    
    
    return (


        <div className={'users-block'}>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}
            <br/><br/>
            <input type="text" placeholder={'name'} {...register('name')}/>

            {errors.id && <span>{errors.name.message}</span>}
            <br/><br/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            {errors.id && <span>{errors.email.message}</span>}
            <br/>
            <button className={'registration-user'} disabled={!isValid}>Registration</button>
        </form>
        </div>
    );
};

export {
    UserForm
};