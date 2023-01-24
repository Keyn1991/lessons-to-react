import React from 'react';
import './Css/UserCss.css'

const Comment = ({coment}) => {

    const {id, postId, name, email, body } = coment;



    return (
        <div className={'user-block-two'}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Comment;