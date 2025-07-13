import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import jwtDecode from "jwt-decode";
import ChatBox from "../components/ChatBox";

vi.mock("jwt-decode", () => ({
  default: vi.fn(),
}));

describe("Chat Box", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "fake token"),
    });

    jwtDecode.mockReturnValue({ id: "1" });
  });

  it("Renders all messages and name of inbox", async () => {
    const inboxName = "Inbox Name";
    const mockFn = vi.fn();
    const user = {
      id: "1",
      userName: "Test 1",
    };
    const lastSeenMessage = {
      id: "1",
      content: "test message 5",
      createdAt: "2024-11-20T12:33:00Z",
      senderId: "1",
      inboxId: "1",
    };
    const inboxMessages = [
      {
        id: "1",
        content: "test message 1",
        createdAt: "2024-11-20T12:33:00Z",
        senderId: "1",
        inboxId: "1",
      },

      {
        id: "2",
        content: "test message 2",
        createdAt: "2024-11-20T12:35:00Z",
        senderId: "2",
        inboxId: "1",
      },
      {
        id: "3",
        content: "test message 3",
        createdAt: "2024-11-20T12:37:00Z",
        senderId: "1",
        inboxId: "1",
      },
      {
        id: "4",
        content: "test message 4",
        createdAt: "2024-11-20T12:40:00Z",
        senderId: "2",
        inboxId: "1",
      },
    ];

    const inboxMembers = [
      {
        id: "1",
        username: "test 1",
      },

      {
        id: "2",
        username: "test 2",
      },
    ];

    render(
      <ChatBox
        inboxMembers={inboxMembers}
        inboxMessages={inboxMessages}
        lastSeenMessage={lastSeenMessage}
        handleFunction={mockFn}
        inboxName={inboxName}
        user={user}
      />
    );
    expect(screen.getByText(/message 1/i)).toBeInTheDocument();
    expect(screen.getByText(/message 2/i)).toBeInTheDocument();
    expect(screen.getByText(/message 3/i)).toBeInTheDocument();

    expect(screen.getByText(/Inbox Name/i)).toBeInTheDocument();
  });

  it("When inbox settings buttons is clicked it triggers an open group settings function", async () => {
    const mockFn = vi.fn();
    const inboxName = "Inbox Name";
    const user = {
      id: "1",
      userName: "Test 1",
    };
    const lastSeenMessage = {
      id: "1",
      content: "test message 5",
      createdAt: "2024-11-20T12:33:00Z",
      senderId: "1",
      inboxId: "1",
    };
    const inboxMessages = [
      {
        id: "1",
        content: "test message 1",
        createdAt: "2024-11-20T12:33:00Z",
        senderId: "1",
        inboxId: "1",
      },

      {
        id: "2",
        content: "test message 2",
        createdAt: "2024-11-20T12:35:00Z",
        senderId: "2",
        inboxId: "1",
      },
      {
        id: "3",
        content: "test message 3",
        createdAt: "2024-11-20T12:37:00Z",
        senderId: "1",
        inboxId: "1",
      },
      {
        id: "4",
        content: "test message 4",
        createdAt: "2024-11-20T12:40:00Z",
        senderId: "2",
        inboxId: "1",
      },
    ];

    const inboxMembers = [
      {
        id: "1",
        username: "test 1",
      },

      {
        id: "2",
        username: "test 2",
      },
    ];
    render(
      <ChatBox
        inboxMembers={inboxMembers}
        inboxMessages={inboxMessages}
        lastSeenMessage={lastSeenMessage}
        handleFunction={mockFn}
        inboxName={inboxName}
        user={user}
      />
    );

    const settingsButton = screen.getByRole("button", { name: /Settings/i });

    await fireEvent.click(settingsButton);
    expect(mockFn).toBeCalledTimes(1);
  });
});
