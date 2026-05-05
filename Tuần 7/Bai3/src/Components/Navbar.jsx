import React from "react";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  // Lấy state user và hàm logout từ Global State
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        background: "#2c3e50",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Hệ thống Quản lý</h2>

      <div>
        {/* Kiểm tra nếu có user thì hiển thị tên và nút Đăng xuất */}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span>
              Xin chào, <strong>{user.name}</strong>!
            </span>
            <button
              onClick={logout}
              style={{
                padding: "5px 15px",
                cursor: "pointer",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <span>Bạn chưa đăng nhập</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
