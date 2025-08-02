import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import LoginForm from "../components/LoginPage";
import { MemoryRouter, useNavigate } from "react-router-dom";

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

// Mock api
vi.mock("../api", () => ({
  default: {
    post: vi.fn(),
  },
}));

import api from "../api";

describe("LoginForm", () => {
  const mockedNavigate = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockedNavigate);
    localStorage.clear();
  });

  it("submits the form and navigates on successful login", async () => {
    const fakeToken = "test.jwt.token";

    api.post.mockResolvedValue({
      data: { token: fakeToken },
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    // Fill in username and password
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "testpass" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/login", {
        username: "testuser",
        password: "testpass",
      });

      expect(localStorage.getItem("token")).toBe(fakeToken);
      expect(mockedNavigate).toHaveBeenCalledWith("/");
    });
  });

  it("shows error if no token is received", async () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    api.post.mockResolvedValue({ data: {} });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "noTokenUser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith("No token received!");
    });

    consoleError.mockRestore();
  });

  it("navigates back when go back button is clicked", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /go back/i }));

    expect(mockedNavigate).toHaveBeenCalledWith("/", { replace: true });
  });
});
