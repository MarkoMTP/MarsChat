import { useState } from "react";

export default function MessageInput({ onSend, inboxId }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message, inboxId);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        rows={1}
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
      <button
        type="submit"
        className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-600 transition"
      >
        Send
      </button>
    </form>
  );
}
