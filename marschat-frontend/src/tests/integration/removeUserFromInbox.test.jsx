import { describe, expect, it, vi } from "vitest";
import InboxSettings from "../../components/InboxSettings";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import api from "../../api";

vi.mock("../../api", () => ({
  default: { delete: vi.fn() }, // just define it here
}));

describe("Admin removes a user from the group", () => {
  const user = {
    data: {
      id: "3",
      username: "Admin",
      inboxes: [{ inboxId: "i1", role: "ADMIN" }],
    },
  };

  const inbox = {
    id: "i1",
    name: "Test Group",
    isGroup: true,
    members: [
      { user: { id: "1", username: "Member 1" } },
      { user: { id: "2", username: "Member 2" } },
      { user: { id: "3", username: "Admin" } },
    ],
  };

  it("succeeds when API resolves", async () => {
    api.delete.mockResolvedValueOnce({ status: 200 });

    const setOpenChat = vi.fn();
    const setOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inbox.members}
        user={user}
        inboxId={inbox.id}
        setOpenSettings={setOpenSettings}
        setOpenChat={setOpenChat}
        inbox={inbox}
      />
    );

    fireEvent.click(screen.getAllByText(/Kick out/i)[0]);

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith("/inbox/i1/member/1");
      expect(setOpenSettings).toHaveBeenCalledWith(false);
    });
  });

  it("fails when API rejects", async () => {
    api.delete.mockRejectedValueOnce(new Error("Network error"));

    const setOpenChat = vi.fn();
    const setOpenSettings = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inbox.members}
        user={user}
        inboxId={inbox.id}
        setOpenSettings={setOpenSettings}
        setOpenChat={setOpenChat}
        inbox={inbox}
      />
    );

    fireEvent.click(screen.getAllByText(/Kick out/i)[0]);

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith("/inbox/i1/member/1");
      expect(setOpenSettings).not.toHaveBeenCalled(); // stays open on failure
    });
  });
});
