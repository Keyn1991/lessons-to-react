import React, {Component} from 'react';

import './App.css';
import {UsersComponent} from "./components/UsersComponents/UsersComponent";
import {CommentsComponents} from "./components/CommentsComponents/CommentsComponents";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className={'users-block'}>

                    <UsersComponent/>
                </div>

                <div className={'comments'}>

                <CommentsComponents/>

                </div>

                </div>
                );
    }
}

export default App;