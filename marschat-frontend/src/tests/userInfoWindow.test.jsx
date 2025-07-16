import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UserInfoWindow from "../components/UserInfoWindow";

describe("User Info Window", () => {
  it("Renders all user info", async () => {
    const user = {
      id: "1",
      username: "test username",
      bio: "Hey I am a Test",
      profilePicUrl: "",
    };

    render(
      <UserInfoWindow user={user} handleFunction={vi.fn()}></UserInfoWindow>
    );

    expect(screen.getByText("test username")).toBeInTheDocument();
    expect(screen.getByText("Hey I am a Test")).toBeInTheDocument();
  });

  it("Calls the close window function", async () => {
    const user = {
      id: "1",
      username: "test username",
      bio: "Hey I am a Test",
      profilePicUrl: "",
    };

    const mockFn = vi.fn();
    render(
      <UserInfoWindow user={user} handleFunction={mockFn}></UserInfoWindow>
    );

    const closeBtn = screen.getByRole("button", { name: "Close" });

    await fireEvent.click(closeBtn);

    expect(mockFn).toBeCalledTimes(1);
  });
});
