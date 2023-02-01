import React, {Component} from 'react';

import {CommentService} from "../../services/CommentService";
import CommentComponents from "../CommentComponents/CommentComponents";


class CommentsComponents extends Component {


    constructor(props) {
        super(props);
        this.state = {
            comments: null
        };
    }

    componentDidMount() {
        CommentService.getAll().then(response => this.setState({comments: response.data}));
    }

    render() {
        const {comments} = this.state

        return (
            <div>

                {comments && comments.map(comment => (
                    <CommentComponents key={comment.id}
                          comment={comment} />
                ))}
            </div>
        );
    }
}

export {CommentsComponents};