import React from "react";
import { useCount } from "./CountContext";

const ComponentB = () => {
  const { increase, decrease } = useCount();

  return (
    <div
      style={{ padding: "10px", border: "2px solid #2196F3", margin: "10px 0" }}
    >
      <h3>Component B (Điều khiển)</h3>
      <button
        onClick={decrease}
        style={{ padding: "5px 15px", marginRight: "10px" }}
      >
        - Giảm
      </button>
      <button onClick={increase} style={{ padding: "5px 15px" }}>
        + Tăng
      </button>
    </div>
  );
};

export default ComponentB;
