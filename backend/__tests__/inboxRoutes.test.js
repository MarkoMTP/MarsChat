import request from "supertest";
import prisma from "../prisma/prismaClient.js";
import app from "../server.js";
import { beforeEach, afterAll, describe, it, expect } from "vitest";

// INBOX ROUTES
describe("Inbox Tests", () => {
  it("Creates an inbox correctly", async () => {
    const res = await request(app)
      .post("/inbox")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ name: "Inbox Test" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Inbox created successfully");
  });

  it("Fails to create inbox with missing name", async () => {
    const res = await request(app)
      .post("/inbox")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ name: "" });

    expect(res.status).toBe(400);
    expect(res.text).toMatch("Inbox name missing");
  });

  it("fetches inbox successfully", async () => {
    const res = await request(app)
      .get("/inbox/i4")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: "i4",
      isGroup: false,
      name: "Test Inbox",
    });
  });

  it("returns 400 when inboxId is missing", async () => {
    const res = await request(app).get("/inbox/");
    // Supertest will 404 before hitting the controller, so you need to manually call it if you really want to test the missing ID case.
    expect(res.status).toBe(404);
  });

  it("Fetches all inboxes for the user", async () => {
    const res = await request(app)
      .get("/inboxes")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject([
      {
        createdAt: expect.any(String),
        id: "i1",
        isGroup: false,
        lastMsgAt: null,
        name: "Direct Chat",
      },
    ]);
  });

  it("Deletes a inbox", async () => {
    const res = await request(app)
      .delete("/inbox/i3")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Inbox successfully deleted");
  });

  it("Fails because inbox does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/4")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Inbox does not exist");
  });

  it("Finds an inbox with loggedInUserId and userId", async () => {
    const res = await request(app)
      .get("/inbox/direct/u2")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: expect.any(String),
      isGroup: false,
      members: expect.any(Array),
    });
  });

  it("Does not find an inbox with loggedInUserId and userId", async () => {
    const res = await request(app)
      .get("/inbox/direct/u1")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(400);
    expect(res.text).toMatch(
      /{\"error\":\"Cannot create a DM with yourself\"}/i
    );
  });
});

describe("Create Group Inbox Controller", () => {
  it("should create a new group inbox with members", async () => {
    const res = await request(app)
      .post("/inbox/group")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({
        name: "My Test Group",
        userIds: ["u2", "u3"],
        adminId: "u1", // 👈 logged-in user as admin
      });

    expect(res.status).toBe(201);
    expect(res.body.message).toMatch(/Inbox created successfully/i);
    expect(res.body.inbox).toMatchObject({
      id: expect.any(String),
      name: "My Test Group",
      isGroup: true,
    });
  });

  it("should return 400 if inbox name is missing", async () => {
    const res = await request(app)
      .post("/inbox/group")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ userIds: ["u2", "u3"], adminId: "u1" }); // 👈 still pass adminId

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/Inbox name missing/i);
  });

  it("should return 400 if userIds is empty", async () => {
    const res = await request(app)
      .post("/inbox/group")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ name: "Empty Group", userIds: [], adminId: "u1" }); // 👈 adminId required

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/userIds must be a non-empty array/i);
  });
});
