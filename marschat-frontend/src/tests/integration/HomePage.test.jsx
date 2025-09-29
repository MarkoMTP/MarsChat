import { describe, it, vi, expect, beforeEach } from "vitest";
import {
  findByAltText,
  findByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import CreateGroupForm from "../../components/CreatGroupForm";

import HomePage from "../../components/HomePage";
import LoginPage from "../../components/LoginPage";

import onMessageSend from "../../middleware/postMessageToInbox";
// Mock JWT
vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(() => ({ id: "u1" })),
}));

// Mock router
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useLocation: () => ({ key: "test-key" }),
  };
});

//mock onsend message function
vi.mock("../../middleware/postMessageToInbox", () => ({
  default: vi.fn(() => Promise.resolve()),
}));

// Mock middleware
vi.mock("../../middleware/fetchUser", () => ({
  default: vi.fn(() =>
    Promise.resolve({
      data: {
        id: "u1",
        username: "Alice",
        password: "hashed-password",
        bio: "Loves coffee",
        profilePicUrl: null,
        createdAt: "2025-08-28T20:51:34.496Z",
        inboxes: [
          {
            id: "member1",
            userId: "u1",
            inboxId: "inbox1",
            role: "ADMIN",
            createdAt: "2025-09-09T20:56:06.995Z",
            inbox: {
              id: "inbox1",
              isGroup: true,
              name: "Admin Group",
              createdAt: "2025-09-09T20:56:06.989Z",
              lastMsgAt: null,
              members: [
                {
                  id: "member1",
                  userId: "u1",
                  role: "ADMIN",
                  user: { id: "u1", username: "Alice" },
                },
                {
                  id: "member2",
                  userId: "u2",
                  role: "MEMBER",
                  user: { id: "u2", username: "Bob" },
                },
              ],
              messages: [
                {
                  id: "msg1",
                  inboxId: "inbox1",
                  content: "Hey there",
                  createdAt: "2025-09-10T09:18:22.641Z",
                  senderId: "u1",
                  sender: { id: "u1", username: "Alice" },
                },
              ],
            },
          },
          {
            id: "member2",
            userId: "u1",
            inboxId: "inbox2",
            role: "MEMBER",
            createdAt: "2025-09-11T10:00:00.000Z",
            inbox: {
              id: "inbox2",
              isGroup: false,
              name: "Bob",
              createdAt: "2025-09-11T10:00:00.000Z",
              lastMsgAt: null,
              members: [
                {
                  id: "member3",
                  userId: "u1",
                  role: "MEMBER",
                  user: { id: "u1", username: "Alice" },
                },
                {
                  id: "member4",
                  userId: "u2",
                  role: "MEMBER",
                  user: { id: "u2", username: "Bob" },
                },
              ],
              messages: [],
            },
          },
        ],
      },
    })
  ),
}));
vi.mock("../../api", () => ({
  default: {
    get: vi.fn((url) => {
      if (url.startsWith("/inbox/direct/")) {
        return Promise.resolve({
          data: {
            id: "inbox2",
            name: "Bob",
            isGroup: false,
            members: [
              {
                id: "member1",
                userId: "u1",
                user: { id: "u1", username: "Alice" },
              },
              {
                id: "member2",
                userId: "u2",
                user: { id: "u2", username: "Bob" },
              },
            ],
            messages: [],
          },
        });
      }
      return Promise.reject(new Error(`Unknown GET ${url}`));
    }),

    post: vi.fn((url, body) => {
      if (url === "/inbox/group") {
        return Promise.resolve({
          data: {
            id: "inboxNew",
            name: body.name,
            userIds: body.userIds,
            adminId: body.adminId,
          },
        });
      }
      return Promise.reject(new Error(`Unknown POST ${url}`));
    }),
  },
}));

vi.mock("../../middleware/fetchInboxesFunction", () => ({
  default: vi.fn(() =>
    Promise.resolve([
      {
        id: "inbox1",
        name: "Admin Group",
        isGroup: true,
        createdAt: "2025-09-09T20:56:06.989Z",
        lastMsgAt: null,
        members: [
          {
            id: "member1",
            inboxId: "inbox1",
            role: "ADMIN",
            createdAt: "2025-09-09T20:56:06.995Z",
            userId: "u1",
            user: {
              id: "u1",
              username: "Alice",
              bio: "Loves coffee",
              profilePicUrl: null,
              createdAt: "2025-08-28T20:51:34.496Z",
            },
          },
          {
            id: "member2",
            inboxId: "inbox1",
            role: "MEMBER",
            createdAt: "2025-09-10T09:14:07.656Z",
            userId: "u2",
            user: {
              id: "u2",
              username: "Bob",
              bio: "Enjoys hiking",
              profilePicUrl: null,
              createdAt: "2025-08-30T11:22:07.111Z",
            },
          },
        ],
        messages: [
          {
            id: "msg1",
            inboxId: "inbox1",
            content: "Hey Test",
            createdAt: "2025-09-10T09:18:22.641Z",
            mediaUrl: null,
            senderId: "u1",
            sender: {
              id: "u1",
              username: "Alice",
              bio: "Loves coffee",
              profilePicUrl: null,
            },
          },
        ],
      },
    ])
  ),
}));

