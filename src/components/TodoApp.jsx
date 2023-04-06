import React from "react";
import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList"

const todos = [
  {id: 1, title: 'Buy Bread', completed: false},
  {id: 2, title: 'Push Commits', completed: false},
  {id: 3, title: 'Deploy to Vercel', completed: false},
]


function TodoApp() {
  return(
    <>
    <InputTodo />
    <TodoList todos={todos} />
    </>
  )
}

export default TodoApp