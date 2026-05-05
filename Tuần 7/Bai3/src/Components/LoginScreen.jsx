import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const LoginScreen = () => {
  const { user, login } = useAuth();
  const [inputValue, setInputValue] = useState("");

  // Nếu đã đăng nhập rồi thì hiển thị màn hình chào mừng
  if (user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h3>Chào mừng {user.name} đã quay trở lại! 🎉</h3>
        <p>Bây giờ bạn có thể truy cập các tính năng bí mật của hệ thống.</p>
      </div>
    );
  }

  // Nếu chưa đăng nhập thì hiển thị Form
  const handleLogin = () => {
    if (!inputValue.trim()) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }
    login(inputValue);
  };

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h3>Đăng nhập</h3>
        <input
          type="text"
          placeholder="Nhập tên của bạn..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #aaa",
          }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            width: "88%",
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
