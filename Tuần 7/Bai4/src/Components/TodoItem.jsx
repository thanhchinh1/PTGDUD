import React, { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #eee",
        width: "350px",
        listStyle: "none",
      }}
    >
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{ flex: 1, padding: "5px" }}
          />
          <button onClick={handleUpdate} style={{ marginLeft: "5px" }}>
            Lưu
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              flex: 1,
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            style={{ marginLeft: "5px" }}
          >
            Sửa
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "5px", color: "red" }}
          >
            Xóa
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
