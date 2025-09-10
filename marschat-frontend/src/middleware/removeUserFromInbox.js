import api from "../api";

export default async function removeUserFromInbox(
  userId,
  inboxId,
  setOpenSettings
) {
  try {
    await api.delete(`/inbox/${inboxId}/member/${userId}`);
    setOpenSettings(false);
  } catch (err) {
    console.error(
      "Frontend: Removing user from inbox Error:",
      err.response ? err.response.data : err.message
    );
  }
}
