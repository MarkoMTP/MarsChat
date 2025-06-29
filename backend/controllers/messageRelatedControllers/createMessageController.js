import { createNewMsg } from "../../queries.js";

export default async function createMessageController(req, res) {
  const { inboxId } = req.params;
  const { messageText } = req.body;
  const userId = req.user.id;

  try {
    if (!messageText || !userId) {
      return res.status(400).send("Message text or user id is missing");
    }

    await createNewMsg(messageText, userId, inboxId);
    return res.status(200).send("Message sent successfully");
  } catch (err) {
    console.error("Error while sending the message", err);
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
