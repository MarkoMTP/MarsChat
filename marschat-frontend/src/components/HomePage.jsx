import { jwtDecode } from "jwt-decode";
import api from "../api";
import { use, useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import InboxesSection from "./InboxesSection";
import fetchInboxes from "../middleware/fetchInboxesFunction";
import fetchUser from "../middleware/fetchUser";
import handleLeaveInboxFunction from "../middleware/handleLeaveInboxFunction";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [inboxes, setInboxes] = useState([]);
  const [openSetting, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState();
  const [error, setError] = useState(null);

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

  return (
    <>
      <h1>Welcome</h1>
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
          lastSeenMessage={openChat.lastSeenMessage}
          user={user}
          openSetting={openSetting}
          setOpenSettings={setOpenSettings}
          handleLeaveInboxFunction={handleLeaveInboxFunction}
          setError={setError}
          setOpenChat={setOpenChat}
        />
      )}
    </>
  );
}
