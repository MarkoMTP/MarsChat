import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InboxSettings from "../components/InboxSettings";

describe("Inbox Settings Window", () => {
  const inbox = {
    id: "i1",
    name: "inbox",
    isGroup: true,
  };

  const inboxMembers = [
    { user: { id: "1", username: "test 1" } },
    { user: { id: "2", username: "test 2" } },
  ];

  const makeUser = (role = "MEMBER") => ({
    data: {
      id: "3",
      username: "test 3",
      inboxes: [
        {
          inboxId: inbox.id,
          role,
          inbox: {
            id: inbox.id,
            name: inbox.name,
            members: inboxMembers,
          },
        },
      ],
    },
  });

  it("Renders all members", () => {
    const user = makeUser();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={vi.fn()}
        setOpenSettings={vi.fn()}
        inbox={inbox}
      />
    );

    expect(screen.getByText(/test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test 2/i)).toBeInTheDocument();
  });

  it("Triggers leave inbox function", async () => {
    const user = makeUser();
    const mockFn = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        user={user}
        inboxId={inbox.id}
        setOpenChat={vi.fn()}
        setOpenSettings={vi.fn()}
        inbox={inbox}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Leave Group Chat/i }));

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  it("calls setOpenSettings(false) and setOpenChat(inbox) when Go back is clicked", async () => {
    const user = makeUser();
    const MockSetOpenChat = vi.fn();
    const MockSetOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={MockSetOpenChat}
        setOpenSettings={MockSetOpenSettings}
        inbox={inbox}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Go back to chat/i }));

    await waitFor(() => {
      expect(MockSetOpenSettings).toHaveBeenCalledWith(false);
      expect(MockSetOpenChat).toHaveBeenCalledWith(inbox);
    });
  });
});
