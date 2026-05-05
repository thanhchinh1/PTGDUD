import React from "react";
import { TodoProvider } from "./Components/TodoContext";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Bài 4: Todo List Global</h2>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
