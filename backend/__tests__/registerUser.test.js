import request from "supertest";
import app from "../server.js";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import dotenv from "dotenv";
dotenv.config();

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
