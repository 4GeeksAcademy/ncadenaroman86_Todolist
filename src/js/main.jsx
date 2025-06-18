import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog"
  ]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTodos([input.trim(), ...todos]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="title">todos</h1>
      <div className="todo-box">
        <input
          className="todo-input"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {todos.map((item, i) => (
          <div key={i} className="todo-item">
            <span>{item}</span>
            <button className="delete-btn" onClick={() => deleteTodo(i)}>×</button>
          </div>
        ))}
        <div className="footer">
          {todos.length} item{todos.length !== 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
}
