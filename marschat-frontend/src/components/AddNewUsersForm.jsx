import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a0c0c] via-[#7a1b1b] to-[#a83232] p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-8 animate-fadeIn scale-95 transform transition duration-500 ease-out">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b border-gray-200 pb-3">
          Add Users to Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {users.length === 0 && (
            <p className="text-center text-gray-400 italic select-none">
              No users available to add
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 rounded-lg bg-gray-50 hover:bg-sky-50 cursor-pointer transition transform hover:scale-105 shadow-sm"
              >
                <UserBoxInGroupCreationForm
                  user={user}
                  chosenUsers={chosenUsers}
                  setChosenUsers={setChosenUsers}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition transform active:scale-95"
          >
            <span className="text-lg">➕</span>
            Add Users
          </button>
        </form>
        <button
          className="mt-6 w-full flex items-center justify-center gap-2 text-sky-600 font-medium hover:text-sky-800 transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-300"
          onClick={onClose || (() => navigate("/"))}
          type="button"
        >
          <span>←</span>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default AddNewUsersToGroup;
