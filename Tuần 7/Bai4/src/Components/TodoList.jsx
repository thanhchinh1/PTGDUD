import React from "react";
import { useTodo } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ul style={{ padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
