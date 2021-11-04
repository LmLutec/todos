import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="App">
        <h1 className="todoHdr">todos</h1>
        <CreateTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
