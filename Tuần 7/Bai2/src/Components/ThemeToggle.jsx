import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: theme === "light" ? "#333" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
        fontWeight: "bold",
      }}
    >
      Chuyển sang chế độ {theme === "light" ? "Tối (Dark)" : "Sáng (Light)"}
    </button>
  );
};

export default ThemeToggle;
