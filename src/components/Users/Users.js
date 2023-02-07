import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {userActions} from "../../redux";

const Users = () => {
       const dispatch = useDispatch()
       const {users, errors, loading} =  useSelector(state => state.users)

        useEffect( ()=> {
            dispatch(userActions.getAll())


            },[])


    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>LOADING.......</h1>}

            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};