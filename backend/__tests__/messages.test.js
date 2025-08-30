import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import prisma from "../prisma/prismaClient.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

app.use((req, res, next) => {
  req.user = { id: "u1" };
  next();
});

// MESSAGE ROUTES
describe("Message tests", () => {
  it("user1 successfully sends a message to user2", async () => {
    const res = await request(app)
      .post("/inbox/i1/message")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ messageText: "Hey" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message sent successfully");
  });

  it("User reads message", async () => {
    const res = await request(app)
      .post("/message/m1/seen")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ userId: "u2" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message read successfully");
  });

  it("Fetches all messages", async () => {
    const res = await request(app)
      .get("/inbox/i1/messages")
      .set("Authorization", `Bearer ${testToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      createdAt: expect.any(String),
      id: "i1",
      isGroup: false,
      lastMsgAt: null,
      members: [
        {
          createdAt: expect.any(String),
          id: "im1",
          inboxId: "i1",
          role: "MEMBER",
          user: {
            bio: "bio1",
            createdAt: expect.any(String),
            id: "u1",
            password: "pw1",
            profilePicUrl: null,
            username: "User1",
          },
          userId: "u1",
        },
        {
          createdAt: expect.any(String),
          id: "im2",
          inboxId: "i1",
          role: "MEMBER",
          user: {
            bio: "bio2",
            createdAt: expect.any(String),
            id: "u2",
            password: "pw2",
            profilePicUrl: null,
            username: "User2",
          },
          userId: "u2",
        },
      ],
      messages: [
        {
          content: "Message seen",
          createdAt: expect.any(String),
          id: "m1",
          inboxId: "i1",
          mediaUrl: null,
          reads: [],
          sender: {
            bio: "bio1",
            createdAt: expect.any(String),
            id: "u1",
            password: "pw1",
            profilePicUrl: null,
            username: "User1",
          },
          senderId: "u1",
        },
        {
          content: "Message seen",
          createdAt: expect.any(String),
          id: "m55",
          inboxId: "i1",
          mediaUrl: null,
          reads: [],
          sender: {
            bio: "bio1",
            createdAt: expect.any(String),
            id: "u1",
            password: "pw1",
            profilePicUrl: null,
            username: "User1",
          },
          senderId: "u1",
        },
      ],
      name: "Direct Chat",
    });
  });

  it("Deletes message successfully", async () => {
    const res = await request(app)
      .delete("/message/m55")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message deleted successfully");
  });

  it("Fails to delete nonexistent message", async () => {
    const res = await request(app)
      .delete("/message/m2")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Message not found in the database");
  });
});
