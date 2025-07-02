import { deleteInboxById, getInboxById } from "../../queries.js";

export default async function deleteInboxController(req, res) {
  const { inboxId } = req.params;

  try {
    if (!inboxId) {
      return res.status(404).send("Missing inbox Id");
    }

    const foundInbox = await getInboxById(inboxId);

    if (!foundInbox) {
      return res.status(404).send("Inbox does not exist");
    }

    await deleteInboxById(inboxId);
    res.status(200).send("Inbox successfully deleted");
  } catch (err) {
    console.error("Error while deleting the inbox", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
