import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const API = "http://localhost:3000/todos";

  // GET todos
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, []);

  // ADD todo
  const addTodo = async (e) => {
    e.preventDefault();

    if (!text) return;

    setLoading(true);

    const newTodo = {
      title: text
    };

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      });

      const data = await res.json();

      setTodos([...todos, data]);
      setText("");
    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  };


  const deleteTodo = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo CRUD</h2>

      {/* form add */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="New todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </form>

      {/* list */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;