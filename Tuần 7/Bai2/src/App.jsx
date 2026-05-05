import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";

const MainContent = () => {
  const { theme } = useTheme();

  // Dùng useEffect để đổi màu nền của chính thẻ <body> trên trình duyệt
  // và xóa margin mặc định đi
  useEffect(() => {
    document.body.style.margin = "0"; // Xóa viền trắng
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#1a1a1a";
    document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  }, [theme]);

  const appStyle = {
    minHeight: "100vh", // Chiều cao tối thiểu bằng 100% màn hình
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={appStyle}>
      <h1>Bài 2: Theme Toggle</h1>
      <p>
        Chế độ hiện tại: <strong>{theme.toUpperCase()}</strong>
      </p>
      <ThemeToggle />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
