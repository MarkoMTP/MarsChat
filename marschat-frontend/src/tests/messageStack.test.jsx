import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import MessageBox from "../components/MessageBox";
import MessageStack from "../components/MessageStack";

describe("Message stack", () => {
  it("Renders message and sets it to the left", async () => {
    const message = {
      id: "1",
      content: "test message 1",
      createdAt: "2024-11-20T12:33:00Z",
      senderId: "1", // UTC time
    };

    const user = {
      id: "1",
      username: "test",
    };

    const lastSeenMessage = {
      content: "last seen message",
      createdAt: "2024-11-20T12:35:00Z",
      senderId: "2",
    };

    render(
      <MessageStack
        message={message}
        lastSeenMessage={lastSeenMessage}
        user={user}
      />
    );

    const stack = screen.getByTestId("message-stack-1");
    expect(stack.className).toContain("flex justify-start");
    expect(screen.getByText(/test message 1/i)).toBeInTheDocument();
  });

  it("renders a message and places it to the right", async () => {
    const message = {
      id: "1",
      content: "test message 1",
      createdAt: "2024-11-20T12:33:00Z",
      senderId: "1", // UTC time
    };

    const user = {
      id: "2",
      username: "test",
    };

    const lastSeenMessage = {
      content: "last seen message",
      createdAt: "2024-11-20T12:35:00Z",
      senderId: "2",
    };

    render(
      <MessageStack
        message={message}
        lastSeenMessage={lastSeenMessage}
        user={user}
      />
    );

    const stack = screen.getByTestId("message-stack-1");
    expect(stack.className).toContain("flex justify-end");
    expect(screen.getByText(/test message 1/i)).toBeInTheDocument();
  });
});
