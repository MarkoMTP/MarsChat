export default function UserInInboxSettingsComponent({
  member,
  user,
  inboxId,
  setOpenSettings,
  removeUserFromInbox,
}) {
  const membership = user.inboxes.find((m) => m.inboxId === inboxId);

  return (
    <div className="flex justify-between items-center gap-3 bg-red-900 bg-opacity-30 p-3 rounded-lg transition duration-300 hover:bg-red-800">
      <p key={member.user.id} className="text-white font-medium">
        {member.user.username}
      </p>
      {membership.role === "ADMIN" && (
        <button
          className="bg-red-600 p-2 rounded-lg hover:bg-red-800 hover:cursor-pointer transition duration-300 text-white"
          onClick={() =>
            removeUserFromInbox(member.user.id, inboxId, setOpenSettings)
          }
        >
          Kick out
        </button>
      )}
    </div>
  );
}
