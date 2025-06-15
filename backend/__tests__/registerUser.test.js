import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

//prisma setup

import prisma from "../prisma/prismaClient.js";

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany();
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      username: "marsman",
      password: "12345678",
      bio: "Hello",
    },
  });
});

describe("Register user route test", () => {
  it("Succesfully registers a user", async () => {
    const res = await request(app)
      .post("/register")
      .set("Content-Type", "application/json")
      .send({
        username: "Test",
        password: "12345678",
        bio: "I am kind",
      });

    expect(res.status).toBe(200);
  });

  it("Error: User already exists", async () => {
    // Insert a user directly into the DB

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
    expect(res.text).toMatch("User already exists");
  });

  it("Username missing in api request", async () => {
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
    expect(res.text).toMatch("Username, bio and password are required.");
  });
});
