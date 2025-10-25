import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

import CreateGroupForm from "../components/CreatGroupForm";

// --- Mocks ---
// Mock api
vi.mock("../api", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(() => Promise.resolve({ data: { message: "ok" } })),
  },
}));

// Mock localStorage
vi.stubGlobal("localStorage", {
  getItem: vi.fn(() => "faketoken"),
});

// Mock jwt-decode
vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(() => ({ id: "1" })),
}));

// Mock fetchUsers
vi.mock("../middleware/fetchUsers", () => ({
  default: vi.fn(() =>
    Promise.resolve([
      { id: "1", username: "Test 1" },
      { id: "2", username: "Test 2" },
      { id: "3", username: "Test 3" },
    ])
  ),
}));

// Mock navigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("CreateGroupForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders form and user list", async () => {
    render(
      <MemoryRouter>
        <CreateGroupForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Group Name/i)).toBeInTheDocument();

    // Users load async
    expect(await screen.findByText(/Test 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Test 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Test 3/i)).toBeInTheDocument();
  });

  it("submits the form", async () => {
    render(
      <MemoryRouter>
        <CreateGroupForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Group Name/i), {
      target: { value: "Test Group" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Create Group/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/home");
    });
  });

  it("navigates back when go back button is clicked", () => {
    render(
      <MemoryRouter>
        <CreateGroupForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /go back/i }));

    expect(mockNavigate).toHaveBeenCalledWith("/home", { replace: true });
  });
});
