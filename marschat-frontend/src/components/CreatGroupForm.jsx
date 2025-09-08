import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
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

  // Fetch users
  useEffect(() => {
    if (!userId) return;
    (async () => setUsers(await fetchUsers(userId)))();
  }, [userId]);

  const handleSubmit = (e) =>
    handleCreateGroup({ e, choosenUsers, userId, groupName, navigate });

  const handleGoBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <h2 className="heading"></h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
          className="input"
        />

        {users.map((user) => (
          <UserBoxInGroupCreationForm
            key={user.id}
            user={user}
            chosenUsers={choosenUsers}
            setChosenUsers={setChoosenUsers}
          ></UserBoxInGroupCreationForm>
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
          Create Group
        </button>
      </form>
      <button className="go-back-btn" onClick={handleGoBack}>
        go back
      </button>
    </div>
  );
}

export default CreateGroupForm;
