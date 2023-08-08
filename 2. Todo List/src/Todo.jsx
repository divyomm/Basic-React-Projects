import { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const FakeId = Date.now();

  const handleSubmit = () => {
    if (!input) return;
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: FakeId,
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    const newlist = todos.filter((t) => t.id !== id);
    setTodos(newlist);
  };

  return (
    <>
      <div className="container">
        <div className="sm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <ul className="todos-list">
          {todos.map((list) => {
            const { text, id } = list
            return (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Todo;
