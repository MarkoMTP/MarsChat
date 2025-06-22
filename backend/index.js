import express from "express";
import registerUserController from "./controllers/userRelatedControllers/registerUserController.js";
import createMessageController from "./controllers/messageRelatedControllers/createMessageController.js";
import createInboxController from "./controllers/messageRelatedControllers/createInboxController.js";
import addUserToInboxController from "./controllers/userRelatedControllers/addUserToInboxController.js";
import messageReadController from "./controllers/messageRelatedControllers/messageReadController.js";
import getAllMessagesController from "./controllers/messageRelatedControllers/getAllMessagesController.js";
import getAllUserInboxes from "./controllers/userRelatedControllers/getAllUserInboxes.js";
import getAllOtherUsersController from "./controllers/userRelatedControllers/getAllUsersController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});

//  GET functions
router.get("/users/others", getAllOtherUsersController);

router.get("/inboxes", getAllUserInboxes);

router.get("/inbox/:inboxId/messages", getAllMessagesController);

// router.get("/inbox/:inboxId/read-status");

// POST functions
router.post("/register", registerUserController);

router.post("/inbox/:inboxId/message", createMessageController);

router.post("/inbox", createInboxController);

router.post("/inbox/:inboxId/member", addUserToInboxController);

router.post("/message/:messageId/seen", messageReadController);

// PUT/PATCH functions
// router.patch("/users/:userId/");

export default router;
