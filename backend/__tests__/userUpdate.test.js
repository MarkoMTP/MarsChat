import request from "supertest";
import app from "../server.js";
import jwt from "jsonwebtoken";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import dotenv from "dotenv";
dotenv.config();

//prisma setup

import prisma from "../prisma/prismaClient.js";

const testUser = { id: "u9" };
let testToken;

afterAll(async () => {
  await prisma.$disconnect();
});
beforeEach(async () => {
  await prisma.user.deleteMany({ where: { id: "u9" } }); // SAFE

  await prisma.user.create({
    data: {
      id: "u9",
      username: "originalUser",
      password: "12345678",
      bio: "Initial bio",
    },
  });
  testToken = jwt.sign(testUser, process.env.JWT_SECRET);
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
