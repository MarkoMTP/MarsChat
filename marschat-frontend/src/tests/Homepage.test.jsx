import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import HomePage from "../components/HomePage";
import api from "../api";
import { jwtDecode } from "jwt-decode";
import fetchInboxes from "../middleware/fetchInboxesFunction";
import fetchUser from "../middleware/fetchUser";

vi.mock("../api", () => ({
  default: {
    get: vi.fn(),
  },
}));

vi.stubGlobal("localStorage", {
  getItem: vi.fn(() => "faketoken"),
});

vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(() => ({ id: "1" })),
}));

describe("Home Page", () => {
  beforeEach(() => {
    vi.mock("../middleware/fetchUser", () => ({
      default: vi.fn(() =>
        Promise.resolve(
          { data: { id: "1", username: "Marko" } },
          { data: { id: "2", username: "Nikola" } }
        )
      ),
    }));

    vi.mock("../middleware/fetchInboxesFunction", () => ({
      default: vi.fn(() =>
        Promise.resolve([
          {
            id: "a",
            name: "Inbox 1",
            members: ["1", "2"],
            messages: [
              {
                content: "Hey Bob!",
                senderId: "1",
                inboxId: "a",
                createdAt: "2024-11-20T12:35:00Z",
              },
              {
                content: "Hey Marko!",
                senderId: "2",
                inboxId: "a",
                createdAt: "2024-11-20T12:36:00Z",
              },
              {
                content: "Hey Rob!",
                senderId: "1",
                inboxId: "a",
                createdAt: "2024-11-20T12:37:00Z",
              },
            ],
            lastMsgAt: {
              content: "Hey Rob!",
              createdAt: "2024-11-20T12:37:00Z",
            },
          },
          { id: "b", name: "Inbox 2", members: ["1", "2"] },
        ])
      ),
    }));
  });

  vi.mock("../middleware/fetchMessagesFunction", () => ({
    default: vi.fn(() =>
      Promise.resolve([
        {
          content: "Hey Bob!",
          senderId: "1",
          inboxId: "a",
          createdAt: "2024-11-20T12:35:00Z",
        },
        {
          content: "Hey Marko!",
          senderId: "2",
          inboxId: "a",
          createdAt: "2024-11-20T12:36:00Z",
        },
        {
          content: "Hey Rob!",
          senderId: "1",
          inboxId: "a",
          createdAt: "2024-11-20T12:37:00Z",
        },
      ])
    ),
  }));

  it("Renders all", async () => {
    render(
      <MemoryRouter>
        {" "}
        <HomePage></HomePage>{" "}
      </MemoryRouter>
    );

    expect(screen.getByText("MarsChat")).toBeInTheDocument();
  });

  it("When a user clicks the open chat button, it opens the chat in the chat box", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Inbox 1")).toBeInTheDocument();
    });

    const openChatButtons = screen.getAllByRole("button", {
      name: /Open/i,
    });

    await user.click(openChatButtons[0]);

    expect(screen.getByText(/Hey Marko!/i)).toBeInTheDocument();
  });
});
