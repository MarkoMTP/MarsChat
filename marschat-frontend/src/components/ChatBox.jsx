import { useEffect, useRef, useState } from "react";
import MessageStack from "./MessageStack";
import MessageInput from "./MessageInput";
import InboxSettings from "./InboxSettings";
import onMessageSend from "../middleware/postMessageToInbox";

export default function ChatBox({
  inbox,
  inboxId,
  inboxName,
  inboxMessages = [],
  inboxMembers = [],
  lastSeenMessage,
  setLastSeenMessage,
  fetchLastSeenMessage,
  user,
  openSetting,
  setOpenSettings,
  handleLeaveInboxFunction,
  setError,
  setOpenChat,
}) {
  const scrollRef = useRef(null);

  // fetch last seen for this inbox
  useEffect(() => {
    if (!inboxId || !fetchLastSeenMessage) return;
    (async () => {
      const res = await fetchLastSeenMessage(inboxId);
      if (res) setLastSeenMessage(res);
    })();
  }, [inboxId, fetchLastSeenMessage, setLastSeenMessage]);

  // auto-scroll to bottom when messages change
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [inboxMessages]);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border">
      {/* Header */}
      <header className="h-14 border-b flex items-center justify-between px-4">
        <div className="min-w-0">
          <h2 className="font-semibold truncate">{inboxName || "Chat"}</h2>
          <p className="text-xs text-gray-500">
            {Array.isArray(inboxMembers) ? inboxMembers.length : 0} members
          </p>
        </div>
        <button
          onClick={() => setOpenSettings(true)}
          className="text-sm px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          Settings
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
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
          />
        ) : Array.isArray(inboxMessages) && inboxMessages.length > 0 ? (
          <div className="space-y-2">
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
          <div className="h-full grid place-items-center text-sm text-gray-500">
            No messages
          </div>
        )}
      </div>

      {/* Input pinned bottom */}
      <footer className="border-t p-3 gap-4">
        <MessageInput
          inboxId={inboxId}
          onSend={(msg) => onMessageSend(msg, inboxId)}
        />
      </footer>
    </div>
  );
}
