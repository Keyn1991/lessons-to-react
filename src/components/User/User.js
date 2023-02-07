import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name, username} = user
    const dispatch = useDispatch();
    return (
        <div className={"users"}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button className={'btn'} onClick={()=> dispatch(userActions.setSelectedUser(user))}>select</button>
            <button className={'btn'} onClick={()=> dispatch(userActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {User};


