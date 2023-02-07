import React from 'react';
import {useSelector} from "react-redux";
const Header = () => {
    const {selectedUser} = useSelector(state => state.users )
    const {selectedPost} = useSelector(state => state.posts )
    return (
        <div className={"header"}>
            {selectedUser && selectedUser.name}
            {selectedPost && selectedPost.body}
        </div>
    );
};

export {Header};