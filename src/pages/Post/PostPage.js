
const PostPage = ({post}) => {

    const {id, title, body} = post

  return (

    <div className={'id-post'}>

    <h2>id: {id}</h2>
    <h2>title: {title}</h2>
    <h2>body: {body}</h2>

    </div>
  )
}

export default PostPage