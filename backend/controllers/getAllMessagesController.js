import { getAllMessages } from "../queries.js";

export default async function (req, res) {
  const { inboxId } = req.params;

  try {
    const messages = await getAllMessages(inboxId);

    return res.status(200).send("Messages fetched");
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
}
