import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import UserBoxInGroupCreationForm from "./UserBoxInGroupCreationForm";
import { jwtDecode } from "jwt-decode";
import fetchUsers from "../middleware/fetchUsers";
import handleAddingNewMembers from "../middleware/handleAddingNewMembers";

function AddNewUsersToGroup({ inboxId, existingMembers, onClose }) {
  const [chosenUsers, setChosenUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Get logged-in user ID
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (typeof token === "string") {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  // Fetch users but filter out existing members
  useEffect(() => {
    if (!userId) return;
    (async () => {
      const allUsers = await fetchUsers(userId);
      const existingIds = new Set(existingMembers.map((m) => m.user.id));
      const filtered = allUsers.filter((u) => !existingIds.has(u.id));
      setUsers(filtered);
    })();
  }, [userId, existingMembers]);

  const handleSubmit = async (e) =>
    handleAddingNewMembers(e, inboxId, chosenUsers, onClose);

  return (
    <div className="container">
      <h2 className="heading">Add Users to Group</h2>
      <form onSubmit={handleSubmit} className="form">
        {users.length === 0 && (
          <p className="text-gray-500">No users available to add</p>
        )}

        {users.map((user) => (
          <UserBoxInGroupCreationForm
            key={user.id}
            user={user}
            chosenUsers={chosenUsers}
            setChosenUsers={setChosenUsers}
          />
        ))}

        <button
          type="submit"
          className="bg-sky-500 
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
            ease-in-out"
        >
          Add Users
        </button>
      </form>
      <button
        className="go-back-btn"
        onClick={onClose || (() => navigate("/"))}
      >
        Go Back
      </button>
    </div>
  );
}

export default AddNewUsersToGroup;
