import React from 'react'
import TodoItem from '@/components/TodoItem'
import {TodosContext} from '@/context/TodosContext'
import { useContext } from 'react'

function TodoList() {
    const {todos} = useContext(TodosContext)

    return (
        <ul>
            {todos?.map((todo) => //only called not null or undefined
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                />
            )}
        </ul>
    )
}

export default TodoList

//memo1
//todos?.map uses optional chaining (?.) to ensure that the map method is only called 
//if todos is not null or undefined, to prevent potential errors.