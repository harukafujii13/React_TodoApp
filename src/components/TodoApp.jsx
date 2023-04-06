import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'  //npi uuid

import InputTodo from '@/components/InputTodo'
import TodoList from '@/components/TodoList'

import { todos as todosData } from '@/data/todoData'

function TodoApp() {
    const [todos, setTodos] = useState(todosData)

    const handleChange = (id) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        })
    }

    //TodoItemnのcheckboxでチェックしたidを引数とし、prevStateのtodosオブジェクトの中の
    //todoの中のtodo.idと引数のidが一致したらcompletedがtrueになる


    const deleteTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }

    //Inside the callback function, the filter function is used to 
    //create a new array that includes only the todo items that do not 
    //have the same id as the id passed as a parameter to the deleteTodo function.



    const addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }

        console.log(newTodo)

        setTodos([newTodo, ...todos])
    }

    return (
        <>
            <InputTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                handleChange={handleChange}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp