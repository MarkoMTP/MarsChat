import { findUserById } from "../../queries";

export default async function getUserById(req, res) {
  const { userId } = req.params;

  try {
    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error("Couldn't find user error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
