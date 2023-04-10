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

//note1
//The component defines two objects, "viewMode" and "editMode", 
//to conditionally apply styles to the view and edit modes of the to-do item, 
//respectively. The "viewMode" object sets the "display" property to "none" when "editing" is true, 
//and the "editMode" object sets the "display" property to "none" when "editing" is false.


//In the provided code, viewMode and editMode are two objects used to define styles 
//for view mode and edit mode of the to-do item, respectively.

//The viewMode object is an empty JavaScript object literal ({}) initially. 
//If editing state is true, it means the to-do item is in edit mode, and the display property of the viewMode object is set to "none". 
//This will hide the view mode elements of the to-do item.

//The editMode object is also an empty JavaScript object literal ({}) initially. 
//If editing state is false, it means the to-do item is not in edit mode, 
//and the display property of the editMode object is set to "none". This will hide the edit mode elements of the to-do item.

//In summary, the viewMode and editMode objects are used to conditionally apply styles to the view and edit modes of the to-do item, 
//respectively, based on the editing state. If editing is true, view mode elements will be hidden, and if editing is false, edit mode elements will be hidden.