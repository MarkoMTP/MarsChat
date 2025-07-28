export default function MessageBox({ message, lastSeenMessage, isOwn }) {
  return (
    <>
      <div>
        <p>{message.content}</p>

        {isOwn === false && lastSeenMessage ? (
          new Date(message.createdAt) < new Date(lastSeenMessage.createdAt) ? (
            <p>✓✓</p>
          ) : (
            <p>✓</p>
          )
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
