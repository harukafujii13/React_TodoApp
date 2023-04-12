import { useState, useRef, useContext } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

import styles from '@/style/TodoItem.module.scss'

import Modal from '@/components/Modal'
import { useFlasher } from '@/hooks/useFlasher'
import { TodosContext } from '@/context/TodosContext'


function TodoItem({ todoItem }) {

    // const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    const inputRef = useRef(null)
    const { deleteTodo, updateTodo } = useContext(TodosContext)

    // let viewMode = {}
    // let editMode = {}

    // if(editing) {
    //     viewMode.display = "none"
    // }else{
    //     editMode.display = "none"
    // }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = () => {
        updateTodo(todoItem.id, "title", inputRef.current.value)
        setEditing(false)
    }

    const handleChange = () => {
        updateTodo(todoItem.id, "completed", !todoItem.completed)
    }

    return (
        <li>
            <div className={styles.item} ref={useFlasher()}>
                <input
                    type="checkbox"
                    checked={todoItem.completed}
                    onChange={handleChange}
                />
                <span style={todoItem.completed ? { textDecoration: "line-through" } : null}>
                    {todoItem.title}
                </span>
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => deleteTodo(todoItem.id)}>
                    <HiOutlineTrash />
                </button>
            </div>

            {editing && (
                <Modal
                    showModal={editing}
                    setShowModal={setEditing}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        defaultValue={todoItem.title}
                    />
                    <button onClick={handleUpdateSubmit}>
                        Update
                    </button>
                </Modal>
            )}
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