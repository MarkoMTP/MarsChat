import {
  deleteInboxMemberByIds,
  findInboxMemberByIds,
  findUserById,
  getInboxById,
} from "../../queries";

export default async function removeUserFromInbox(req, res) {
  const { userId, inboxId } = req.params;

  try {
    if (!userId || !inboxId) {
      return res.status(404).send("Missing user or inbox id");
    }

    const foundInbox = await getInboxById(inboxId);

    if (!foundInbox) {
      return res.status(404).send("Inbox does not exist");
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      return res.status(404).send("User does not exist");
    }

    const foundInboxMember = await findInboxMemberByIds(userId, inboxId);

    if (!foundInboxMember.length) {
      return res.status(404).send("Inbox Member does not exist");
    }

    await deleteInboxMemberByIds(userId, inboxId);
    res.status(200).send("User successfully removed from inbox");
  } catch (err) {
    console.error("Error deleting inbox member :", err);
    return res.status(500).json({ error: "Failed to delete inbox member" });
  }
}
