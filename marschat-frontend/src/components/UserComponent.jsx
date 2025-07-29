import { jwtDecode } from "jwt-decode";

export default function UserComponent({ user, onClick }) {
  const token = localStorage.getItem("token");
  let loggedInUserId = null;

  if (typeof token === "string") {
    try {
      const decoded = jwtDecode(token);
      loggedInUserId = decoded.id;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  if (!loggedInUserId) {
    return <p>Cannot send messages: User not authenticated.</p>;
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <button onClick={() => onClick(loggedInUserId, user.id)}>
        Send Message
      </button>
    </div>
  );
}
