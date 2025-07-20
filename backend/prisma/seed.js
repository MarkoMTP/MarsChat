// prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function main() {
  // Clear old data (optional, for dev)
  await prisma.messageRead.deleteMany();
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany();
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();
  const hashedPass1 = await bcrypt.hash("hashed123", 10);

  // USERS
  const alice = await prisma.user.create({
    data: {
      username: "alice",
      password: hashedPass1,
      bio: "Hello from Alice",
      profilePicUrl: "https://example.com/alice.jpg",
    },
  });

  const bob = await prisma.user.create({
    data: {
      username: "bob",
      password: hashedPass1,
      bio: "Hi, I'm Bob",
      profilePicUrl: "https://example.com/bob.jpg",
    },
  });

  const charlie = await prisma.user.create({
    data: {
      username: "charlie",
      password: hashedPass1,
      bio: "Charlie here",
      profilePicUrl: "https://example.com/charlie.jpg",
    },
  });

  // INBOXES
  const dmInbox = await prisma.inbox.create({
    data: {
      isGroup: false,
      lastMsgAt: new Date(),
      members: {
        create: [
          { userId: alice.id, role: "MEMBER" },
          { userId: bob.id, role: "MEMBER" },
        ],
      },
    },
  });

  const groupInbox = await prisma.inbox.create({
    data: {
      isGroup: true,
      name: "Dev Squad",
      lastMsgAt: new Date(),
      members: {
        create: [
          { userId: alice.id, role: "ADMIN" },
          { userId: bob.id, role: "MEMBER" },
          { userId: charlie.id, role: "MEMBER" },
        ],
      },
    },
  });

  // MESSAGES
  const msg1 = await prisma.message.create({
    data: {
      content: "Hey Bob!",
      senderId: alice.id,
      inboxId: dmInbox.id,
    },
  });

  const msg2 = await prisma.message.create({
    data: {
      content: "Welcome to the group!",
      senderId: alice.id,
      inboxId: groupInbox.id,
    },
  });

  // MESSAGE READS
  await prisma.messageRead.create({
    data: {
      messageId: msg1.id,
      userId: bob.id,
    },
  });

  await prisma.messageRead.create({
    data: {
      messageId: msg2.id,
      userId: charlie.id,
    },
  });

  console.log("✅ Seeded users, inboxes, messages, and reads!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
