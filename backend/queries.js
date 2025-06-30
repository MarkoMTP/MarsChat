import prisma from "./prisma/prismaClient.js";

//
// 🧍‍♂️ USER-RELATED QUERIES
//

// Create a new user
export async function registerUser(username, password, bio, profilePicUrl) {
  try {
    await prisma.user.create({
      data: {
        username,
        password,
        bio,
        profilePicUrl,
      },
    });
  } catch (err) {
    console.error("The query for registering a new user failed", err);
    throw err;
  }
}

// Find user by username
export async function findUserName(username) {
  return await prisma.user.findUnique({
    where: { username },
  });
}

// Find user by ID
export async function findUserById(userId) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

// Update user data
export async function updateUser(userId, username, bio, profilePicUrl) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      ...(username && { username }),
      ...(bio && { bio }),
      ...(profilePicUrl && { profilePicUrl }),
    },
  });
}

// Get all users except the logged-in one
export async function getAllOtherUsers(userId) {
  return await prisma.user.findMany({
    where: {
      NOT: {
        id: userId,
      },
    },
  });
}

//
// 💬 MESSAGE-RELATED QUERIES
//

// Create a new message
export async function createNewMsg(content, senderId, inboxId) {
  await prisma.message.create({
    data: {
      content,
      mediaUrl: null,
      senderId,
      inboxId,
    },
  });
}

// Mark a message as read
export async function messageRead(messageId, userId) {
  await prisma.messageRead.create({
    data: {
      messageId,
      userId,
    },
  });
}

// Get all messages for a specific inbox
export async function getAllMessages(inboxId) {
  return await prisma.message.findMany({
    where: {
      inboxId: inboxId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

// Get a specific message by ID
export async function getMsgById(id) {
  return await prisma.message.findUnique({
    where: { id },
  });
}

// Delete a message
export async function deleteMsg(messageId) {
  return await prisma.message.delete({
    where: { id: messageId },
  });
}

//
// 💌 INBOX & MEMBERSHIP-RELATED QUERIES
//

// Create a new inbox (private or group)
export async function createNewPrivateInbox(name) {
  await prisma.inbox.create({
    data: {
      name,
    },
  });
}

// Add a user to an inbox
export async function addUserToInbox(inboxId, userId) {
  await prisma.inboxMember.create({
    data: {
      userId,
      inboxId,
    },
  });
}

// Get all inboxes a user is part of
export async function getInboxesForUser(userId) {
  return await prisma.inbox.findMany({
    where: {
      members: {
        some: {
          userId: userId,
        },
      },
    },
  });
}

export async function getInboxById(id) {
  return await prisma.inbox.findUnique({
    where: { id },
  });
}

export async function findInboxMemberByIds(userId, inboxId) {
  return await prisma.inboxMember.findMany({
    where: {
      userId: userId,
      inboxId: inboxId,
    },
  });
}

export async function deleteInboxMemberByIds(userId, inboxId) {
  return await prisma.inboxMember.deleteMany({
    where: {
      userId: userId,
      inboxId: inboxId,
    },
  });
}
