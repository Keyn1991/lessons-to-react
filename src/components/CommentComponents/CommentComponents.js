import React, {Component} from 'react';

class CommentComponents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {comment} = this.props
        const {postId, id, name, email, body} = comment

        return (
            <div>
                <div>postId: {postId}</div>
                <hr/>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        );
    }
}

export default CommentComponents;