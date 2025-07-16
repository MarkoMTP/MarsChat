import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UserComponent from "../components/UserComponent";
import { jwtDecode } from "jwt-decode";

vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(),
}));

describe("User Component", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "fake token"),
    });

    jwtDecode.mockReturnValue({ id: "1" });
  });

  it("Renders the username and message button", () => {
    const mockFn = vi.fn();

    const user = {
      id: "1",
      username: "Marko",
      bio: "Hey I am Marko",
    };
    render(<UserComponent user={user} onClick={mockFn} />);

    expect(screen.getByText("Marko")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send Message" }));
  });

  it("The function gets played when the send message button is clicked", async () => {
    const mockFn = vi.fn();
    const user = {
      id: "1",
      username: "Marko",
      bio: "Hey I am Marko",
    };
    render(<UserComponent user={user} onClick={mockFn} />);

    await fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(mockFn).toHaveBeenCalled();
  });
});
