import React from 'react';

import '../../App.css'
import {postActions} from "../../redux";
import {Posts} from "../Posts/Posts";


const Post = ({post}) => {

    const {id, title, body} = post


    const dispatch = posts => {
        //////////////////////
       console.log(Post)
    };

    return (
        <div className={"posts"}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button className={'btn'} onClick={()=> dispatch(postActions.getPosts(post))}>select</button>



        </div>
    );
};

export {Post};