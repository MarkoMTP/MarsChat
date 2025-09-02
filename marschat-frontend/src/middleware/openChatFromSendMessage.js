import api from "../api";

export default async function openChatFromSendMessage(userId, setOpenChat) {
  try {
    const inbox = await api.get(`/inbox/direct/${userId}`);

    setOpenChat(inbox.data);
  } catch (err) {
    console.error("Failed to setOpenChat:", err);
  }
}
