// /middleware/handleLeaveInboxFunction.js
import api from "../api";

export default async function handleLeaveInboxFunction(user, inboxId) {
  if (!inboxId) {
    console.warn("Missing inbox ID");
    return false;
  }
  if (!user?.data?.id) {
    console.warn("Missing user ID");
    return false;
  }

  // Find the InboxMember connection for this inbox
  const membership = user.data.inboxes.find((m) => m.inboxId === inboxId);

  if (!membership) {
    console.warn("User is not a member of this inbox");
    return false;
  }

  // Check if user is ADMIN and there are other members
  if (membership.role === "ADMIN" && membership.inbox?.members?.length > 1) {
    alert(
      "You cannot leave the group because there are still members inside and you are the only admin"
    );
    return false;
  }

  try {
    await api.delete(`/inbox/${inboxId}/member/${user.data.id}`);
    return true;
  } catch (err) {
    console.error("Failed to delete inbox member:", err);
    return false;
  }
}
