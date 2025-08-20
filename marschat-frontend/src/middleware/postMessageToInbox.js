import api from "../api";

export default async function onMessageSend(message, inboxId) {
  try {
    const token = localStorage.getItem("token");

    await api.post(
      `/inbox/${inboxId}/message`,
      {
        messageText: message, // request body
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.error("Failed to send message to inbox from the frontend:", err);
  }
}
