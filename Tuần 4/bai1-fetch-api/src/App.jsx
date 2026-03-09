import {useState, useEffect} from 'react';

function App(){
  const [users, setUsers] = useState([]);

   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Lỗi khi fetch:", error);
      }
    };

    fetchUsers();
  }, []);
  return(
    <div style={{padding:"20px"}}>
      <h1>Danh sach user</h1>
      <ul>
        {users.map((user) =>(
          <li key={user.id} style={{marginBottom: "10px"}}>
            <strong>Name: </strong> {user.name} - <strong>Email: </strong> {" "}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App;