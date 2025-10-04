import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import InboxSettings from "../components/InboxSettings";

// ✅ mock child components so we don't test their internals
vi.mock("../components/UserInInboxSettingsComponent", () => ({
  default: () => <div>Mocked User Component</div>,
}));

vi.mock("../components/AddNewUsersForm", () => ({
  default: () => <div>Mocked Add User Form</div>,
}));

// ✅ mock jwt-decode
vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(() => ({ id: "u1" })),
}));

describe("InboxSettings (Unit Test)", () => {
  beforeEach(() => {
    localStorage.setItem("token", "FAKE_JWT_TOKEN");
  });

  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const inbox = {
    id: "i1",
    name: "inbox",
    isGroup: true,
  };

  const inboxMembers = [
    { user: { id: "1", username: "test 1" } },
    { user: { id: "2", username: "test 2" } },
  ];

  const makeUser = () => ({
    data: {
      id: "3",
      username: "test 3",
    },
  });

  it("renders all members as child components", () => {
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
        removeUserFromInbox={vi.fn()}
      />
    );

    const children = screen.getAllByText("Mocked User Component");
    expect(children).toHaveLength(2);
  });

  it("shows 'Add new user' button only when inbox is a group", () => {
    const user = makeUser();

    const { rerender } = render(
      <InboxSettings
        inboxMembers={[]}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={vi.fn()}
        setOpenSettings={vi.fn()}
        inbox={{ ...inbox, isGroup: true }}
        removeUserFromInbox={vi.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: /add new user/i })
    ).toBeInTheDocument();

    rerender(
      <InboxSettings
        inboxMembers={[]}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={vi.fn()}
        setOpenSettings={vi.fn()}
        inbox={{ ...inbox, isGroup: false }}
        removeUserFromInbox={vi.fn()}
      />
    );

    expect(
      screen.queryByRole("button", { name: /add new user/i })
    ).not.toBeInTheDocument();
  });

  it("renders AddNewUsersToGroup form when 'Add new user' is clicked", () => {
    const user = makeUser();

    render(
      <InboxSettings
        inboxMembers={[]}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={vi.fn()}
        setOpenSettings={vi.fn()}
        inbox={inbox}
        removeUserFromInbox={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /add new user/i }));

    expect(screen.getByText("Mocked Add User Form")).toBeInTheDocument();
  });

  it("calls handleLeaveInboxFunction and closes when successful", async () => {
    const mockLeave = vi.fn().mockResolvedValue(true);
    const mockSetOpenChat = vi.fn();
    const mockSetOpenSettings = vi.fn();
    const user = makeUser();

    render(
      <InboxSettings
        inboxMembers={[]}
        handleLeaveInboxFunction={mockLeave}
        user={user}
        inboxId={inbox.id}
        setOpenChat={mockSetOpenChat}
        setOpenSettings={mockSetOpenSettings}
        inbox={inbox}
        removeUserFromInbox={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /leave group chat/i }));

    await waitFor(() => {
      expect(mockLeave).toHaveBeenCalledWith(user, inbox.id);
      expect(mockSetOpenSettings).toHaveBeenCalledWith(false);
      expect(mockSetOpenChat).toHaveBeenCalledWith(null);
    });
  });

  it("calls setOpenSettings(false) and setOpenChat(inbox) when 'Go back to chat' is clicked", async () => {
    const mockSetOpenChat = vi.fn();
    const mockSetOpenSettings = vi.fn();
    const user = makeUser();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={vi.fn()}
        user={user}
        inboxId={inbox.id}
        setOpenChat={mockSetOpenChat}
        setOpenSettings={mockSetOpenSettings}
        inbox={inbox}
        removeUserFromInbox={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /go back to chat/i }));

    await waitFor(() => {
      expect(mockSetOpenSettings).toHaveBeenCalledWith(false);
      expect(mockSetOpenChat).toHaveBeenCalledWith(inbox);
    });
  });
});
