import { useState, useRef } from 'react'

import styles from '@/style/TodoItem.module.scss'

function TodoItem({ todoItem, deleteTodo }) {

    const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    const inputRef = useRef(null)

    let viewMode = {}
    let editMode = {}

    if(editing) {
        viewMode.display = "none"
    }else{
        editMode.display = "none"
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = () => {
        setTodo({
            ...todo,
            title: inputRef.current.value
        })
        setEditing(false)
    }

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    return (
        <li>
            <div style={viewMode} className={styles.item}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <span style={ todo.completed ? { textDecoration: "line-through"}: null}>
                {todo.title}
            </span>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            <input
                ref={inputRef}
                style={editMode}
                type="text"
                defaultValue={todo.title}
            />
            <button
                style={editMode}
                onClick={handleUpdateSubmit}
            >
                Update
            </button>
        </li>
    )
}

export default TodoItem