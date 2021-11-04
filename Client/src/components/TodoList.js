import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Todo from "./Todo";

const TodoList = () => {
  const [list, setList] = useState([]);

  useInterval(() => {
    getTasks();
  }, 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const getTasks = () => {
    const tasks = axios
      .get(`http://localhost:5000/remindme/todos`)
      .then((res) => {
        setList(res.data);
      });
  };

  return (
    <div>
      <h1>Here is where the list will go</h1>
      {list.map((item) => (
        <Todo item={item} />
      ))}
    </div>
  );
};

export default TodoList;
