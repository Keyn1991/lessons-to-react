const TodoPage = ({todo}) => {
    return (
        <div className={'todo-block'}>
            {todo.id} -- {todo.title}
        </div>
    )
}
export default TodoPage