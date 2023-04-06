import React from 'react'
import TodoApp from '@/components/TodoApp'
import Header from '@/components/Header'


function App(){
  return(
    <>
    <Header>
      <h1>Todos</h1>
      <p>A simple todo app</p>
    <TodoApp />
    </Header>
    </>
  )
}


export default App
