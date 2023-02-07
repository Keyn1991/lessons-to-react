import React from "react";
import './App.css';

import {Posts, Cars} from "./components";
import {Header} from "./components/Header/Header";
import {CarForm} from "./components/CarForm/CarForm";
const App = () => (

    <div className="App">
        <CarForm/>
        <Header/>

        <Cars/>



    </div>

);

export {App};
