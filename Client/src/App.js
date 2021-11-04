import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="todoHdr">todos</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
