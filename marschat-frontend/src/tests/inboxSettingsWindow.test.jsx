import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InboxSettings from "../components/InboxSettings";

describe("Inbox Settings Window", () => {
  it("Renders all members", () => {
    const inboxMembers = [
      {
        user: {
          id: "1",
          username: "test 1",
        },
      },

      {
        user: {
          id: "2",
          username: "test 2",
        },
      },
    ];

    const user = {
      data: {
        id: "3",
        username: "test 3",
      },
    };

    const inbox = {
      id: "i1",
      name: "inbox",
      isGroup: true,
    };

    const mockFn = vi.fn();

    const setOpenChat = vi.fn();

    const setOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        user={user}
        inboxId={inbox.id}
        setOpenChat={setOpenChat}
        setOpenSettings={setOpenSettings}
        inbox={inbox}
      ></InboxSettings>
    );

    expect(screen.getByText(/test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test 2/i)).toBeInTheDocument();
  });

  it("Triggers leave inbox function ", async () => {
    const inboxMembers = [
      {
        user: {
          id: "1",
          username: "test 1",
        },
      },

      {
        user: {
          id: "2",
          username: "test 2",
        },
      },
    ];

    const user = {
      data: {
        id: "3",
        username: "test 3",
      },
    };

    const inbox = {
      id: "i1",
      name: "inbox",
      isGroup: true,
    };

    const mockFn = vi.fn();

    const setOpenChat = vi.fn();

    const setOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        user={user}
        inboxId={inbox.id}
        setOpenChat={setOpenChat}
        setOpenSettings={setOpenSettings}
        inbox={inbox}
      ></InboxSettings>
    );

    const leaveBtn = screen.getByRole("button", { name: /leave group/i });

    await fireEvent.click(leaveBtn);
    expect(mockFn).toBeCalledTimes(1);
  });

  it("calls setOpenSettings(false) and setOpenChat(inbox) when Go back is clicked", async () => {
    const inboxMembers = [
      {
        user: {
          id: "1",
          username: "test 1",
        },
      },

      {
        user: {
          id: "2",
          username: "test 2",
        },
      },
    ];

    const user = {
      data: {
        id: "3",
        username: "test 3",
      },
    };

    const inbox = {
      id: "i1",
      name: "inbox",
      isGroup: true,
    };

    const mockFn = vi.fn();

    const MockSetOpenChat = vi.fn();

    const MockSetOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        user={user}
        inboxId={inbox.id}
        setOpenChat={MockSetOpenChat}
        setOpenSettings={MockSetOpenSettings}
        inbox={inbox}
      ></InboxSettings>
    );

    // Click the "Go back" button
    fireEvent.click(screen.getByRole("button", { name: /Go back to chat/i }));

    await waitFor(() => {
      expect(MockSetOpenSettings).toHaveBeenCalledWith(false);
      expect(MockSetOpenChat).toHaveBeenCalledWith(inbox);
    });
  });
});
