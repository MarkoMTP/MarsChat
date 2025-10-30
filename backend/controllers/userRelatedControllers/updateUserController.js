import { findUserById, updateUser } from "../../queries.js";

export async function updateUserController(req, res) {
  const { userId } = req.params;
  const { username, bio } = req.body;

  try {
    if (!userId) {
      return res.status(400).json({ error: "User ID missing" });
    }

    const foundUser = await findUserById(userId);
    if (!foundUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // 🧠 Debug logs (temporary – helps you see what Cloudinary returns)
    console.log("🔹 req.file:", req.file);
    console.log("🔹 req.body:", req.body);

    // ✅ Determine correct profile picture URL
    let profilePicUrl = foundUser.profilePicUrl || null;

    if (req.file && req.file.path) {
      // Cloudinary returns `req.file.path` as the hosted URL
      profilePicUrl = req.file.path;
    } else if (req.body.profilePicUrl) {
      // fallback if sent from frontend as plain URL
      profilePicUrl = req.body.profilePicUrl;
    }

    // ✅ Update user record in DB
    const updatedUser = await updateUser(userId, username, bio, profilePicUrl);

    console.log("✅ User updated:", updatedUser.data);

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("❌ Failed to update user:", err);
    return res.status(500).json({
      error: err.message || "Internal server error",
    });
  }
}
