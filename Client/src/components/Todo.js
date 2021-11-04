import React from "react";
import "../styles/Todo.css";
import Notifications, { notify } from "react-notify-toast";
import axios from "axios";

const Todo = (todo) => {
  const changeComplete = () => {
    const complete = true;
    const id = todo.item._id;

    axios
      .put(`http://localhost:5000/remindme/editcomplete/${id}`, { complete })
      .then((res) => {
        notify.show("Goal Completed!", "success");
      });
  };

  return (
    <div className="todoContainer">
      <div className="todoItem">
        <Notifications />
        <div className="icons">
          <svg
            width="20"
            height="20"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="editIcon"
          >
            <path
              d="M0 14.2525V18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525ZM17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425V4.0425Z"
              fill="black"
            />
          </svg>
          <i className="dueDate">{todo.item.dueDate}</i>
        </div>
        <h4 className="task">{todo.item.task}</h4>

        <div
          className="complete"
          onClick={() => {
            if (window.confirm("Do you want to mark this goal complete?"))
              changeComplete();
          }}
        >
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
    </div>
  );
};

export default Todo;
