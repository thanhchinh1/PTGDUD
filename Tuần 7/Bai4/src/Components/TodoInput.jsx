import React, { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{ padding: "8px 15px", marginLeft: "10px", cursor: "pointer" }}
      >
        Thêm
      </button>
    </form>
  );
};

export default TodoInput;
