import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Services} from "../../services";
import ComentPage from "../Coment/ComentPage";

const ComentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        Services.getComments().then(value => setComments(value.data))
    },[])


    return (
        <div>
            <Outlet/>
            <div>
                {
                    comments.map(comment => <ComentPage key={comment.id} comment={comment}/> )
                }
            </div>

        </div>
    )
}

export default ComentsPage