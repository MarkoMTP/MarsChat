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
