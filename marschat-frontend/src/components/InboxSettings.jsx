export default function InboxSettings({
  inboxMembers,
  handleLeaveInboxFunction,
}) {
  return (
    <>
      <h1>In group: </h1>
      {inboxMembers.map((member) => (
        <p key={member.id}>{member.username}</p>
      ))}

      <button onClick={handleLeaveInboxFunction}>Leave Group</button>
    </>
  );
}
