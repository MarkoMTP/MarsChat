import request from "supertest";
import app from "../server.js";
import jwt from "jsonwebtoken";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

//prisma setup

const testUser = { id: "u9" };
const testToken = jwt.sign(testUser, process.env.JWT_SECRET);

import prisma from "../prisma/prismaClient.js";

afterAll(async () => {
  await prisma.$disconnect();
});
beforeEach(async () => {
  await prisma.messageRead.deleteMany();
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany(); // must come before users/inboxes
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      id: "u9",
      username: "originalUser",
      password: "12345678",
      bio: "Initial bio",
    },
  });
});

describe("PATCH /users/:userId", () => {
  it("should update a user's profile", async () => {
    const res = await request(app)
      .patch("/users/u9")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${testToken}`)
      .send({
        username: "updatedUser",
        bio: "Updated bio",
        profilePicUrl: "http://example.com/image.png",
      });

    expect(res.status).toBe(200);
    expect(res.body.username).toBe("updatedUser");
    expect(res.body.bio).toBe("Updated bio");
  });

  it("should return 404 if user not found", async () => {
    const res = await request(app)
      .patch("/users/nonexistent")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${testToken}`)
      .send({ username: "ghost" });

    expect(res.status).toBe(404);
  });
});
