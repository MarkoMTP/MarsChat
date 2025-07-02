import { findUserById, updateUser } from "../../queries.js";

export async function updateUserController(req, res) {
  const { userId } = req.params;
  const { username, bio, profilePicUrl } = req.body;

  try {
    if (!userId) {
      return res.status(404).send("UserId not found");
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      return res.status(404).send("User not found");
    }

    const updatedUser = await updateUser(userId, username, bio, profilePicUrl);

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Failed to update user:", err);
    res.status(500).json({ error: "Update failed" });
  }
}
