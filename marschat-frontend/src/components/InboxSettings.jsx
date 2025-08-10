export default function InboxSettings({
  inboxMembers,
  setError,
  handleLeaveInboxFunction,
  userId,
  inboxId,
  setOpenChat,
}) {
  const handleLeaveInboxClick = async () => {
    const success = await handleLeaveInboxFunction(userId, inboxId);
    if (success) {
      setOpenChat(false);
    } else {
      setError("Failed to leave the inbox.");
    }
  };
  return (
    <>
      <h1>In group: </h1>
      {inboxMembers.map((member) => (
        <p key={member.id}>{member.username}</p>
      ))}

      <button onClick={handleLeaveInboxClick}>Leave Group</button>
    </>
  );
}
