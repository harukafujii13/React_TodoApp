import React, {useState} from "react";


function InputTodo (){
  const [title, setTitle] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </>
  )
}


export default InputTodo