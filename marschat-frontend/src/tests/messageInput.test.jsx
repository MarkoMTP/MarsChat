// src/tests/MessageInput.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import MessageInput from "../components/MessageInput";

describe("MessageInput", () => {
  it("updates the textarea on typing", async () => {
    render(<MessageInput onSend={vi.fn()} />);
    const textarea = screen.getByPlaceholderText("Type your message...");
    await userEvent.type(textarea, "Hello world");
    expect(textarea).toHaveValue("Hello world");
  });

  it("calls onSend with message and clears input on submit", async () => {
    const mockSend = vi.fn();
    render(<MessageInput onSend={mockSend} />);
    const textarea = screen.getByPlaceholderText("Type your message...");
    const button = screen.getByRole("button", { name: /send/i });

    await userEvent.type(textarea, "Test message");
    await userEvent.click(button);

    expect(mockSend).toHaveBeenCalledWith("Test message");
    expect(textarea).toHaveValue("");
  });
});
