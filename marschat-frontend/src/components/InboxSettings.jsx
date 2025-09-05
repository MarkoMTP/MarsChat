export default function InboxSettings({
  inboxMembers,
  handleLeaveInboxFunction,
  user,
  inboxId,
  setOpenChat,
  setOpenSettings,
  inbox,
}) {
  const handleLeaveInboxClick = async () => {
    const success = await handleLeaveInboxFunction(user.data.id, inboxId);
    console.log(user);
    if (success) {
      setOpenSettings(false);
      setOpenChat(null);
    } else {
      console.error("Failed to leave the inbox.");
    }
  };

  const handleGoBack = async () => {
    try {
      await setOpenSettings(false);
      await setOpenChat(inbox);
    } catch {
      console.error("Failed to go back the inbox.");
    }
  };

  console.log(inboxMembers);

  return (
    <>
      <h1>In group: </h1>

      {inboxMembers.map((member) => (
        <p key={member.user.id} className="color-black">
          {member.user.username}
        </p>
      ))}

      <button
        className="p-3 bg-sky-500 hover:bg-sky-700 rounded-lg"
        onClick={handleLeaveInboxClick}
      >
        Leave Group Chat
      </button>

      <button
        className="p-3 bg-red-500 hover:bg-red-700 rounded-lg ml-2"
        onClick={handleGoBack}
      >
        Go back to chat
      </button>
    </>
  );
}
