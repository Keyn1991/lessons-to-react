import React from 'react';
import './Css/UserCss.css'

const User = ({user}) => {

    const {id, name, email} = user;

    return (
        <div className={'user-block'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};