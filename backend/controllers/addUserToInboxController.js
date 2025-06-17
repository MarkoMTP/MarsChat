import { addUserToInbox } from "../queries";

export default async function addUserToInboxController(req, res) {
  const { id: inboxId } = req.params;
  const { userId } = req.body;

  try {
    if (!inboxId || !userId) {
      return res.status(400).send("Inbox ID or user ID are missing");
    }

    await addUserToInbox(inboxId, userId);

    return res.status(200).send("Added user to inbox successfully");
  } catch (err) {
    console.error(
      "Error in the addUserToInboxController while adding a new user to an inbox",
      err
    );
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
