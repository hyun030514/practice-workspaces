import React from "react";
import { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>할일 목록</h1>

      <input
        type="text"
        placeholder="새 할일"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>추가</button>

      <div>
        {todoList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>

            <button onClick={() => handleDelete(item.id)}>삭제</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todolist;
