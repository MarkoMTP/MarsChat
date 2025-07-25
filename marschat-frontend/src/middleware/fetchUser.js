import api from "../api";

export default async function fetchUser(userId) {
  try {
    const res = await api.get(`/users/${userId}`);

    return res;
  } catch (err) {
    console.error("Failed to fetch user:", err);
  }
}
