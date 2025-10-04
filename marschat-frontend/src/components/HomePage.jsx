import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import ChatBox from "./ChatBox";
import InboxesSection from "./InboxesSection";
import UsersSection from "./UsersSection";

// Middleware
import fetchInboxes from "../middleware/fetchInboxesFunction";
import fetchUser from "../middleware/fetchUser";
import handleLeaveInboxFunction from "../middleware/handleLeaveInboxFunction";
import fetchLastSeenMessage from "../middleware/fetchLastSeenMessage";
import fetchUsers from "../middleware/fetchUsers";
import logout from "../middleware/logout";
import openChatFromSendMessage from "../middleware/openChatFromSendMessage";
import removeUserFromInbox from "../middleware/removeUserFromInbox";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [inboxes, setInboxes] = useState([]);
  const [openSetting, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState(null);
  const [lastSeenMessage, setLastSeenMessage] = useState(null);

  // Decode JWT for userId
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  // Load inboxes
  const loadInboxes = async () => {
    try {
      setInboxes(await fetchInboxes());
    } catch (err) {
      console.error("Failed to fetch inboxes:", err);
    }
  };

  // Fetch user
  useEffect(() => {
    if (!userId) return;
    (async () => setUser(await fetchUser(userId)))();
  }, [userId]);

  // Fetch inboxes on mount + when location changes
  useEffect(() => {
    loadInboxes();
  }, [location.key]);

  // Fetch users list
  useEffect(() => {
    if (!userId) return;
    (async () => setUsers(await fetchUsers(userId)))();
  }, [userId]);

  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-72 bg-white border-r shadow-lg p-5 space-y-6">
        {/* Header */}
        <div className="border-b pb-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg p-4 shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight">MarsChat</h1>
          <p className="text-sm mt-1">
            {user ? `Hi, ${user.data.username}` : "Loading user..."}
          </p>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Inboxes */}
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Inboxes
            </h2>
            <InboxesSection inboxes={inboxes} setOpenChat={setOpenChat} />
          </div>

          {/* People */}
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              People
            </h2>
            <UsersSection
              users={users}
              setOpenChat={setOpenChat}
              openChatFromSendMessage={openChatFromSendMessage}
            />
          </div>

          {/* New Group Button */}
          <div>
            <button
              onClick={() => navigate("/chat/new")}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition cursor-pointer"
            >
              + New Group
            </button>
          </div>
        </div>

        {/* Footer / Logout */}
        <div className="border-t pt-4">
          <button
            onClick={logout}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2 font-medium transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Mobile logout */}
        <div className="md:hidden">
          <button
            onClick={logout}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1.5 text-sm transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        <section className="flex-1 overflow-y-auto p-6">
          {openChat?.id ? (
            <ChatBox
              inbox={openChat}
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
              setOpenChat={setOpenChat}
              removeUserFromInbox={removeUserFromInbox}
            />
          ) : (
            <div className="h-full grid place-items-center text-center text-gray-500">
              <div>
                <div className="text-4xl mb-2">💬</div>
                <h3 className="text-lg font-semibold">No chat selected</h3>
                <p className="text-sm">
                  Pick an inbox on the left or start a new conversation.
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
