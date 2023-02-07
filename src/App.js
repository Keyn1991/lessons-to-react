import React from "react";
import './App.css';

import {Posts, Users} from "./components";
import {Header} from "./components/Header/Header";
const App = () => (

    <div className="App">

        <Header/>

        <Users/>

        <Posts/>

    </div>

);

export {App};
