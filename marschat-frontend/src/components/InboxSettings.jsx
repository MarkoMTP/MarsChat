import { useState } from "react";
import AddNewUsersToGroup from "./AddNewUsersForm";
import UserInInboxSettingsComponent from "./UserInInboxSettingsComponent";

export default function InboxSettings({
  inboxMembers,
  handleLeaveInboxFunction,
  user,
  inboxId,
  setOpenChat,
  setOpenSettings,
  inbox,
}) {
  const [openAddUsersForm, setOpenAddUsersForm] = useState(false);

  const handleLeaveInboxClick = async () => {
    const success = await handleLeaveInboxFunction(user, inboxId);
    if (success) {
      setOpenSettings(false);
      setOpenChat(null);
    } else {
      console.error("Failed to leave the inbox.");
    }
  };

  const handleGoBack = () => {
    setOpenSettings(false);
    setOpenChat(inbox);
  };

  // If Add Users form is open, render it
  if (openAddUsersForm) {
    return (
      <AddNewUsersToGroup
        inboxId={inboxId}
        existingMembers={inboxMembers}
        onClose={() => setOpenAddUsersForm(false)}
      />
    );
  }

  console.log(inboxMembers);

  return (
    <div>
      <h1>In group:</h1>

      {inboxMembers.map((member) => (
        <UserInInboxSettingsComponent
          key={member.user.id}
          member={member}
          user={user}
          inboxId={inboxId}
          setOpenSettings={setOpenSettings}
        ></UserInInboxSettingsComponent>
      ))}

      {/* Only show in group inboxes */}
      {inbox.isGroup && (
        <button
          className="p-3 bg-green-500 hover:bg-green-700 rounded-lg hover:cursor-pointer"
          onClick={() => setOpenAddUsersForm(true)}
        >
          Add new user
        </button>
      )}

      <button
        className="p-3 bg-sky-500 hover:bg-sky-700 rounded-lg hover:cursor-pointer"
        onClick={handleLeaveInboxClick}
      >
        Leave Group Chat
      </button>

      <button
        className="p-3 bg-red-500 hover:bg-red-700 rounded-lg ml-2 hover:cursor-pointer"
        onClick={handleGoBack}
      >
        Go back to chat
      </button>
    </div>
  );
}
