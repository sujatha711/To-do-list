import { useState } from "react";
import "./App.css";

function App() {
  let [todoInput, updateInput] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "learn React",
    },
    {
      id: 2,
      task: "learn Angular",
    },
  ]);
  const [nextId, setNextId] = useState(3); 

  function addNewTodo() {
    if (todoInput === "") {
      alert("Add some new tasks");
    } else {
      let newTodo = {
        id: nextId,
        task: todoInput,
      };
      setTodoList([...todoList, newTodo]);
      setNextId(nextId + 1); 
      updateInput("");
    }
  }

  function deleteTodo(id) {
    let updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos); 
  }

  return (
    <div id="text">
      <h3>TO DO list</h3>

      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            updateInput(task);
          }}
          type="text"
          value={todoInput}
        />
        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>
      </div>

      <ul className="list-group mt-4">
        {todoList.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <p>{todo.task}</p>
            <button onClick={() => deleteTodo(todo.id)} className="btn">
              ✖️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;