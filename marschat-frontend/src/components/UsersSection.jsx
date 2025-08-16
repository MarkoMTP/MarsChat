import UserComponent from "./UserComponent";
import openChatFromSendMessage from "../middleware/openChatFromSendMessage";

export default function UsersSection({ users, setOpenChat }) {
  return (
    <div>
      <h2>Users Section</h2>
      <div>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <UserComponent
              key={user.id}
              user={user}
              onClick={() => openChatFromSendMessage(user.id, setOpenChat)}
              setOpenChat={setOpenChat}
            />
          ))
        ) : (
          <p>No users </p>
        )}
      </div>
    </div>
  );
}
