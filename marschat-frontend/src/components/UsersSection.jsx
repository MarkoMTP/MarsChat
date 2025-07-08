import { useEffect, useState } from "react";
import api from "../api";

export default function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/users/others");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    }
    fetchUsers();
  }, []);
  console.log(users.data);

  return (
    <div>
      <h2>Users Section</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
}
