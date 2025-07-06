import { getInboxById } from "../../queries.js";

export default async function getInboxController(req, res) {
  const { inboxId } = req.params;
  try {
    if (!inboxId) {
      return res
        .status(400)
        .send("Missing inboxId while fetching all user inboxes");
    }

    const inbox = await getInboxById(inboxId);

    res.status(200).send("Successfully fetched all inboxes for user");
  } catch (err) {
    console.error("Error fetching inbox:", err);
    return res.status(500).json({ error: "Failed to fetch inbox" });
  }
}
