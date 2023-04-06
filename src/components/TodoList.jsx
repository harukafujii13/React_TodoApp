import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodoList({ todos, handleChange, deleteTodo }) {

    return (
        <ul>
            {todos?.map((todo) => //only called not null or undefined
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    )
}

export default TodoList

//memo1
//todos?.map uses optional chaining (?.) to ensure that the map method is only called 
//if todos is not null or undefined, to prevent potential errors.