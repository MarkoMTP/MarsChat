import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserBoxInGroupCreationForm from "./UserBoxInGroupCreationForm";
import { jwtDecode } from "jwt-decode";
import fetchUsers from "../middleware/fetchUsers";
import handleCreateGroup from "../middleware/handleCreateGroupChat";

function CreateGroupForm() {
  const [groupName, setGroupName] = useState("");
  const [choosenUsers, setChoosenUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (!userId) return;
    (async () => setUsers(await fetchUsers(userId)))();
  }, [userId]);

  const handleSubmit = (e) =>
    handleCreateGroup({ e, choosenUsers, userId, groupName, navigate });

  const handleGoBack = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-red-950 text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
        Create a New Mars Group
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-red-950/80 p-6 rounded-lg shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
          className="w-full bg-black text-white border border-red-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {users.map((user) => (
            <UserBoxInGroupCreationForm
              key={user.id}
              user={user}
              chosenUsers={choosenUsers}
              setChosenUsers={setChoosenUsers}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out"
        >
          Create Group
        </button>
      </form>

      <button
        className="mt-4 text-white border border-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
}

export default CreateGroupForm;
