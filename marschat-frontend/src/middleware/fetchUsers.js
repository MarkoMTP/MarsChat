import api from "../api";

export default async function fetchUsers() {
  try {
    const users = await api.get("/users");

    return users.data;
  } catch (err) {
    console.error("Failed to fetch users:", err);
  }
}
