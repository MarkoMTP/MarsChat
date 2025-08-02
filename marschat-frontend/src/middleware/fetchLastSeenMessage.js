import api from "../api";

export default async function fetchLastSeenMessage(inboxId) {
  try {
    const res = await api.get(`/inbox/${inboxId}/messages`);
    const messages = res.data;

    const seenMessages = messages.filter(
      (msg) => msg.reads && msg.reads.length > 0
    );

    if (seenMessages.length === 0) return null;

    const latestSeenMessage = seenMessages.reduce((latest, current) => {
      return new Date(current.createdAt) > new Date(latest.createdAt)
        ? current
        : latest;
    });

    return latestSeenMessage;
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    return null;
  }
}
