import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import CompletionData from "./components/CompletionData";

function App() {
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
      <div className="App">
        <h1 className="todoHdr">todos</h1>
        <CreateTodo />
      </div>
      <TodoList list={list} />
      <CompletionData list={list} />
    </div>
  );
}

export default App;
