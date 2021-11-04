import React from "react";
import "../styles/Todo.css";

const Todo = (todo) => {
  return (
    <div className="todoItem">
      {/* {console.log(todo.item)} */}
      <h4 className="task">{todo.item.task}</h4>
      <i>{todo.item.dueDate}</i>
      <div className="complete">
        <svg
          width="24"
          height="15"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.77 2.83L21.17 4.23L8.43 16.97L2.83 11.37L4.23 9.97L8.43 14.17L19.77 2.83ZM19.77 0L8.43 11.34L4.23 7.14L0 11.37L8.43 19.8L24 4.23L19.77 0Z"
            fill="black"
          />
        </svg>
        Mark Complete
      </div>
    </div>
  );
};

export default Todo;
