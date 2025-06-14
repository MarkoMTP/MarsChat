// db/prismaClient.js
import dotenv from "dotenv";
dotenv.config({
  path:
    process.env.NODE_ENV === "test"
      ? process.env.TEST_DATABASE_URL
      : process.env.DATABASE_URL,
});

if (process.env.NODE_ENV === "test") {
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
  console.log("✅ Using TEST DATABASE:", process.env.DATABASE_URL);
} else {
  console.log("✅ Using DATABASE:", process.env.DATABASE_URL);
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;
