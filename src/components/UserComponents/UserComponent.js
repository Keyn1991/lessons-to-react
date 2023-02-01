import React from "react";

class User extends React.Component {
constructor(props) {
    super(props);
}
    render() {
        const { user } = this.props;
        const {id, name, email, username} = user;

        return (
            <div className={'user-block'}>
                <div>id: {id}</div>
                <hr/>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>username: {username}</div>

            </div>
        );
    }
}

export {User};