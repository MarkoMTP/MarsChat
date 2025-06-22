import { getInboxesForUser } from "../../queries";

export default async function getAllUserInboxes(req, res) {
  const userId = req.user.id;
  try {
    if (!userId) {
      return res
        .status(400)
        .send("Missing userId while fetching all user inboxes");
    }

    const inboxes = await getInboxesForUser(userId);

    res.status(200).send("Successfully fetched all inboxes for user");
  } catch (err) {
    console.error("Error fetching inboxes:", err);
    return res.status(500).json({ error: "Failed to fetch inboxes of user" });
  }
}
