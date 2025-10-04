import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import LoginForm from "../components/LoginPage";
import { MemoryRouter, useNavigate, useLocation } from "react-router-dom";

// ✅ Mock useNavigate + useLocation
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

// ✅ Mock API
vi.mock("../api", () => ({
  default: { post: vi.fn() },
}));
import api from "../api";

describe("LoginForm", () => {
  const mockedNavigate = vi.fn();
  const mockedUseLocation = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockedNavigate);
    vi.mocked(useLocation).mockReturnValue({ state: {} });
    localStorage.clear();
    vi.clearAllMocks();
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

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "testpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/login", {
        username: "testuser",
        password: "testpass",
      });
      expect(localStorage.getItem("token")).toBe(fakeToken);
      expect(mockedNavigate).toHaveBeenCalledWith("/home");
    });
  });

  it("navigates back when 'Go back' button is clicked", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /go back/i }));
    expect(mockedNavigate).toHaveBeenCalledWith("/", { replace: true });
  });

  it("shows success banner when coming from registration", () => {
    vi.mocked(useLocation).mockReturnValue({ state: { registered: true } });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/account created successfully/i)
    ).toBeInTheDocument();
  });

  it("shows error if no token is received", async () => {
    api.post.mockResolvedValue({ data: {} }); // no token returned

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "noTokenUser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "pass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/no token received/i)).toBeInTheDocument();
    });
  });

  it("shows string error from server", async () => {
    api.post.mockRejectedValue({
      response: { data: "Invalid credentials" },
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "wrong" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });

  it("shows error message when server returns object with error key", async () => {
    api.post.mockRejectedValue({
      response: { data: { error: "User not found" } },
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "ghost" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/user not found/i)).toBeInTheDocument();
    });
  });

  it("shows generic error when no response (network error)", async () => {
    api.post.mockRejectedValue(new Error("Network error"));

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "netuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "netpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});
