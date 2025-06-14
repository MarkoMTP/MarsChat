import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./index";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 12345;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; //
