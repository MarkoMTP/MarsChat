import { useState } from "react";
import MessageStack from "./MessageStack";
import InboxSettings from "./InboxSettings";

export default function ChatBox({
  inboxName,
  inboxMessages,
  inboxMembers,
  lastSeenMessage,
  user,
  handleFunction,
  handleLeaveInboxFunction,
}) {
  const [openSetting, setOpenSettings] = useState(false);

  return (
    <div>
      {openSetting === false ? (
        <div>
          <div className="Top section">
            <h1>{inboxName}</h1>
            <button
              onClick={() => {
                handleFunction(setOpenSettings);
              }}
            >
              Settings
            </button>
          </div>

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
        <InboxSettings
          inboxMembers={inboxMembers}
          handleLeaveInboxFunction={handleLeaveInboxFunction}
        ></InboxSettings>
      )}
    </div>
  );
}
