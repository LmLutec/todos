import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="todoHdr">todos</h1>
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
