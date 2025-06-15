import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

//prisma setup

import prisma from "../prisma/prismaClient.js";

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  // Clear all relevant tables (order matters!)
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany();
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();

  // Create 2 users
  await prisma.user.createMany({
    data: [
      { id: "u1", username: "User1", password: "12345678", bio: "Hello" },
      { id: "u2", username: "User2", password: "12345678", bio: "Hello" },
    ],
  });

  // Create inbox
  await prisma.inbox.create({
    data: {
      id: "i1",
      isGroup: false,
      name: "Direct Chat",
    },
  });

  // Add members to the inbox
  await prisma.inboxMember.createMany({
    data: [
      { id: "im1", userId: "u1", inboxId: "i1" },
      { id: "im2", userId: "u2", inboxId: "i1" },
    ],
  });
});

describe("Message tests", () => {
  it("user1 successfully  sends a message to user2", async () => {
    const res = await request(app)
      .post("/inbox/i1/message")
      .set("Content-Type", "application/json")
      .send({
        messageText: "Hey",
      });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message sent successfully");
  });
});
