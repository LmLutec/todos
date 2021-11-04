import React from "react";
import "../styles/Todo.css";

const Todo = (todo) => {
  return (
    <div className="todoItem">
      {/* {console.log(todo.item)} */}
      <h4>{todo.item.task}</h4>
      <i>{todo.item.dueDate}</i>
    </div>
  );
};

export default Todo;
