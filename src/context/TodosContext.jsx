import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getInitialTodos } from "@/lib/helper";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const updateTodo = (id, key, updatedValue) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          todo[key] = updatedValue;
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        updateTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };


//memo1
//The TodosProvider component wraps its children with TodosContext.Provider, 
//which provides the todos state and the three functions (updateTodo, deleteTodo, 
//and addTodo) as values to the components that consume this context. 
//The children components can access these values using useContext() hook from React.