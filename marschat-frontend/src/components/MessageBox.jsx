export default function MessageBox({ message, lastSeenMessage, isOwn }) {
  return (
    <>
      <div
        className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow-md ${
          isOwn
            ? "bg-gradient-to-r from-red-600 to-red-500 text-white self-end border border-red-400"
            : "bg-white/90 text-black border border-red-300"
        }`}
      >
        {isOwn === false && (
          <p className="text-xs font-bold text-red-600 mb-1 tracking-wide">
            {message.sender.username}
          </p>
        )}
        <p>{message.content}</p>
      </div>
    </>
  );
}
