import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InboxSettings from "../components/InboxSettings";

describe("Inbox Settings Window", () => {
  it("Renders all members", () => {
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

    const mockFn = vi.fn();

    const setError = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        setError={setError}
      ></InboxSettings>
    );

    expect(screen.getByText(/test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test 2/i)).toBeInTheDocument();
  });

  it("Triggers leave inbox function ", async () => {
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

    const mockFn = vi.fn();

    const setError = vi.fn();

    render(
      <InboxSettings
        inboxMembers={inboxMembers}
        handleLeaveInboxFunction={mockFn}
        setError={setError}
      ></InboxSettings>
    );

    screen.debug();
    const leaveBtn = screen.getByRole("button", { name: /leave group/i });

    await fireEvent.click(leaveBtn);
    expect(mockFn).toBeCalledTimes(1);
  });
});
