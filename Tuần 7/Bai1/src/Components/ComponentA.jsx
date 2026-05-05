import React from "react";
import { useCount } from "./CountContext";

const ComponentA = () => {
  const { count } = useCount();

  return (
    <div
      style={{ padding: "10px", border: "2px solid #4CAF50", margin: "10px 0" }}
    >
      <h3>Component A (Hiển thị)</h3>
      <p>
        Giá trị Count hiện tại là:{" "}
        <strong style={{ fontSize: "20px" }}>{count}</strong>
      </p>
    </div>
  );
};

export default ComponentA;
