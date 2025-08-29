export default function MessageBox({ message, lastSeenMessage, isOwn }) {
  return (
    <>
      <div
        className={`max-w-xs px-3 py-2 rounded-lg text-sm
        ${isOwn ? "bg-red-200 text-red" : "bg-green-200 text-gray-900"}`}
      >
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
