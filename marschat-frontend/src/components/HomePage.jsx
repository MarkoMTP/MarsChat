import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

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
import { useLocation, useNavigate } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [inboxes, setInboxes] = useState([]);
  const [openSetting, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState(null); // start null, not {}
  const [lastSeenMessage, setLastSeenMessage] = useState(null);
  const navigate = useNavigate();

  // Get userId from JWT
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

  const loadInboxes = async () => {
    try {
      setInboxes(await fetchInboxes());
    } catch (err) {
      console.error("Failed to fetch inboxes:", err);
    }
  };

  // Fetch logged-in user
  useEffect(() => {
    if (!userId) return;
    (async () => setUser(await fetchUser(userId)))();
  }, [userId]);

  useEffect(() => {
    loadInboxes();
  }, []);

  // Keep this
  useEffect(() => {
    loadInboxes();
  }, [location.key]);
  // Fetch users (exclude me on the server or filter client-side)
  useEffect(() => {
    if (!userId) return;
    (async () => setUsers(await fetchUsers(userId)))();
  }, [userId]);

  useEffect(() => {
    loadInboxes();
  }, [location.key]);

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-72 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">MarsChat</h1>
          <p className="text-sm text-gray-500">
            {user ? `Hi, ${user.data.username}` : "Loading user..."}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pl-4">
          <div className="px-4 py-3 text-xs uppercase tracking-wide text-gray-400">
            Inboxes
          </div>
          <InboxesSection inboxes={inboxes} setOpenChat={setOpenChat} />

          <div className="px-4 pt-4 pb-2 text-xs uppercase tracking-wide text-gray-400">
            People
          </div>
          <div className="px-2 pb-4">
            <UsersSection users={users} setOpenChat={setOpenChat} />
          </div>

          <button
            onClick={() => navigate("/chat/new")}
            className="bg-sky-500 text-white px-4 py-2 rounded"
          >
            + New Group
          </button>
        </div>

        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b flex items-center justify-between px-4">
          <div className="min-w-0">
            {openChat?.id ? (
              <>
                <h2 className="text-lg font-semibold truncate">
                  {openChat.name}
                </h2>
                <p className="text-xs text-gray-500">
                  {openChat?.members?.length ?? 0} members
                </p>
              </>
            ) : (
              <h2 className="text-lg font-semibold text-gray-600">
                Select a chat
              </h2>
            )}
          </div>

          {/* Mobile logout */}
          <div className="md:hidden">
            <button
              onClick={logout}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-3 py-1.5 text-sm transition"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-4">
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
            />
          ) : (
            <div className="h-full grid place-items-center">
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <h3 className="text-lg font-semibold">No chat selected</h3>
                <p className="text-sm text-gray-500">
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
