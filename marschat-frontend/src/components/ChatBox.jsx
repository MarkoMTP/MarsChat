import MessageStack from "./MessageStack";
import InboxSettings from "./InboxSettings";
import { useEffect } from "react";

export default function ChatBox({
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
}) {
  useEffect(() => {
    const getLastSeenMessage = async () => {
      const res = await fetchLastSeenMessage(inboxId);

      if (res) {
        setLastSeenMessage(res);
      } else {
        return;
      }
    };

    getLastSeenMessage();
  }, [inboxId, fetchLastSeenMessage, setLastSeenMessage]);

  return (
    <div className="bg-red">
      {openSetting === false ? (
        <div>
          <div>
            <h1>{inboxName}</h1>
            <button
              onClick={() => {
                setOpenSettings(true);
              }}
            >
              Settings
            </button>
          </div>

          {Array.isArray(inboxMessages) && inboxMessages.length > 0 ? (
            inboxMessages.map((message) => (
              <MessageStack
                key={message.id}
                message={message}
                user={user}
                lastSeenMessage={lastSeenMessage}
              />
            ))
          ) : (
            <p>No messages</p>
          )}
        </div>
      ) : (
        <InboxSettings
          inboxMembers={inboxMembers}
          setError={setError}
          userId={user.id}
          inboxId={inboxId}
          handleLeaveInboxFunction={handleLeaveInboxFunction}
          setOpenChat={setOpenChat}
        ></InboxSettings>
      )}
    </div>
  );
}
