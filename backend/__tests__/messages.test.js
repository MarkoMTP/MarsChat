import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import prisma from "../prisma/prismaClient.js";

// Clean up after all tests
afterAll(async () => {
  await prisma.$disconnect();
});

// Seed test data before each test
beforeEach(async () => {
  await prisma.messageRead.deleteMany();
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany();
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      { id: "u1", username: "User1", password: "pw1", bio: "bio1" },
      { id: "u2", username: "User2", password: "pw2", bio: "bio2" },
      { id: "u3", username: "User3", password: "pw3", bio: "bio3" },
      { id: "u4", username: "User4", password: "pw3", bio: "bio3" },
    ],
  });

  await prisma.inbox.createMany({
    data: [
      { id: "i1", isGroup: false, name: "Direct Chat" },
      { id: "i2", isGroup: false, name: "Direct Chat" },
      { id: "i3", isGroup: false, name: "Delete test" },
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
});

// MESSAGE ROUTES
describe("Message tests", () => {
  it("user1 successfully sends a message to user2", async () => {
    const res = await request(app)
      .post("/inbox/i1/message")
      .set("Content-Type", "application/json")
      .send({ messageText: "Hey" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message sent successfully");
  });

  it("User reads message", async () => {
    const res = await request(app)
      .post("/message/m1/seen")
      .set("Content-Type", "application/json")
      .send({ userId: "u2" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message read successfully");
  });

  it("Fetches all messages", async () => {
    const res = await request(app).get("/inbox/i1/messages");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Messages fetched");
  });

  it("Deletes message successfully", async () => {
    const res = await request(app)
      .delete("/message/m55")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Message deleted successfully");
  });

  it("Fails to delete nonexistent message", async () => {
    const res = await request(app)
      .delete("/message/m2")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Message not found in the database");
  });
});

// INBOX ROUTES
describe("Inbox Tests", () => {
  it("Creates an inbox correctly", async () => {
    const res = await request(app)
      .post("/inbox")
      .set("Content-Type", "application/json")
      .send({ name: "Inbox Test" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Inbox created successfully");
  });

  it("Fails to create inbox with missing name", async () => {
    const res = await request(app)
      .post("/inbox")
      .set("Content-Type", "application/json")
      .send({ name: "" });

    expect(res.status).toBe(400);
    expect(res.text).toMatch("Inbox name missing");
  });

  it("Fetches all inboxes for the user", async () => {
    const res = await request(app)
      .get("/inboxes")
      .set("Content-Type", "application/json")
      .send();

    expect(res.status).toBe(200);
    expect(res.text).toMatch(/Successfully fetched/);
  });

  //DELETE INBOX TESTS

  it("Deletes a inbox", async () => {
    const res = await request(app)
      .delete("/inbox/i3")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Inbox successfully deleted");
  });

  it("Fails because inbox does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/4")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Inbox does not exist");
  });
});

// INBOX MEMBER ROUTES
describe("Inbox Member Tests", () => {
  it("Adds a new member to an inbox successfully", async () => {
    const res = await request(app)
      .post("/inbox/i1/member")
      .set("Content-Type", "application/json")
      .send({ userId: "u4" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Added user to inbox successfully");
  });

  it("Fails to add member with missing user ID", async () => {
    const res = await request(app)
      .post("/inbox/i1/member")
      .set("Content-Type", "application/json")
      .send({ userId: "" });

    expect(res.status).toBe(400);
    expect(res.text).toMatch("Inbox ID or user ID are missing");
  });

  it("Returns all users except the logged in one", async () => {
    const res = await request(app)
      .get("/users/others")
      .set("user", JSON.stringify({ userId: "u1" }));

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
    expect(res.body.some((u) => u.id === "u1")).toBe(false);
  });
});

describe("Inbox Member Deletion Tests", () => {
  it("Removes user from inbox", async () => {
    const res = await request(app)
      .delete("/inbox/i2/member/u4")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("User successfully removed from inbox");
  });

  it("Returns 404 if inbox does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/nonexistentInbox/member/u4")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Inbox does not exist");
  });

  it("Returns 404 if user does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/i2/member/u5")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("User does not exist");
  });

  it("Returns 404 if inbox member does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/i1/member/u4")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Inbox Member does not exist");
  });

  it("Returns 500 if a server error occurs", async () => {
    const original = prisma.inboxMember.deleteMany;
    prisma.inboxMember.deleteMany = () => {
      throw new Error("Forced failure");
    };

    const res = await request(app)
      .delete("/inbox/i2/member/u4")
      .set("Content-Type", "application/json");

    expect(res.status).toBe(500);
    expect(res.body.error).toMatch("Failed to delete inbox member");
  });
});
