import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Todo from "./Todo";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [complete, setComplete] = useState(false);

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
      <h1>Goals</h1>
      <div className="listContainer">
        {list
          .filter((l) => l.complete === false)
          .map((item) => (
            <Todo key={item._id} item={item} className="listItem" />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
