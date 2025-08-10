import { jwtDecode } from "jwt-decode";

export default function UserComponent({ user, onClick, setOpenChat }) {
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
      <button
        className="
    bg-sky-500 
    text-white 
    px-4 py-2 
    rounded-lg 
    shadow-md 
    hover:bg-sky-600 
    hover:cursor-pointer
    focus:outline-none 
    focus:ring-2 
    focus:ring-sky-300 
    transition 
    duration-200 
    ease-in-out
  "
        onClick={() => onClick(loggedInUserId, user.id, setOpenChat)}
      >
        Send Message
      </button>
    </div>
  );
}
