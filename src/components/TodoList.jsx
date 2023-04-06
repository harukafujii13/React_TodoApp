import React from "react";
import TodoItem from '@/components/TodoItem'

todos: {
  list: []
  title: 'todos'
}

function TodoList({todos}) {
  return(
    <ul>
  {todos?.map((todo)=> 
  <TodoItem key={todo.id} todoItem={todo}/>)}
    </ul>
  )
}

export default TodoList