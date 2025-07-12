import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import MessageBox from "../components/MessageBox";

describe("Message box", () => {
  it("Renders message and it is marked as seen", async () => {
    const message = {
      content: "test message 1",
      createdAt: "2024-11-20T12:33:00Z", // UTC time
    };

    const lastSeenMessage = {
      content: "last seen message",
      createdAt: "2024-11-20T12:35:00Z",
    };

    render(<MessageBox message={message} lastSeenMessage={lastSeenMessage} />);

    expect(screen.getByText(/test message 1/i)).toBeInTheDocument();
    expect(screen.getByText(/✓✓/i)).toBeInTheDocument();
  });

  it("renders a message and marks it as not seen", async () => {
    const message = {
      content: "test message 1",
      createdAt: "2024-11-20T12:36:00Z", // UTC time
    };

    const lastSeenMessage = {
      content: "last seen message",
      createdAt: "2024-11-20T12:35:00Z",
    };

    render(<MessageBox message={message} lastSeenMessage={lastSeenMessage} />);

    expect(screen.getByText(/test message 1/i)).toBeInTheDocument();
    expect(screen.getByText(/✓/i)).toBeInTheDocument();
  });
});
