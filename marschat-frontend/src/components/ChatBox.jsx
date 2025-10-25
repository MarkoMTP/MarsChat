import { use, useEffect, useRef, useState } from "react";
import MessageStack from "./MessageStack";
import MessageInput from "./MessageInput";
import InboxSettings from "./InboxSettings";
import onMessageSend from "../middleware/postMessageToInbox";

export default function ChatBox({
  inbox,
  inboxId,
  inboxName,
  inboxMessages,
  inboxMembers,
  lastSeenMessage,
  setLastSeenMessage,
  fetchLastSeenMessage,
  user,
  openSetting,
  setOpenSettings,
  handleLeaveInboxFunction,
  setError,
  setOpenChat,
  removeUserFromInbox,
  currentInboxRole,
}) {
  const [otherUser, setOtherUser] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!inboxId || !fetchLastSeenMessage) return;
    (async () => {
      const res = await fetchLastSeenMessage(inboxId);
      if (res) setLastSeenMessage(res);
    })();
  }, [inboxId, fetchLastSeenMessage, setLastSeenMessage]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [inboxMessages]);

  useEffect(() => {
    if (!inbox || inbox.isGroup) {
      setOtherUser(null);
      return;
    }
    if (!Array.isArray(inboxMembers)) {
      setOtherUser(null);
      return;
    }
    const foundUser = inboxMembers.find(
      (member) => member && member.user && member.user.id !== user.id
    )?.user;
    setOtherUser(foundUser || null);
  }, [inbox, inboxMembers, user]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#3a0c0c] via-[#7a1b1b] to-[#a83232] rounded-2xl shadow-xl overflow-hidden text-white">
      {/* HEADER */}
      <header className="h-16 bg-gradient-to-r from-[#a83232] via-[#c2332b] to-[#d93c2f] flex items-center justify-between px-5 shadow-md">
        <div className="flex items-center gap-3 min-w-0">
          {!inbox.isGroup && (
            <>
              <img
                src={otherUser?.profilePicUrl || "/default-avatar.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-[#ffb464] object-cover shadow-sm"
              />
              <div>
                <h2 className="font-semibold text-lg truncate text-[#fff0e6]">
                  {otherUser?.username || "User"}
                </h2>
                {otherUser?.bio && (
                  <p className="text-xs text-[#ffe6cc]/70 truncate">
                    {otherUser.bio}
                  </p>
                )}
              </div>
            </>
          )}
          {inbox.isGroup && (
            <div>
              <h2 className="font-semibold text-lg truncate text-[#fff0e6]">
                {inboxName || "Group Chat"}
              </h2>
              <p className="text-xs text-[#ffe6cc]/70">
                {Array.isArray(inboxMembers) ? inboxMembers.length : 0} members
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => setOpenSettings(true)}
          className="bg-[#ffffff1a] hover:bg-[#ffffff2a] text-[#fff0e6] px-3 py-1.5 rounded-lg text-sm transition-all shadow-inner"
        >
          ⚙️ Settings
        </button>
      </header>

      {/* BODY */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 space-y-3 bg-[#ffffff08] backdrop-blur-md"
      >
        {openSetting ? (
          <InboxSettings
            inboxMembers={inboxMembers}
            setError={setError}
            user={user}
            inboxId={inboxId}
            inbox={inbox}
            handleLeaveInboxFunction={handleLeaveInboxFunction}
            setOpenChat={setOpenChat}
            setOpenSettings={setOpenSettings}
            removeUserFromInbox={removeUserFromInbox}
            otherUser={otherUser}
            currentInboxRole={currentInboxRole}
          />
        ) : Array.isArray(inboxMessages) && inboxMessages.length > 0 ? (
          <div className="space-y-3">
            {inboxMessages.map((message) => (
              <MessageStack
                key={message.id}
                message={message}
                user={user}
                lastSeenMessage={lastSeenMessage}
              />
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-[#ffe6cc]/70 text-sm italic">
            No messages yet — start the conversation!
          </div>
        )}
      </div>

      {/* INPUT */}
      {!openSetting && (
        <footer className="border-t border-[#ffffff1a] bg-[#ffffff0f] p-3 backdrop-blur-md shadow-inner">
          <MessageInput
            inboxId={inboxId}
            onSend={(msg) => onMessageSend(msg, inboxId)}
          />
        </footer>
      )}
    </div>
  );
}
