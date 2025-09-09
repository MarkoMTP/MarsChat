// src/tests/addNewUsersToGroup.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AddNewUsersToGroup from "../components/AddNewUsersForm";

// mock api
vi.mock("../api", () => ({
  default: {
    post: vi.fn(() => Promise.resolve({ data: { added: ["u2"] } })),
  },
}));

// mock fetchUsers
vi.mock("../middleware/fetchUsers", () => ({
  default: vi.fn(() =>
    Promise.resolve([
      { id: "u1", username: "Alice" },
      { id: "u2", username: "Bob" },
      { id: "u3", username: "Charlie" },
    ])
  ),
}));

// mock jwt-decode
vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(() => ({ id: "loggedInUser" })),
}));

// mock localStorage
vi.stubGlobal("localStorage", {
  getItem: vi.fn(() => "faketoken"),
});

import api from "../api";

describe("AddNewUsersToGroup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("filters out existing members", async () => {
    render(
      <MemoryRouter>
        <AddNewUsersToGroup
          inboxId="i1"
          existingMembers={[{ user: { id: "u1", username: "Alice" } }]}
        />
      </MemoryRouter>
    );

    // wait for users to render
    await waitFor(() => {
      expect(screen.queryByText("Alice")).not.toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.getByText("Charlie")).toBeInTheDocument();
    });
  });

  it("submits selected users and calls onClose", async () => {
    const mockOnClose = vi.fn();

    render(
      <MemoryRouter>
        <AddNewUsersToGroup
          inboxId="i1"
          existingMembers={[]}
          onClose={mockOnClose}
        />
      </MemoryRouter>
    );

    // wait for users to render
    await waitFor(() => screen.getByText("Bob"));

    // select a user
    fireEvent.click(screen.getByText("Bob")); // assuming UserBox toggles chosenUsers

    // submit
    fireEvent.click(screen.getByRole("button", { name: /Add Users/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/inbox/i1/members", {
        userIds: ["u2"], // Bob’s id
      });
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
