import express from "express";
import registerUserController from "./controllers/registerUserController.js";
import createMessageController from "./controllers/createMessageController.js";
import createInboxController from "./controllers/createInboxController.js";
import addUserToInboxController from "./controllers/addUserToInboxController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/register", registerUserController);

router.post("/inbox/:inboxId/message", createMessageController);

router.post("/inbox", createInboxController);

router.post("/inbox", createInboxController);

router.post("/inbox/:id/member", addUserToInboxController);

export default router;
