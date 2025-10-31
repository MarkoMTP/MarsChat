import request from "supertest";
import app from "../server.js";
import jwt from "jsonwebtoken";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import dotenv from "dotenv";
dotenv.config();

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
    expect(res.body.user.bio).toBe("Updated bio");
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

describe("GET /user/:userId", () => {
  it("Returns 200 and user data if user exists", async () => {
    const res = await request(app)
      .get("/users/u9")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${testToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("username", "originalUser");
  });

  it("Returns 400 if user does not exist", async () => {
    const res = await request(app)
      .get("/users/nonexistent")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${testToken}`);

    expect(res.status).toBe(404);
    expect(res.text).toMatch("User not found");
  });
});
