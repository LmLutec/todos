import React, { useEffect, useRef } from "react";
import axios from "axios";

const TodoList = () => {
  //   useInterval(() => {
  //     getTasks();
  //   }, 1000);

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
    const tasks = axios.get("localhost:3000/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1>Here is where the list will go</h1>
    </div>
  );
};

export default TodoList;
