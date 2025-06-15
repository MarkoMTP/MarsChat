import { createNewMsg } from "../queries";

export default async function createMessageController(req, res) {
  const { inboxId } = req.params;
  const { messageText } = req.body;
  const userId = req.user.id;

  try {
    await createNewMsg(messageText, userId, inboxId);
    return res.status(200).send("Message sent successfully");
  } catch (err) {
    console.error("Error while sending the message", err);
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
