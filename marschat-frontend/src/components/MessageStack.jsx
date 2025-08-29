import MessageBox from "./MessageBox";

export default function MessageStack({ message, user, lastSeenMessage }) {
  const isOwn = message.senderId === user.data.id; // safe if user is null

  return (
    <div
      data-testid={`message-stack-${message.id}`}
      className={`flex w-full ${isOwn ? "justify-start" : "justify-end"}`}
    >
      <MessageBox
        message={message}
        lastSeenMessage={lastSeenMessage}
        isOwn={isOwn}
      />
    </div>
  );
}
