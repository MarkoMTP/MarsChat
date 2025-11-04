import UserComponent from "./UserComponent";

export default function UsersSection({
  users,
  setOpenChat,
  openChatFromSendMessage,
  fetchInboxes,
}) {
  return (
    <div className="space-y-3">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user) => (
          <UserComponent
            key={user.id}
            user={user}
            onClick={() => {
              openChatFromSendMessage(user.id, setOpenChat, fetchInboxes);
            }}
          />
        ))
      ) : (
        <p className="text-sm text-gray-500 italic px-2">No users</p>
      )}
    </div>
  );
}
