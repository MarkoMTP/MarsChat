import prisma from "./prisma/prismaClient.js";

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

export async function findUserName(username) {
  return await prisma.user.findUnique({
    where: { username },
  });
}

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

export async function createNewPrivateInbox(name) {
  await prisma.inbox.create({
    data: {
      name,
    },
  });
}

export async function addUserToInbox(inboxId, userId) {
  await prisma.inboxMember.create({
    data: {
      userId,
      inboxId,
    },
  });
}

export async function messageRead(messageId, userId) {
  await prisma.messageRead.create({
    data: {
      messageId,
      userId,
    },
  });
}
export async function getAllMessages(inboxId) {
  return await prisma.message.findMany({
    where: {
      inboxId: inboxId,
    },
    orderBy: {
      createdAt: "asc", // optional, but helps sort messages
    },
  });
}
