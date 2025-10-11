import express from "express";
import passport from "./passport/passport.js";
// routes/userRoutes.js
import multer from "multer";
import path from "path";
import fs from "fs";
import registerUserController from "./controllers/userRelatedControllers/registerUserController.js";
import logincontroller from "./controllers/userRelatedControllers/loginController.js";

import createMessageController from "./controllers/messageRelatedControllers/createMessageController.js";
import createInboxController from "./controllers/messageRelatedControllers/createInboxController.js";
import deleteMessageController from "./controllers/messageRelatedControllers/deleteMessageController.js";
import deleteInboxController from "./controllers/messageRelatedControllers/deleteInboxController.js";
import messageReadController from "./controllers/messageRelatedControllers/messageReadController.js";
import getAllMessagesController from "./controllers/messageRelatedControllers/getAllMessagesController.js";

import getAllUserInboxes from "./controllers/userRelatedControllers/getAllUserInboxes.js";
import getAllOtherUsersController from "./controllers/userRelatedControllers/getAllUsersController.js";
import { updateUserController } from "./controllers/userRelatedControllers/updateUserController.js";
import addUserToInboxController from "./controllers/userRelatedControllers/addUserToInboxController.js";
import removeUserFromInbox from "./controllers/userRelatedControllers/removeUserFromInboxController.js";

import { getAllUsers, getInboxById } from "./queries.js";
import getInboxController from "./controllers/userRelatedControllers/getInboxController.js";
import getUserById from "./controllers/userRelatedControllers/getUserController.js";
import getOrCreateInbox from "./controllers/messageRelatedControllers/getOrCreateInbox.js";
import addMultipleMembersController from "./controllers/userRelatedControllers/addUsersToInbox.js";
import createGroupInboxController from "./controllers/messageRelatedControllers/createGroupInbox.js";

// ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.params.userId}-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});

// ✅ Public routes
router.post("/register", registerUserController);
router.post("/login", logincontroller);

// ✅ Protected routes
router.get(
  "/users/others",
  passport.authenticate("jwt", { session: false }),
  getAllOtherUsersController
);

router.get(
  "/users/:userId",
  passport.authenticate("jwt", { session: false }),
  getUserById
);

router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }
);

router.get(
  "/inboxes",
  passport.authenticate("jwt", { session: false }),
  getAllUserInboxes
);

router.get(
  "/inbox/:inboxId",
  passport.authenticate("jwt", { session: false }),
  getInboxController
);

router.get(
  "/inbox/:inboxId/messages",
  passport.authenticate("jwt", { session: false }),
  getAllMessagesController
);

router.get(
  "/inbox/direct/:userId",
  passport.authenticate("jwt", { session: false }),
  getOrCreateInbox
);

router.post(
  "/inbox/:inboxId/message",
  passport.authenticate("jwt", { session: false }),
  createMessageController
);
router.post(
  "/inbox",
  passport.authenticate("jwt", { session: false }),
  createInboxController
);

router.post(
  "/inbox/group",
  passport.authenticate("jwt", { session: false }),
  createGroupInboxController
);
router.post(
  "/inbox/:inboxId/member",
  passport.authenticate("jwt", { session: false }),
  addUserToInboxController
);
router.post(
  "/inbox/:inboxId/members",
  passport.authenticate("jwt", { session: false }),
  addMultipleMembersController
);

router.post(
  "/message/:messageId/seen",
  passport.authenticate("jwt", { session: false }),
  messageReadController
);

router.patch(
  "/users/:userId",
  passport.authenticate("jwt", { session: false }),
  upload.single("profilePic"),
  updateUserController
);

router.delete(
  "/message/:messageId",
  passport.authenticate("jwt", { session: false }),
  deleteMessageController
);
router.delete(
  "/inbox/:inboxId/member/:userId",
  passport.authenticate("jwt", { session: false }),
  removeUserFromInbox
);
router.delete(
  "/inbox/:inboxId",
  passport.authenticate("jwt", { session: false }),
  deleteInboxController
);

export default router;
