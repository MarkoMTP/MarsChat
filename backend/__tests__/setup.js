// __tests__/testSetup.js
import dotenv from "dotenv";
import prisma from "../prisma/prismaClient.js";
import { beforeEach, afterAll, afterEach, vi } from "vitest";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

// Global vars for tests
global.testUser = { id: "u1" };
global.testToken = null;

async function resetAndSeed() {
  // clean
  await prisma.messageRead.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.inboxMember.deleteMany({});
  await prisma.inbox.deleteMany({});
  await prisma.user.deleteMany({});

  // seed
  const hashedPassword = await bcrypt.hash("testpass", 10);

  await prisma.user.createMany({
    data: [
      { id: "u1", username: "User1", password: "pw1", bio: "bio1" },
      { id: "u2", username: "User2", password: "pw2", bio: "bio2" },
      { id: "u3", username: "User3", password: "pw3", bio: "bio3" },
      { id: "u4", username: "User4", password: "pw3", bio: "bio3" },

      // RegisterForm test user
      { id: "uReg", username: "marsman", password: "12345678", bio: "Hello" },

      // Login test user
      {
        id: "u5",
        username: "testuser",
        password: hashedPassword,
        bio: "testing",
      },

      // UpdateUser test user
      {
        id: "u9",
        username: "originalUser",
        password: "12345678",
        bio: "Initial bio",
      },
    ],
  });

  await prisma.inbox.createMany({
    data: [
      { id: "i1", isGroup: false, name: "Direct Chat" },
      { id: "i2", isGroup: false, name: "Direct Chat" },
      { id: "i3", isGroup: false, name: "Delete test" },
      { id: "i4", isGroup: false, name: "Test Inbox" },
    ],
  });

  await prisma.inboxMember.createMany({
    data: [
      { id: "im1", userId: "u1", inboxId: "i1" },
      { id: "im2", userId: "u2", inboxId: "i1" },
      { id: "im3", userId: "u4", inboxId: "i2" },
    ],
  });

  await prisma.message.createMany({
    data: [
      { id: "m1", content: "Message seen", senderId: "u1", inboxId: "i1" },
      { id: "m55", content: "Message seen", senderId: "u1", inboxId: "i1" },
    ],
  });
}

// Hooks that apply everywhere
beforeEach(async () => {
  await resetAndSeed();
  global.testToken = jwt.sign(global.testUser, process.env.JWT_SECRET);
});

afterEach(() => {
  vi.restoreAllMocks();
});

afterAll(async () => {
  await prisma.$disconnect();
});
