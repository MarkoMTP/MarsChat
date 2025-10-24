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
  removeUserFromInbox,
  otherUser,
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

  if (openAddUsersForm) {
    return (
      <AddNewUsersToGroup
        inboxId={inboxId}
        existingMembers={inboxMembers}
        onClose={() => setOpenAddUsersForm(false)}
      />
    );
  }

  const getProfilePic = (url) => {
    if (!url) return "/default-avatar.png";
    if (url.startsWith("http")) return url;
    return `http://localhost:12345${url.replace(/\\/g, "/")}`;
  };

  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-b from-[#3a0c0c] via-[#7a1b1b] to-[#a83232] text-[#fff0e6] p-6 rounded-2xl shadow-2xl overflow-y-auto">
      {/* HEADER */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold tracking-wide text-[#ffe6cc]">
          {inbox.isGroup ? "Group Settings" : "Chat Info"}
        </h1>
        <button
          className="px-3 py-1 text-sm bg-[#c2332b]/60 hover:bg-[#c2332b]/80 text-white rounded-lg transition"
          onClick={handleGoBack}
        >
          ✕ Close
        </button>
      </div>

      {/* CONTENT */}
      {inbox.isGroup ? (
        <div className="w-full">
          <h2 className="text-lg font-medium mb-3 text-[#ffd7b8]">
            Members ({inboxMembers.length})
          </h2>
          <div className="bg-[#ffffff1a] backdrop-blur-md rounded-lg p-4 space-y-2 max-h-[300px] overflow-y-auto border border-[#ffb464]/30 shadow-inner">
            {inboxMembers.map((member) => (
              <UserInInboxSettingsComponent
                key={member.user.id}
                member={member}
                user={user}
                inboxId={inboxId}
                setOpenSettings={setOpenSettings}
                removeUserFromInbox={removeUserFromInbox}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="px-5 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-lg font-medium transition shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
              onClick={() => setOpenAddUsersForm(true)}
            >
              ➕ Add Member
            </button>
          </div>
        </div>
      ) : (
        otherUser && (
          <div className="flex flex-col items-center mt-6 text-center">
            <div className="relative">
              <img
                src={getProfilePic(otherUser.profilePicUrl)}
                alt={`${otherUser.username}'s profile`}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#ffb464] shadow-[0_0_20px_rgba(255,180,100,0.6)]"
              />
              <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#3a0c0c]" />
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-[#ffe6cc]">
              {otherUser.username}
            </h2>
            <p className="text-[#ffd7b8]/80 text-sm mt-1">
              @{otherUser.username}
            </p>

            {otherUser.bio && (
              <p className="text-[#ffe6cc]/90 mt-4 max-w-xs italic leading-relaxed bg-[#ffffff1a] backdrop-blur-md p-3 rounded-lg shadow-inner border border-[#ffb464]/30">
                “{otherUser.bio}”
              </p>
            )}
          </div>
        )
      )}

      {/* FOOTER ACTIONS */}
      <div className="w-full flex justify-center gap-4 mt-10">
        {inbox.isGroup && (
          <button
            className="px-5 py-2 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 rounded-lg font-medium transition shadow-lg hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            onClick={() => handleLeaveInboxClick(user, inboxId)}
          >
            Leave Group
          </button>
        )}

        <button
          className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg font-medium transition shadow-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.6)]"
          onClick={handleGoBack}
        >
          Back to Chat
        </button>
      </div>
    </div>
  );
}
