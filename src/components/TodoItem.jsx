import React from "react";

function TodoItem({todoItem}){
  return(
    <li>
    <input type="checkbox"/>
    <span>
      {todoItem.title}
    </span>
    </li>
  )
}

export default TodoItem