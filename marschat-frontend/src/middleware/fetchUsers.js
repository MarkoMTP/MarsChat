import api from "../api";

export default async function fetchUsers(loggedInUserId) {
  try {
    const response = await api.get("/users");

    const users = response.data;

    const filteredUsers = users.filter((user) => user.id !== loggedInUserId);

    return filteredUsers;
  } catch (err) {
    console.error("Failed to fetch users:", err);
  }
}
