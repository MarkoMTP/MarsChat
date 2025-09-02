// prisma/seed.js
import prisma from "./prismaClient.js";
import bcrypt from "bcrypt";

async function main() {
  console.log("🌱 Seeding...");

  await prisma.messageRead.deleteMany();
  await prisma.message.deleteMany();
  await prisma.inboxMember.deleteMany();
  await prisma.inbox.deleteMany();
  await prisma.user.deleteMany();

  const [pw1, pw2, pw3, pw4] = await Promise.all([
    bcrypt.hash("pw1", 10),
    bcrypt.hash("pw2", 10),
    bcrypt.hash("pw3", 10),
    bcrypt.hash("pw4", 10),
  ]);

  await prisma.user.createMany({
    data: [
      { id: "u1", username: "Alice", password: pw1, bio: "Loves coffee" },
      { id: "u2", username: "Bob", password: pw2, bio: "Enjoys hiking" },
      { id: "u3", username: "Charlie", password: pw3, bio: "Music fan" },
      { id: "u88", username: "noInbox", password: pw4, bio: "Italy fan" },
    ],
  });

  await prisma.inbox.createMany({
    data: [
      { id: "i1", isGroup: false, name: "Alice & Bob" },
      { id: "i2", isGroup: false, name: "Alice & Charlie" },
      { id: "i3", isGroup: true, name: "Group Chat" },
    ],
  });

  await prisma.inboxMember.createMany({
    data: [
      { id: "im1", inboxId: "i1", userId: "u1" },
      { id: "im2", inboxId: "i1", userId: "u2" },
      { id: "im3", inboxId: "i2", userId: "u1" },
      { id: "im4", inboxId: "i2", userId: "u3" },
      { id: "im5", inboxId: "i3", userId: "u1" },
      { id: "im6", inboxId: "i3", userId: "u2" },
      { id: "im7", inboxId: "i3", userId: "u3" },
    ],
  });

  await prisma.message.createMany({
    data: [
      { id: "m1", inboxId: "i1", senderId: "u1", content: "Hey Bob!" },
      { id: "m2", inboxId: "i1", senderId: "u2", content: "Hey Alice!" },
      { id: "m3", inboxId: "i2", senderId: "u1", content: "Yo Charlie" },
      { id: "m4", inboxId: "i3", senderId: "u3", content: "Hello everyone!" },
    ],
  });

  console.log("✅ Seed complete");
}

main().finally(() => prisma.$disconnect());
