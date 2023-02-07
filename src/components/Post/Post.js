import React from 'react';

import '../../App.css'
import {postActions, userActions} from "../../redux";
import {Posts} from "../Posts/Posts";
import {useDispatch} from "react-redux";


const Post = ({post}) => {

    const {id, title, body} = post
    const dispatch = useDispatch();



    return (
        <div className={"posts"}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button className={'btn'} onClick={()=> dispatch(postActions.setSelectedPost(post))}>select</button>
            <button className={'btn'} onClick={()=> dispatch(postActions.getPostById({id}))}>apiSelect</button>



        </div>
    );
};

export {Post};