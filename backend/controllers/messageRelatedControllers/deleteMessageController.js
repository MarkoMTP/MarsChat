import { deleteMsg, getMsgById } from "../../queries.js";

export default async function deleteMessageController(req, res) {
  const { messageId } = req.params;

  try {
    if (!messageId) {
      return res.status(404).send("Message Id is missing");
    }

    const foundMsg = await getMsgById(messageId);

    if (!foundMsg) {
      return res.status(404).send("Message not found in the database");
    }

    await deleteMsg(messageId);

    res.status(200).send("Message deleted successfully");
  } catch (err) {
    console.error("Error while deleting the message", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
