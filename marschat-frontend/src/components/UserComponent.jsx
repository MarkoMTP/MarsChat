import jwtDecode from "jwt-decode";

export default function UserComponent({ user, onClick }) {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const loggedInUserId = decoded.id;

  return (
    <div>
      <h1>{user.username}</h1>
      <button onClick={() => onClick(loggedInUserId, user.id)}>
        Send Message
      </button>
    </div>
  );
}
