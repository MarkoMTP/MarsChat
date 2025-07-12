export default function MessageBox({ message, lastSeenMessage }) {
  return (
    <>
      <div>
        <p>{message.content}</p>

        {new Date(message.createdAt) < new Date(lastSeenMessage.createdAt) ? (
          <p>✓✓</p>
        ) : (
          <p>✓</p>
        )}
      </div>
    </>
  );
}
