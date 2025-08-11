import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import jwtDecode from "jwt-decode";
import InboxComponent from "../components/InboxComponent";

vi.mock("jwt-decode", () => ({
  default: vi.fn(),
}));

describe("Inbox Component", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "fake token"),
    });

    jwtDecode.mockReturnValue({ id: "1" });
  });

  it("Renders the inbox name and open chat button", () => {
    const mockFn = vi.fn();

    const inbox = {
      id: "1",
      name: "test",
    };
    render(<InboxComponent inbox={inbox} onClick={mockFn} />);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open chat/i }));
  });

  it("The function gets played when the send message button is clicked", async () => {
    const mockFn = vi.fn();
    const inbox = {
      id: "1",
      name: "Test",
    };
    render(<InboxComponent inbox={inbox} setOpenChat={mockFn} />);

    await fireEvent.click(screen.getByRole("button", { name: /open chat/i }));

    expect(mockFn).toHaveBeenCalled();
  });
});
