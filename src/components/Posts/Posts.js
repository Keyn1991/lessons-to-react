import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";
import {postService} from "../../services";

const Posts = () => {

    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)

    useEffect( ()=> {
      postService.getPosts().then(({data}) => dispatch(postActions.getPosts(data)))

    },[])


    return (
        <div>

            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};