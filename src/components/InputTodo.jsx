import { useState } from 'react'

function InputTodo({ addTodo }) {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim()){
            addTodo(title)
            setTitle('')
        } else {
            setMessage("Please write something")
        }

    }

    const handleChange = (e) => {
        setMessage('')
        setTitle(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={title}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <span style={{ fontSize: "0.7rem", color: "red"}}>{message}</span>
        </>
    )
}

export default InputTodo

//memo1
//If title is not empty, it calls the addTodo function passed as a prop with the title as an argument to add a new todo, 
//and then clears the input field by setting title state to an empty string using setTitle(''). If title is empty, it sets the message state to 
//"Please write something" to display an error message.

//memo2
//The component renders a form with an input field for adding todos. 
//The value of the input field is set to the title state, 
//and the onChange event is handled by the handleChange function. 
//When the form is submitted, the handleSubmit function is called. 
//The component also renders a <span> element to display the error message (message state) if it exists, 
//with styles for font size and color.
