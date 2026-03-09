import { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState(""); // input từ người dùng
  const [user, setUser] = useState(null); // dữ liệu 1 user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Nếu userId rỗng → không fetch
    if (!userId) {
      setUser(null);
      setError(null);
      return;
    }

    // Validate: userId phải từ 1 đến 10
    const id = Number(userId);
    if (id < 1 || id > 10 || isNaN(id)) {
      setUser(null);
      setError("userId phải từ 1 đến 10!");
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Lỗi khi fetch:", error);
        setError(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // ← Dependency: mỗi khi userId thay đổi → fetch lại

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tìm kiếm User</h1>

      {/* Input nhập userId */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Nhập userId (1-10): </strong>
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Nhập từ 1 đến 10"
          style={{ padding: "8px", fontSize: "16px" }}
        />
      </div>

      {/* Loading */}
      {loading && <h2> Loading...</h2>}

      {/* Error */}
      {error && <h2 style={{ color: "red" }}> {error}</h2>}

      {/* Hiển thị thông tin user */}
      {user && !loading && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            maxWidth: "400px",
          }}
        >
          <h2>{user.name}</h2>
          <p>
            <strong> Phone:</strong> {user.phone}
          </p>
          <p>
            <strong> Website:</strong> {user.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;