import React, {Component} from 'react';

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {user:[], setUsers:[]}
    }
    render() {
        return (
            <div>
                props.map(user => <User key={user.id} user={user}/> )
            </div>
        );
    }
}

export {UsersComponent};