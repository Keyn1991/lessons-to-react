import {useEffect, useState} from "react";

import {Services} from "../../services";
import TodoPage from "../Todo/TodoPage";
const TodosPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {

        Services.getTodos().then(value => setTodos(value.data))
    },[])

    return (
        <div>

            {
                todos.map(todo => <TodoPage key={todo.id} todo={todo}/> )
            }

        </div>
    )
}
export default TodosPage