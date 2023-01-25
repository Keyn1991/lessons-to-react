import {Link} from "react-router-dom";


const ComentPage = ({comment}) => {

  const {postId} = comment

    return (
        <div className={'comments-page'}>
            <div>
                <Link to={`posts/${postId}`}  >{comment.id}  -  {comment.body} </Link>
            </div>
        </div>
    )


}


export default ComentPage