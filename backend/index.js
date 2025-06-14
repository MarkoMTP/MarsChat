import express from "express";
import registerUserController from "./controllers/registerUserController";

const router = express.Router();

router.post("/register", registerUserController);

export default router;
