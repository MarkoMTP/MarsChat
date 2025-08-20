import { jwtDecode } from "jwt-decode";
import api from "../api";
import { use, useEffect, useState } from "react";

//Components
import ChatBox from "./ChatBox";
import InboxesSection from "./InboxesSection";
import UsersSection from "./UsersSection";

//Middleware functions
import fetchInboxes from "../middleware/fetchInboxesFunction";
import fetchUser from "../middleware/fetchUser";
import handleLeaveInboxFunction from "../middleware/handleLeaveInboxFunction";
import fetchLastSeenMessage from "../middleware/fetchLastSeenMessage";
import fetchUsers from "../middleware/fetchUsers";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [inboxes, setInboxes] = useState([]);
  const [openSetting, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState({});
  const [lastSeenMessage, setLastSeenMessage] = useState(null);
  //const [error, setError] = useState(null);

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
    const getUser = async () => {
      const res = await fetchUser(userId);
      setUser(res);
    };

    getUser();
  }, [userId]);

  useEffect(() => {
    const getInboxes = async () => {
      const res = await fetchInboxes();
      setInboxes(res);
    };

    getInboxes();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetchUsers(userId);
      setUsers(res);
    };

    getUsers();
  }, [userId]);

  return (
    <>
      <h1 className="text-red-500 font-bold text-4xl">Welcome</h1>
      {user ? <h2>{user.username}</h2> : <p>Loading user...</p>}
      <InboxesSection
        inboxes={inboxes}
        setOpenChat={setOpenChat}
      ></InboxesSection>
      {openChat && (
        <ChatBox
          inboxId={openChat.id}
          inboxName={openChat.name}
          inboxMessages={openChat.messages}
          inboxMembers={openChat.members}
          lastSeenMessage={lastSeenMessage}
          setLastSeenMessage={setLastSeenMessage}
          fetchLastSeenMessage={fetchLastSeenMessage}
          user={user}
          openSetting={openSetting}
          setOpenSettings={setOpenSettings}
          handleLeaveInboxFunction={handleLeaveInboxFunction}
          //setError={setError}
          setOpenChat={setOpenChat}
        />
      )}

      <UsersSection users={users} setOpenChat={setOpenChat}></UsersSection>
    </>
  );
}
