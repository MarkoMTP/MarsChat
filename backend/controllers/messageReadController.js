import { messageRead } from "../queries";

export default async function messageReadController(req, res) {
  const { messageId } = req.params;
  const { userId } = req.body;

  try {
    if (!messageId || !userId) {
      return res.status(400).send("Message id or user id is missing");
    }

    await messageRead(messageId, userId);
    return res.status(200).send("Message read successfully");
  } catch (err) {
    console.error("Error while reading the message", err);
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
