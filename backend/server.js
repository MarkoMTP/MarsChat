import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./index.js";
import mockAuth from "./middleware/mockAuth.js";
import passport from "./passport/passport.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "test") {
  app.use(mockAuth);
}

app.use(passport.initialize());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", router);

const PORT = process.env.PORT || 12345;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
