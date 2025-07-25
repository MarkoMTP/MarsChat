// /middleware/handleLeaveInboxFunction.js
import api from "../api";

export default async function handleLeaveInboxFunction(userId, inboxId) {
  if (!userId || !inboxId) {
    console.warn("Missing user ID or inbox ID");
    return false;
  }

  try {
    await api.delete(`/inbox/${inboxId}/member/${userId}`);
    return true;
  } catch (err) {
    console.error("Failed to delete inbox member:", err);
    return false;
  }
}
