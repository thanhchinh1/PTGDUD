import React from "react";
import { AuthProvider } from "./Components/AuthContext";
import Navbar from "./Components/Navbar";
import LoginScreen from "./Components/LoginScreen";

const App = () => {
  return (
    <AuthProvider>
      {/* Reset style cơ bản */}
      <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <Navbar />
        <LoginScreen />
      </div>
    </AuthProvider>
  );
};

export default App;
