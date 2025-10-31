import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./index.js";
import mockAuth from "./middleware/mockAuth.js";
import passport from "./passport/passport.js";
const app = express();

dotenv.config();
const allowedOrigins = [
  "http://localhost:5173",
  "https://mars-chat.vercel.app",
  "https://mars-chat-imiz9x4xn-markomtps-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman, curl
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.warn("❌ CORS blocked request from:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204, // ✅ important for Railway/HTTP2 proxies
  })
);

app.use(express.json());

// 🧠 Important: Handle form-data uploads
// Cloudinary upload routes need this, but not globally — so don’t use express.urlencoded everywhere
// Just keep express.json() for other routes

if (process.env.NODE_ENV === "test") {
  app.use(mockAuth);
}

app.use(passport.initialize());

// ✅ All routes
app.use("/", router);

// ✅ Global error handler (so we never get HTML again)
app.use((err, req, res, next) => {
  console.error("🔥 Uncaught error:", err);
  res.status(500).json({ error: err.message || "Server error" });
});

const PORT = process.env.PORT || 12345;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

export default app;
