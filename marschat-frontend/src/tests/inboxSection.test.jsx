import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import InboxesSection from "../components/InboxesSection.jsx";
import jwtDecode from "jwt-decode";

vi.mock("jwt-decode", () => {
  return {
    default: vi.fn(() => ({ id: "mock-user-id" })),
  };
});

describe("Inboxes Section", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "FAKETOKEN"),
    });

    jwtDecode.mockReturnValue({ id: "1" });
  });

  it("Renders all the inboxes and open chat buttons", () => {
    const Inboxes = [
      {
        id: "1",
        name: "Marko",
        isGroup: true,
      },
      {
        id: "2",
        name: "Luka",
        isGroup: true,
      },
      {
        id: "3",
        name: "Roko",
        isGroup: true,
      },
    ];

    render(<InboxesSection inboxes={Inboxes} />);

    expect(screen.getByText(/Marko/i)).toBeInTheDocument();
    expect(screen.getByText(/Roko/i)).toBeInTheDocument();
    expect(screen.getByText(/Luka/i)).toBeInTheDocument();

    const buttons = screen.getAllByRole("button", { name: /open/i });

    expect(buttons).toHaveLength(3);
  });
});
