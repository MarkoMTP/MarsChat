import api from "../api";

export default async function openChatFromSendMessage(
  userId,
  setOpenChat,
  refetchInboxes
) {
  try {
    const { data } = await api.get(`/inbox/direct/${userId}`);
    // If inbox was just created, notify user and reset chat
    if (data.isNew === true) {
      // Create a simple floating notification
      const notif = document.createElement("div");
      notif.textContent =
        "✅ New inbox created. Please click again to open the chat.";
      notif.style.position = "fixed";
      notif.style.bottom = "20px";
      notif.style.left = "50%";
      notif.style.transform = "translateX(-50%)";
      notif.style.backgroundColor = "#333";
      notif.style.color = "white";
      notif.style.padding = "12px 20px";
      notif.style.borderRadius = "8px";
      notif.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
      notif.style.fontSize = "14px";
      notif.style.zIndex = "9999";
      document.body.appendChild(notif);

      setTimeout(() => notif.remove(), 4000);

      if (typeof refetchInboxes === "function") await refetchInboxes();
      setOpenChat();
      return;
    }

    // Always refresh inbox list first to keep sidebar up to date
    if (typeof refetchInboxes === "function") await refetchInboxes();

    // Then open the existing chat
    setOpenChat(data);
  } catch (err) {
    console.error("Failed to open chat:", err);

    // Attempt to refetch inboxes to recover state on error
    if (typeof refetchInboxes === "function") await refetchInboxes();
  }
}
