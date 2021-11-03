import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="todoHdr">todos</h1>
      <Todo />
    </div>
  );
}

export default App;
