import api from "../api";

export default async function fetchLastSeenMessage(inboxId) {
  try {
    const { data: messages } = await api.get(`/inbox/${inboxId}/messages`);

    if (!Array.isArray(messages) || messages.length === 0) {
      return null;
    }

    const seenMessages = messages.filter(
      (msg) => Array.isArray(msg.reads) && msg.reads.length > 0
    );

    if (seenMessages.length === 0) {
      return null;
    }

    return seenMessages.reduce((latest, current) =>
      new Date(current.createdAt) > new Date(latest.createdAt)
        ? current
        : latest
    );
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    return null;
  }
}
