import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UsersSection from "../components/UsersSection";
import jwtDecode from "jwt-decode";

vi.mock("jwt-decode", () => ({
  default: vi.fn(),
}));

describe("Users Section", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "FAKETOKEN"),
    });

    jwtDecode.mockReturnValue({ id: "1" });
  });

  it("Renders all the usernames and message buttons", () => {
    const users = [
      {
        id: "1",
        username: "Marko",
        bio: "Herceg",
      },
      {
        id: "2",
        username: "Luka",
        bio: "Herceg",
      },
      {
        id: "3",
        username: "Roko",
        bio: "Herceg",
      },
    ];

    render(<UsersSection users={users} />);

    expect(screen.getByText("Users Section")).toBeInTheDocument();

    expect(screen.getByText(/Marko/i)).toBeInTheDocument();
    expect(screen.getByText(/Roko/i)).toBeInTheDocument();
    expect(screen.getByText(/Luka/i)).toBeInTheDocument();

    const buttons = screen.getAllByRole("button", { name: /send message/i });

    expect(buttons).toHaveLength(3);
  });
});
