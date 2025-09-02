import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <p>You are not authorized to view this page. Please log in.</p>;
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now(); // exp is in seconds, Date.now in ms

    if (isExpired) {
      localStorage.removeItem("token"); // optional: clean it up
      return <p>Your session has expired. Please log in again.</p>;
    }
  } catch (err) {
    console.error("Invalid token:", err);
    localStorage.removeItem("token");
    return <p>Invalid session. Please log in again.</p>;
  }

  return children;
}
