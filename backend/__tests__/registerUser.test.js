import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import dotenv from "dotenv";
dotenv.config();

import prisma from "../prisma/prismaClient.js";

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  // Clean up users created during tests
  await prisma.user.deleteMany({
    where: {
      OR: [{ id: "uReg" }, { username: "Test" }],
    },
  });

  // Seed a known user (used in 'user already exists' test)
  await prisma.user.create({
    data: {
      id: "uReg",
      username: "marsman",
      password: "12345678",
      bio: "Hello",
    },
  });
});

describe("Register user route test", () => {
  it("Successfully registers a user", async () => {
    const res = await request(app)
      .post("/register")
      .set("Content-Type", "application/json")
      .send({
        username: "Test",
        password: "12345678",
        bio: "I am kind",
      });

    expect(res.status).toBe(200);
    expect(res.text).toBe(""); // Adjust if the actual success message differs
  });

  it("Error: User already exists", async () => {
    const res = await request(app)
      .post("/register")
      .set("Content-Type", "application/json")
      .send({
        username: "marsman",
        password: "12345678",
        bio: "I am kind",
        profilePicUrl: "",
      });

    expect(res.status).toBe(400);
    expect(res.text).toBe("User already exists");
  });

  it("Username missing in API request", async () => {
    const res = await request(app)
      .post("/register")
      .set("Content-Type", "application/json")
      .send({
        username: "",
        password: "12345678",
        bio: "I am kind",
        profilePicUrl: "",
      });

    expect(res.status).toBe(400);
    expect(res.text).toBe("Username, bio and password are required.");
  });
});
