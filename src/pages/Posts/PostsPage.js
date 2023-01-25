import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Services} from "../../services";
import PostPage from "../Post/PostPage";

const PostsPage = () => {

    const [post, setPost] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        Services.getPostById(id).then(({data}) => setPost(data))
    },[id])

    return (
        <div>
            {<PostPage post={post}/>}
        </div>
    )
}

export default PostsPage