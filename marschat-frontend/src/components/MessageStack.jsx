import MessageBox from "./MessageBox";

export default function MessageStack({ message, user, lastSeenMessage }) {
  const isOwn = message.senderId === user.id;

  return (
    <div
      data-testid={`message-stack-${message.id}`}
      className={`flex ${isOwn ? "justify-start" : "justify-end"}`}
    >
      <MessageBox
        message={message}
        lastSeenMessage={lastSeenMessage}
        isOwn={isOwn}
      ></MessageBox>
    </div>
  );
}
