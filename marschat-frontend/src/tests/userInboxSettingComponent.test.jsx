// src/tests/UserInInboxSettingsComponent.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserInInboxSettingsComponent from "../components/UserInInboxSettingsComponent";
import removeUserFromInbox from "../middleware/removeUserFromInbox";

vi.mock("../middleware/removeUserFromInbox", () => ({
  default: vi.fn(),
}));

describe("UserInInboxSettingsComponent", () => {
  const mockSetOpenSettings = vi.fn();
  const inboxId = "i1";

  const baseUser = {
    data: {
      id: "u1",
      inboxes: [
        { inboxId: "i1", role: "ADMIN" }, // logged-in user is ADMIN in this inbox
      ],
    },
  };

  const member = {
    user: { id: "u2", username: "User2" },
  };

  it("renders the member username", () => {
    render(
      <UserInInboxSettingsComponent
        member={member}
        user={baseUser}
        inboxId={inboxId}
        setOpenSettings={mockSetOpenSettings}
        removeUserFromInbox={removeUserFromInbox}
      />
    );

    expect(screen.getByText("User2")).toBeInTheDocument();
  });

  it("shows the Kick out button for admins", () => {
    render(
      <UserInInboxSettingsComponent
        member={member}
        user={baseUser}
        inboxId={inboxId}
        setOpenSettings={mockSetOpenSettings}
        removeUserFromInbox={removeUserFromInbox}
      />
    );

    expect(screen.getByText(/Kick out/i)).toBeInTheDocument();
  });

  it("calls removeUserFromInbox with correct args when clicked", () => {
    render(
      <UserInInboxSettingsComponent
        member={member}
        user={baseUser}
        inboxId={inboxId}
        setOpenSettings={mockSetOpenSettings}
        removeUserFromInbox={removeUserFromInbox}
      />
    );

    fireEvent.click(screen.getByText(/Kick out/i));

    expect(removeUserFromInbox).toHaveBeenCalledWith(
      "u2", // member user id
      "i1", // inbox id
      mockSetOpenSettings // callback
    );
  });

  it("does not render Kick out if user is not admin", () => {
    const nonAdminUser = {
      data: {
        id: "u1",
        inboxes: [{ inboxId: "i1", role: "MEMBER" }],
      },
    };

    render(
      <UserInInboxSettingsComponent
        member={member}
        user={nonAdminUser}
        inboxId={inboxId}
        setOpenSettings={mockSetOpenSettings}
        removeUserFromInbox={removeUserFromInbox}
      />
    );

    expect(screen.queryByText(/Kick out/i)).not.toBeInTheDocument();
  });
});
