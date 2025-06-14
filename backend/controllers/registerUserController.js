import bcrypt from "bcrypt";
import { findUserName, registerUser } from "../queries.js";

export default async function registerUserController(req, res) {
  try {
    const { username, password, bio, profilePicUrl } = req.body;

    // ✅ Check required fields
    if (!username || !password || !bio) {
      return res.status(400).send("Username, bio and password are required.");
    }

    const foundUser = await findUserName(username);

    if (foundUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await registerUser(
      username,
      hashedPassword,
      bio,
      profilePicUrl
    );

    return res.status(200).json(user);
  } catch (err) {
    console.error(
      "Error in the registerUserController during registration",
      err
    );
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
