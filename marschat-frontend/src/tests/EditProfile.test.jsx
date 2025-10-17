import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import EditProfileComponent from "../components/EditProfileComponent";

// ✅ MOCK API INSTEAD OF AXIOS
import api from "../api";
vi.mock("../api", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    interceptors: { request: { use: vi.fn() } }, // prevent "interceptors" undefined error
  },
}));

// ✅ MOCK NAVIGATION
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ state: { userId: "u1" } }),
  };
});

// ✅ MOCK FILE PREVIEW CREATION
global.URL.createObjectURL = vi.fn(() => "mocked-preview-url");

describe("EditProfileComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem("token", "test-token");
  });

  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    expect(screen.getByText(/Edit Profile/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Write something about yourself/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Save Changes/i)).toBeInTheDocument();
  });

  test("updates bio on user input", () => {
    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    const bioInput = screen.getByPlaceholderText(
      /Write something about yourself/i
    );
    fireEvent.change(bioInput, { target: { value: "Hello Mars!" } });
    expect(bioInput.value).toBe("Hello Mars!");
  });

  test("handles file upload and shows preview", async () => {
    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    const fileInput = screen.getByLabelText(/Profile Picture/i);
    const file = new File(["dummy content"], "profile.png", {
      type: "image/png",
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Expect preview image to appear
    await waitFor(() => {
      const img = screen.getByAltText("Preview");
      expect(img).toBeInTheDocument();
    });
  });

  test("submits form and shows success message", async () => {
    api.get.mockResolvedValue({
      data: { id: "u1", username: "Alice", bio: "", profilePicUrl: null },
    });
    api.post.mockResolvedValue({ data: { filePath: "/uploads/test.png" } });
    api.patch.mockResolvedValue({});

    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    const bioInput = screen.getByPlaceholderText(
      /Write something about yourself/i
    );
    fireEvent.change(bioInput, { target: { value: "New bio" } });

    const submitBtn = screen.getByRole("button", { name: /Save Changes/i });
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(
        screen.getByText(/Profile updated successfully/i)
      ).toBeInTheDocument()
    );
  });

  test("shows error message on failed update", async () => {
    api.patch.mockRejectedValueOnce(new Error("Update failed"));

    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    const bioInput = screen.getByPlaceholderText(
      /Write something about yourself/i
    );
    fireEvent.change(bioInput, { target: { value: "Some text" } });

    const submitBtn = screen.getByRole("button", { name: /Save Changes/i });
    fireEvent.click(submitBtn);

    const errorMessage = await screen.findByText(/Error updating profile/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
