import React, { useState } from "react";
import "../styles/CreateTodo.css";
import axios from "axios";

const CreateTodo = () => {
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
    axios.post(`http://localhost:5000/remindme/todos`, data).then((res) => {
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

export default CreateTodo;
