export function TodoPreview({ todo, onToggleTodo }) {
    return (
        <article className="todo-preview">
            <h2 className={(todo.isDone)? 'done' : ''} onClick={onToggleTodo} style={{color: `${todo.color}`}}>
                Todo: {todo.txt}
            </h2>
            <h4>Todo Importance: {todo.importance}</h4>
        </article>
    )
}
