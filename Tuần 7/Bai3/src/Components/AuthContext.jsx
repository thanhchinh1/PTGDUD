/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Ban đầu user là null (chưa đăng nhập)
  const [user, setUser] = useState(null);

  // Hàm giả lập đăng nhập: Nhận vào một username và lưu thành object
  const login = (username) => {
    // Trong thực tế, chỗ này sẽ gọi API. Ở đây mình gán cứng luôn.
    setUser({ name: username });
  };

  // Hàm đăng xuất: Xóa dữ liệu user về null
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để lấy data nhanh gọn
export const useAuth = () => useContext(AuthContext);
