import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserName } from "../../queries.js";

export default async function logincontroller(req, res) {
  const { username, password } = req.body;

  try {
    const user = await findUserName(username);
    if (!user) {
      return res.status(200).send("User does not exist");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(200).send("Password is not correct");
    }

    //create a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    res.send({ message: "Logged in", token });
  } catch (err) {
    return console.error(err);
  }
}
