import request from "supertest";
import app from "../server.js";
import { describe, it, expect, beforeEach, afterAll } from "vitest";
import prisma from "../prisma/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

beforeEach(async () => {
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash("testpass", 10);

  await prisma.user.create({
    data: {
      id: "u1",
      username: "testuser",
      password: hashedPassword,
      bio: "testing",
    },
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Login Route", () => {
  it("returns token for valid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "testuser", password: "testpass" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.message).toBe("Logged in");

    const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET);
    expect(decoded).toHaveProperty("id", "u1");
  });

  it("returns message for wrong password", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "testuser", password: "wrongpass" });

    expect(res.status).toBe(200);
    expect(res.text).toBe("Password is not correct");
  });

  it("returns message for nonexistent user", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "ghost", password: "whatever" });

    expect(res.status).toBe(200);
    expect(res.text).toBe("User does not exist");
  });
});
