import express from "express";
import registerUserController from "./controllers/registerUserController.js";
import createMessageController from "./controllers/createMessageController.js";
import createInboxController from "./controllers/createInboxController.js";
import addUserToInboxController from "./controllers/addUserToInboxController.js";
import messageReadController from "./controllers/messageReadController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/register", registerUserController);

router.post("/inbox/:inboxId/message", createMessageController);

router.post("/inbox", createInboxController);

router.post("/inbox/:inboxId/member", addUserToInboxController);

//add controller and query just.
router.post("/message/:messageId/seen", messageReadController);

export default router;