vi.mock("../../middleware/fetchUsers", () => ({
  default: vi.fn(() =>
    Promise.resolve([
      { id: "u2", username: "Bob" },
      { id: "u3", username: "Charlie" },
    ])
  ),
}));

vi.mock("../../middleware/fetchLastSeenMessage", () => ({
  default: vi.fn(() => Promise.resolve(null)),
}));
vi.mock("../../middleware/handleLeaveInboxFunction", () => ({
  default: vi.fn(),
}));

describe("HomePage integration", () => {
  beforeEach(() => {
    localStorage.setItem("token", "fake.jwt.token");
  });

  it("renders user and inbox list", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for user + inbox fetch
    expect(await screen.findByText(/Hi, Alice/i)).toBeInTheDocument();
    expect(await screen.findByText(/Admin Group/i)).toBeInTheDocument();
  });

  it("User clicks on open chat in inbox section and it opens the inbox on the right side", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    const openChatButtons = await screen.findAllByText(/Open chat/i);
    await user.click(openChatButtons[0]);

    expect(await screen.findByText(/Hey Test/i)).toBeInTheDocument();
  });

  it("User clicks on send message in users section and it opens the inbox on the right side", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    const openChatButtons = await screen.findAllByText(/send message/i);

    await user.click(openChatButtons[0]);

    screen.debug();
    expect(await screen.findByText(/No messages/i)).toBeInTheDocument();
  });

  it("User opens settings of a inbox", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    const openChatButtons = await screen.findAllByText(/send message/i);

    await user.click(openChatButtons[0]);

    const settingsButton = screen.getByRole("button", { name: /settings/i });

    await user.click(settingsButton);

    expect(await screen.findByText(/Go back/i)).toBeInTheDocument();
  });

  it("User closes inbox settings", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    const openChatButtons = await screen.findAllByText(/send message/i);

    await user.click(openChatButtons[0]);

    const settingsButton = screen.getByRole("button", { name: /settings/i });

    await user.click(settingsButton);

    const goBackButton = screen.getByRole("button", { name: /Go back/i });

    await user.click(goBackButton);
    expect(await screen.findByText(/no messages/i)).toBeInTheDocument();
  });
  it("User creates new group", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    const newGroupButton = screen.getByRole("button", {
      name: "+ New Group",
    });

    await user.click(newGroupButton);

    const createGroupBtn = screen.getByRole("button", {
      name: "Create Group",
    });

    const charlieDiv = screen.getByText(/charlie/i);

    const bobDiv = screen.getByText(/bob/i);

    const inputField = screen.getByPlaceholderText(/group name/i);

    //user gives name to new group

    await user.type(inputField, "New test group");

    // user chooses group members

    await user.click(bobDiv);

    await user.click(charlieDiv);

    // user creates group

    await user.click(createGroupBtn);

    screen.debug();
    expect(await screen.findByText(/Inboxes section/i)).toBeInTheDocument();
  });

  it("User sends a message to a chat", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/new" element={<CreateGroupForm />} />
        </Routes>
      </MemoryRouter>
    );

    // Step 1: open a chat
    const openChatButtons = await screen.findAllByText(/Open chat/i);
    await user.click(openChatButtons[0]);

    // Step 2: type into the input
    const inputField = await screen.findByPlaceholderText(
      /Type your message.../i
    );
    await user.type(inputField, "New message");

    // Assert it's typed into the input
    expect(inputField).toHaveValue("New message");

    // Step 3: click Send
    const sendMessageBtn = await screen.findByRole("button", { name: "Send" });
    await user.click(sendMessageBtn);

    // Step 4: qassert middleware was called correctly
    expect(onMessageSend).toHaveBeenCalledWith("New message", "inbox1");

    // Step 5: assert input is cleareds
    expect(inputField).toHaveValue("");
  });

  it("User clicks logout button and redirects to /login", async () => {
    const user = userEvent.setup();

    // Mock window.location
    delete window.location;
    window.location = { href: "" };

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );

    const logoutBtns = await screen.findAllByRole("button", {
      name: /Logout/i,
    });

    // Click the first Logout button (sidebar)
    await user.click(logoutBtns[0]);

    // ✅ Assert redirect happened
    expect(window.location.href).toBe("/login");
  });
});
