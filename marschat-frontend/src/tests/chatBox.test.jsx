import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
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
    const user = {
      id: "1",
      username: "Test 1",
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
        content: "message 1",
        createdAt: "2024-11-20T12:33:00Z",
        senderId: "1",
        sender: {
          username: "Marko",
        },
      },
      {
        id: "2",
        content: "message 2",
        createdAt: "2024-11-20T12:35:00Z",
        senderId: "2",
        sender: {
          username: "Marko",
        },
      },
      {
        id: "3",
        content: "message 3",
        createdAt: "2024-11-20T12:37:00Z",
        senderId: "1",
        sender: {
          username: "Marko",
        },
      },
      {
        id: "4",
        content: "test message 4",
        createdAt: "2024-11-20T12:40:00Z",
        senderId: "2",
        sender: {
          username: "Marko",
        },
      },
    ];

    const inboxMembers = [
      { user: { id: "1", username: "test 1" } },
      { user: { id: "2", username: "test 2" } },
    ];

    const inbox = {
      id: "i1",
      name: inboxName,
      isGroup: true,
      messages: inboxMessages,
      members: inboxMembers,
    };

    render(
      <ChatBox
        inbox={inbox}
        inboxId={inbox.id}
        inboxName={inboxName}
        inboxMessages={inboxMessages}
        inboxMembers={inboxMembers}
        lastSeenMessage={lastSeenMessage}
        setLastSeenMessage={vi.fn()}
        fetchLastSeenMessage={vi.fn()}
        user={user}
        openSetting={false}
        setOpenSettings={vi.fn()}
        handleLeaveInboxFunction={vi.fn()}
        setError={vi.fn()}
        setOpenChat={vi.fn()}
      />
    );

    expect(screen.getByText(/message 1/i)).toBeInTheDocument();
    expect(screen.getByText(/message 2/i)).toBeInTheDocument();
    expect(screen.getByText(/message 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Inbox Name/i)).toBeInTheDocument();
  });

  it("When inbox settings button is clicked it triggers the open group settings function", async () => {
    const userSet = userEvent.setup();

    const inboxName = "Inbox Name";
    const user = { id: "1", username: "Test 1" };
    const inboxMessages = [
      {
        id: "1",
        content: "test message 1",
        senderId: "1",
        sender: {
          username: "Marko",
        },
      },
      {
        id: "2",
        content: "test message 2",
        senderId: "2",
        sender: {
          username: "Marko",
        },
      },
    ];
    const inboxMembers = [
      { user: { id: "1", username: "test 1" } },
      { user: { id: "2", username: "test 2" } },
    ];

    const inbox = {
      id: "i1",
      name: inboxName,
      isGroup: true,
      messages: inboxMessages,
      members: inboxMembers,
    };

    const setOpenSettings = vi.fn();

    render(
      <ChatBox
        inbox={inbox}
        inboxId={inbox.id}
        inboxName={inboxName}
        inboxMessages={inboxMessages}
        inboxMembers={inboxMembers}
        lastSeenMessage={{}}
        setLastSeenMessage={vi.fn()}
        fetchLastSeenMessage={vi.fn()}
        user={user}
        openSetting={false}
        setOpenSettings={setOpenSettings}
        handleLeaveInboxFunction={vi.fn()}
        setError={vi.fn()}
        setOpenChat={vi.fn()}
      />
    );

    const settingsButton = screen.getByRole("button", { name: /settings/i });
    await userSet.click(settingsButton);
    expect(setOpenSettings).toHaveBeenCalledTimes(1);
  });
});
