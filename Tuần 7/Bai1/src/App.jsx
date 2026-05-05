import React from "react";
import { CountProvider } from "./Components/CountContext";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

const App = () => {
  return (
    <CountProvider>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "400px",
          margin: "20px",
        }}
      >
        <h2>Bài 1: Counter Global</h2>
        <ComponentA />
        <ComponentB />
      </div>
    </CountProvider>
  );
};

export default App;
