import React, {useEffect, useState} from 'react';
import {ComentService, userService} from "../../service";
import Comment from "../User/Comment";

const Comments = ({coments}) => {



    return (
        <div>
            {
                coments.map(coment => <Comment key={coment.id} coment={coment}/>)
            }
        </div>
    );
};

export {
    Comments
};