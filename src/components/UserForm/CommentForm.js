import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators/UserValidator";
import {userService} from "../../service";
import {ComentValidator} from "../../validators/ComentValidator";

const CommentForm = ({setComents}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver:joiResolver(ComentValidator)});

    const submit = async (come) => {
        const {data} = await userService.create(come);
        setComents(prev=> [...prev, data])
        reset()
    }


    return (
        <div className={'comments-block'}>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'id'} {...register('id')}/>

                {errors.id && <span>{errors.id.message}</span>}
                <br/><br/>
                <input type="text" placeholder={'postId'} {...register('postId')}/>

                {errors.id && <span>{errors.id.message}</span>}
                <br/><br/>
                <input type="text" placeholder={'name'} {...register('name')}/>

                {errors.id && <span>{errors.id.message}</span>}
                <br/><br/>
                <input type="email" placeholder={'email'} {...register('email')}/>

                {errors.id && <span>{errors.id.message}</span>}
                <br/> <br/>
                <input type="text" placeholder={'body'} {...register('body')}/>

                {errors.id && <span>{errors.id.message}</span>}
                <br/><br/>
                <button className={'post'} disabled={!isValid}>Create</button>
            </form>
        </div>

    );
};

export {
    CommentForm
};