import { createNewPrivateInbox } from "../queries";

export default async function createInboxController(req, res) {
  const { name } = req.body;

  try {
    if (name) {
      await createNewPrivateInbox(name);
      return res.status(200).send("Inbox created successfully");
    } else {
      return res.status(400).send("Inbox name missing");
    }
  } catch (err) {
    console.error(
      "Error in the registerUserController during registration",
      err
    );
    return res.status(500).json({ error: "Internal server error" }); // better than throwing
  }
}
