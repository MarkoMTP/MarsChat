export default function UserInInboxSettingsComponent({
  member,
  user,
  inboxId,
  setOpenSettings,
  removeUserFromInbox,
}) {
  const membership = user.inboxes.find((m) => m.inboxId === inboxId);

  return (
    <div className="flex gap-3 ">
      {" "}
      <p key={member.user.id} className="color-black">
        {member.user.username}
      </p>
      {membership.role === "ADMIN" && (
        <button
          className="bg-red-500 p-2 hover:bg-red-700 hover:cursor-pointer  rounded-lg"
          onClick={() =>
            removeUserFromInbox(member.user.id, inboxId, setOpenSettings)
          }
        >
          {" "}
          Kick out
        </button>
      )}
    </div>
  );
}
