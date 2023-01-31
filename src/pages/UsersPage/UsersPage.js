import React, {useContext} from 'react';
import {MyContext} from "../../index";
import {Button} from "../Button/Button";


const UsersPage = () => {
    const context = useContext(MyContext);
    context.klass = 'rich';
    Object.assign(context, {status:true})
    // delete context.klass

    return (
        <div className={'users-block'}>
            <div>name: {context.name}</div>
            <div>age: {context.age}</div>

            {JSON.stringify(context)}

            <div>
                <Button click={()=> console.log('Click from Button')}>click</Button>
            </div>

        </div>
    );
};

export  {UsersPage};