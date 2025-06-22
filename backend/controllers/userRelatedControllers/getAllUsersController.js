import { getAllOtherUsers } from "../../queries.js";

export default async function getAllOtherUsersController(req, res) {
  const userId = req.user.id;

  try {
    if (!userId) {
      return res.status(400).send("Missing userId");
    }

    const users = await getAllOtherUsers(userId);
    return res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
}
