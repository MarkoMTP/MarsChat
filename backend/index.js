import express from "express";
import registerUserController from "./controllers/registerUserController.js";
import createMessageController from "./controllers/createMessageController.js";
import createInboxController from "./controllers/createInboxController.js";
import addUserToInboxController from "./controllers/addUserToInboxController.js";
import messageReadController from "./controllers/messageReadController.js";
import getAllMessagesController from "./controllers/getAllMessagesController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});

//  GET functions
// router.get("/users");

// router.get("/inboxes");

router.get("/inbox/:inboxId/messages", getAllMessagesController);

// router.get("/inbox/:inboxId/read-status");

router.post("/register", registerUserController);

// POST functions

router.post("/inbox/:inboxId/message", createMessageController);

router.post("/inbox", createInboxController);

router.post("/inbox/:inboxId/member", addUserToInboxController);

router.post("/message/:messageId/seen", messageReadController);

// PUT/PATCH functions
// router.patch("/users/:userId/");

export default router;
