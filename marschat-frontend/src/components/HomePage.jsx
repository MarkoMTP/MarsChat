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

  const isTestEnv = import.meta.env.MODE === "test";

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [inboxes, setInboxes] = useState([]);
  const [openSetting, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState(null);
  const [lastSeenMessage, setLastSeenMessage] = useState(null);
  const [currentInboxRole, setCurrentInboxRole] = useState(null);

  // mobile navigation state
  const [activeSection, setActiveSection] = useState("chats");

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

  // Fetch user
  useEffect(() => {
    if (!userId) return;
    (async () => {
      const fetched = await fetchUser(userId);
      setUser(fetched.data);
    })();
  }, [userId]);

  // Load inboxes
  const loadInboxes = async () => {
    try {
      setInboxes(await fetchInboxes());
    } catch (err) {
      console.error("Failed to fetch inboxes:", err);
    }
  };

  useEffect(() => {
    loadInboxes();
  }, [location.key]);

  useEffect(() => {
    if (!userId) return;
    (async () => setUsers(await fetchUsers(userId)))();
  }, [userId]);

  useEffect(() => {
    if (!user || !openChat?.id) return setCurrentInboxRole(null);
    setCurrentInboxRole(
      user.inboxes.find((m) => m.inboxId === openChat.id).role
    );
  }, [user, openChat]);

  // Helper for image URL
  const getProfilePic = (url) => {
    if (!url) return "/default-avatar.png";
    if (url.startsWith("http")) return url;
    return `http://localhost:12345${url.replace(/\\/g, "/")}`;
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-[#3a0c0c] via-[#7a1b1b] to-[#a83232] font-sans">
      {/* =========================
          DESKTOP SIDEBAR
      ========================== */}
      <aside className="hidden md:flex md:flex-col w-80 bg-gradient-to-b from-[#4a0f0f] via-[#7a1b1b] to-[#b33b2e] border-r border-[#7a1b1b] shadow-lg p-6 space-y-6">
        {/* User Header */}
        <div className="border-b border-[#7a1b1b] pb-5 bg-gradient-to-r from-[#d93c2f] via-[#c2332b] to-[#a62a26] text-[#ffe6cc] rounded-lg p-5 shadow-lg flex flex-col items-center gap-5 py-6 min-h-[150px]">
          <img
            src={getProfilePic(user?.profilePicUrl)}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#ffb464] shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,100,80,0.8)]"
          />
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold tracking-wide">
              {user ? user.username : "Loading..."}
            </h1>
            {user?.bio && (
              <p className="text-sm text-[#ffe6cc] tracking-wide mt-1">
                {user.bio}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate("/edit/profile", { state: { userId } })}
            className="mt-2 bg-gradient-to-r from-[#d93c2f] via-[#c2332b] to-[#a62a26] text-[#ffe6cc] font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,100,80,0.8)] hover:scale-105 text-sm sm:text-base"
          >
            Edit Profile
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto space-y-8">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-[#ffe6cc] mb-2">
              Inboxes
            </h2>
            <InboxesSection inboxes={inboxes} setOpenChat={setOpenChat} />
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-wide text-[#ffe6cc] mb-2">
              People
            </h2>
            <UsersSection
              users={users}
              setOpenChat={setOpenChat}
              openChatFromSendMessage={openChatFromSendMessage}
            />
          </div>

          <div>
            <button
              onClick={() => navigate("/chat/new")}
              className="w-full bg-gradient-to-r from-[#d93c2f] via-[#c2332b] to-[#a62a26] text-[#ffe6cc] px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,100,80,0.8)] hover:scale-105 cursor-pointer"
            >
              + New Group
            </button>
          </div>
        </div>

        <div className="border-t border-[#7a1b1b] pt-4">
          <button
            onClick={logout}
            className="w-full bg-gradient-to-r from-[#a62a26] via-[#c2332b] to-[#d93c2f] text-[#ffe6cc] rounded-lg px-5 py-2 font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,100,80,0.8)] hover:scale-105 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* =========================
          MOBILE + DESKTOP MAIN AREA
      ========================== */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* MOBILE VIEW */}
        {!isTestEnv && (
          <section className="flex flex-col md:hidden h-screen bg-gradient-to-b from-[#3a0c0c] via-[#7a1b1b] to-[#4a0f0f] overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-[#7a1b1b] text-[#ffe6cc] shadow-md">
              {openChat ? (
                <button
                  onClick={() => setOpenChat(null)}
                  className="text-[#ffe6cc] font-medium hover:text-[#ffb464]"
                >
                  ← Back
                </button>
              ) : (
                <h1 className="text-lg font-semibold">MarsChat</h1>
              )}
              <button
                onClick={logout}
                className="text-[#ffe6cc] font-medium hover:text-[#ffb464]"
              >
                Logout
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 pb-24">
              {activeSection === "chats" && (
                <>
                  {!openChat?.id ? (
                    <>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-[#ffe6cc]">
                          Chats
                        </h2>
                        <button
                          onClick={() => navigate("/chat/new")}
                          className="bg-gradient-to-r from-[#d93c2f] via-[#c2332b] to-[#a62a26] text-[#ffe6cc] px-3 py-1.5 rounded-md font-semibold text-sm shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,100,80,0.8)] hover:scale-105"
                        >
                          + New Group
                        </button>
                      </div>

                      <InboxesSection
                        inboxes={inboxes}
                        setOpenChat={(chat) => {
                          setOpenChat(chat);
                          setActiveSection("chats");
                        }}
                      />
                    </>
                  ) : (
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
                      currentInboxRole={currentInboxRole}
                    />
                  )}
                </>
              )}

              {activeSection === "people" && (
                <div>
                  <h2 className="text-xl font-semibold text-[#ffe6cc] mb-4">
                    People
                  </h2>
                  <UsersSection
                    users={users}
                    setOpenChat={(chat) => {
                      setOpenChat(chat);
                      setActiveSection("chats");
                    }}
                    openChatFromSendMessage={openChatFromSendMessage}
                  />
                </div>
              )}

              {activeSection === "profile" && (
                <div className="flex flex-col items-center text-center mt-6 text-[#ffe6cc]">
                  <img
                    src={getProfilePic(user?.profilePicUrl)}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-[#ffb464] mb-4"
                  />
                  <h1 className="text-2xl font-semibold">
                    {user ? user.username : "Loading..."}
                  </h1>
                  {user?.bio && (
                    <p className="text-sm text-[#ffe6cc] mt-2">{user.bio}</p>
                  )}
                  <button
                    onClick={() =>
                      navigate("/edit/profile", { state: { userId } })
                    }
                    className="mt-4 bg-gradient-to-r from-[#d93c2f] via-[#c2332b] to-[#a62a26] px-5 py-2 rounded-lg text-[#ffe6cc] font-semibold hover:scale-105 transition-transform"
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>

            <nav className="fixed bottom-0 left-0 right-0 bg-[#7a1b1b] border-t border-[#a62a26] flex justify-around py-2 z-50">
              <button
                onClick={() => {
                  setActiveSection("chats");
                  setOpenChat(null);
                }}
                className={`flex flex-col items-center text-sm ${
                  activeSection === "chats"
                    ? "text-[#ffb464]"
                    : "text-[#ffe6cc]"
                }`}
              >
                💬
                <span>Chats</span>
              </button>

              <button
                onClick={() => {
                  setActiveSection("people");
                  setOpenChat(null);
                }}
                className={`flex flex-col items-center text-sm ${
                  activeSection === "people"
                    ? "text-[#ffb464]"
                    : "text-[#ffe6cc]"
                }`}
              >
                👥
                <span>People</span>
              </button>

              <button
                onClick={() => {
                  setActiveSection("profile");
                  setOpenChat(null);
                }}
                className={`flex flex-col items-center text-sm ${
                  activeSection === "profile"
                    ? "text-[#ffb464]"
                    : "text-[#ffe6cc]"
                }`}
              >
                ⚙️
                <span>Profile</span>
              </button>
            </nav>
          </section>
        )}

        {/* DESKTOP VIEW */}
        <section className="hidden md:flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-6">
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
                currentInboxRole={currentInboxRole}
              />
            ) : (
              <div className="h-full grid place-items-center text-center text-[#ffe6cc]">
                <div>
                  <div className="text-5xl mb-2 animate-pulse">💬</div>
                  <h3 className="text-2xl font-semibold tracking-wide">
                    No chat selected
                  </h3>
                  <p className="text-base tracking-wide">
                    Pick an inbox on the left or start a new conversation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
