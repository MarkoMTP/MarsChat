import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import EditProfileComponent from "../components/EditProfileComponent";

global.URL.createObjectURL = vi.fn(() => "mocked-preview-url"); // ✅ MOCK FIX

vi.mock("axios");
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
describe("EditProfileComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
    axios.post.mockResolvedValue({ data: { filePath: "/uploads/test.png" } });
    axios.put.mockResolvedValue({});

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
    // ✅ Ensure the PUT request (always called) fails
    axios.put.mockRejectedValueOnce(new Error("Update failed"));

    render(
      <MemoryRouter>
        <EditProfileComponent />
      </MemoryRouter>
    );

    // Fill something in (optional but good)
    const bioInput = screen.getByPlaceholderText(
      /Write something about yourself/i
    );
    fireEvent.change(bioInput, { target: { value: "Some text" } });

    const submitBtn = screen.getByRole("button", { name: /Save Changes/i });
    fireEvent.click(submitBtn);

    // ✅ Use findByText or waitFor to allow async DOM update
    const errorMessage = await screen.findByText(/Error updating profile/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
