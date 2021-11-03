import React, { useState } from "react";
import "../styles/Todo.css";
import axios from "axios";

const Todo = () => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const data = {
      task,
      dueDate,
      category,
    };
    axios.post("localhost:3000/todos", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          type="text"
          value={task}
          placeholder="What needs to be done?"
          onChange={(e) => setTask(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          value={dueDate}
          placeholder="Due Date"
          onChange={(e) => setDueDate(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          value={category}
          placeholder="Select the category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <br />
        <input type="submit" value="Remind me" />
      </form>
    </div>
  );
};

export default Todo;
