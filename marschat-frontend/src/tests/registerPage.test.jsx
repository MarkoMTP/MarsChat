import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import api from "../api";

import RegisterPage from "../components/RegisterPage";

// Mock API
vi.mock("../api", () => ({
  default: {
    post: vi.fn(),
  },
}));

describe("RegisterPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all inputs and button", () => {
    render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText(/Enter your username/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Create a password/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/About you/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });

  it("lets user type into inputs", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText(/Enter your username/i);
    await user.type(usernameInput, "Alice");
    expect(usernameInput).toHaveValue("Alice");

    const passwordInput = screen.getByPlaceholderText(/Create a password/i);
    await user.type(passwordInput, "secret");
    expect(passwordInput).toHaveValue("secret");

    const bioInput = screen.getByPlaceholderText(/About you/i);
    await user.type(bioInput, "I love MarsChat");
    expect(bioInput).toHaveValue("I love MarsChat");
  });

  it("calls API and navigates on successful register", async () => {
    const user = userEvent.setup();

    api.post.mockResolvedValueOnce({ status: 200 }); // mock success

    render(
      <MemoryRouter initialEntries={["/register"]}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await user.type(
      screen.getByPlaceholderText(/Enter your username/i),
      "Alice"
    );
    await user.type(
      screen.getByPlaceholderText(/Create a password/i),
      "secret"
    );
    await user.type(
      screen.getByPlaceholderText(/About you/i),
      "I love MarsChat"
    );

    await user.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/register", {
        username: "Alice",
        password: "secret",
        bio: "I love MarsChat",
        profilePicUrl: null,
      });
    });

    // Check navigation
    await waitFor(() => {
      expect(
        screen.getByText(/Create Your MarsChat Account/i)
      ).toBeInTheDocument();
    });
  });

  it("shows error from backend", async () => {
    const user = userEvent.setup();

    api.post.mockRejectedValueOnce({
      response: { data: "User already exists" },
    });

    render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );

    await user.type(
      screen.getByPlaceholderText(/Enter your username/i),
      "Alice"
    );
    await user.type(
      screen.getByPlaceholderText(/Create a password/i),
      "secret"
    );
    await user.type(
      screen.getByPlaceholderText(/About you/i),
      "I love MarsChat"
    );

    await user.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/User already exists/i)).toBeInTheDocument();
  });
});
