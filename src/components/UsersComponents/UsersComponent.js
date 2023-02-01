import React, {Component} from 'react';

import {User} from "../UserComponents/UserComponent";
import {UserService} from "../../services/UserService";

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        };
    }
        componentDidMount() {
            UserService.getAll().then(response => this.setState({ users: response.data }));

    }
    render() {
        const {users} = this.state;
        return (

            <div>

                {users && users.map(user => (
                    <User key={user.id}
                          user={user} />
                ))}
            </div>
        );
    }
}

export {UsersComponent};