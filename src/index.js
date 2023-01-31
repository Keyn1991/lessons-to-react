import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export const MyContext = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <MyContext.Provider value={{name: 'Dima', age: 31}}>
        <BrowserRouter>
    <App/>
        </BrowserRouter>
    </MyContext.Provider>
);


