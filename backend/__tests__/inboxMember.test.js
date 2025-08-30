import request from "supertest";
import prisma from "../prisma/prismaClient.js";
import app from "../server.js";
import { beforeEach, afterAll, describe, it, expect } from "vitest";

describe("Inbox Member Tests", () => {
  it("Adds a new member to an inbox successfully", async () => {
    const res = await request(app)
      .post("/inbox/i1/member")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ userId: "u4" });

    expect(res.status).toBe(200);
    expect(res.text).toMatch("Added user to inbox successfully");
  });

  it("Fails to add member with missing user ID", async () => {
    const res = await request(app)
      .post("/inbox/i1/member")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json")
      .send({ userId: "" });

    expect(res.status).toBe(400);
    expect(res.text).toMatch("Inbox ID or user ID are missing");
  });

  it("Returns all users except the logged in one", async () => {
    const res = await request(app)
      .get("/users/others")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(2);
    expect(res.body.some((u) => u.id === "u1")).toBe(false);
  });
});

describe("Inbox Member Deletion Tests", () => {
  it("Removes user from inbox", async () => {
    const res = await request(app)
      .delete("/inbox/i2/member/u4")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(res.text).toMatch("User successfully removed from inbox");
  });

  it("Returns 404 if inbox does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/nonexistentInbox/member/u4")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("Inbox does not exist");
  });

  it("Returns 404 if user does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/i2/member/u55")
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(404);
    expect(res.text).toMatch("User does not exist");
  });

  it("Returns 404 if inbox member does not exist", async () => {
    const res = await request(app)
      .delete("/inbox/i1/member/u4")
      .set("Authorization", `Bearer ${testToken}`)
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
      .set("Authorization", `Bearer ${testToken}`)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(500);
    expect(res.body.error).toMatch("Failed to delete inbox member");
  });
});
