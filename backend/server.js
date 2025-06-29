import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./index.js";
import mockAuth from "./middleware/mockAuth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "test") {
  app.use(mockAuth);
}

app.use("/", router);

const PORT = process.env.PORT || 12345;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; //
