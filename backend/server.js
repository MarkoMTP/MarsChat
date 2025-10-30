import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./index.js";
import mockAuth from "./middleware/mockAuth.js";
import passport from "./passport/passport.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Important: Handle form-data uploads
// Cloudinary upload routes need this, but not globally — so don’t use express.urlencoded everywhere
// Just keep express.json() for other routes

if (process.env.NODE_ENV === "test") {
  app.use(mockAuth);
}

app.use(
  cors({
    origin: [
      "http://localhost:5173", // for local dev
      "https://mars-chat-imiz9x4xn-markomtps-projects.vercel.app", // your deployed frontend
      "https://mars-chat.vercel.app", // optional, if you plan to use the main domain
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(passport.initialize());

// 🧠 If you still use local uploads (development only):
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ All routes
app.use("/", router);

// ✅ Global error handler (so we never get HTML again)
app.use((err, req, res, next) => {
  console.error("🔥 Uncaught error:", err);
  res.status(500).json({ error: err.message || "Server error" });
});

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

export default app;
