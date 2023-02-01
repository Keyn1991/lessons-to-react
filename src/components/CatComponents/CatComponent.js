import React, {useReducer, useRef} from 'react';

import './style.css'
import {reducer} from "../reducer/CatReducer";

const CatComponent = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catIn = useRef()
    const dogIn = useRef()

    const createCat = () => {
        dispatch({type: "addCat", payload: catIn.current.value})
    };
    const createDog = () => {
        dispatch({type: "addDog", payload: dogIn.current.value})
    };

    return (
        <div>

            <div className={'main'} >
                <div className={'cat-card'}>
                    <label>Add cat: <input type="text" ref={catIn}/></label>
                    <button onClick={createCat}>Create</button>
                    {
                        state.cats.map(cat => (
                            <div key={cat.id} className={'cat'}>
                                {cat.name}
                                <button onClick={() => dispatch({type: "deleteCat", payload: cat.id})}>Delete</button>
                            </div>))
                    }
                </div>

                <div className={'dog-card'}>
                    <label>Add dog: <input type="text" ref={dogIn}/></label>
                    <button onClick={createDog}>Create</button>
                    {
                        state.dogs.map(dog => (
                            <div key={dog.id} className={'dog'}>
                                {dog.name}
                                <button onClick={() => dispatch({type: "deleteDog", payload: dog.id})}>Delete</button>
                            </div>))
                    }

                </div>

            </div>

        </div>
    );
};

export {CatComponent};