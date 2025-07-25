import MessageStack from "./MessageStack";
import InboxSettings from "./InboxSettings";

export default function ChatBox({
  inboxId,
  inboxName,
  inboxMessages,
  inboxMembers,
  lastSeenMessage,
  user,
  openSetting,
  setOpenSettings,
  handleLeaveInboxFunction,
  setError,
  setOpenChat,
}) {
  return (
    <div>
      {openSetting === false ? (
        <div>
          <div className="Top section">
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
