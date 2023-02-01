import React, {useReducer, useRef} from 'react';

    const reducer = (state, action) => {
        const {type, payload} = action;

        switch (type) {
            case "addCat":
                return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
            case "deleteCat":
                return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
            case "addDog":
                return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
            case "deleteDog":
                return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
            default:

                return state;
        }
    }

export {reducer};