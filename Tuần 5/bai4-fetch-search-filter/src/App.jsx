import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);       // data gốc
  const [filtered, setFiltered] = useState([]); // data hiển thị
  const [search, setSearch] = useState("");

  // fetch API 1 lần
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFiltered(data);
      });
  }, []);

  // search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const result = posts.filter(post =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Posts</h2>

      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={handleSearch}
      />

      <ul>
        {filtered.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;