import prisma from "../../prisma/prismaClient.js";

export default async function createGroupInboxController(req, res) {
  const { name, userIds } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Inbox name missing" });
  }
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return res.status(400).json({ error: "userIds must be a non-empty array" });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create inbox
      const createdInbox = await tx.inbox.create({
        data: { name, isGroup: true },
      });

      // 2. Filter unique IDs
      const filteredUserIds = [...new Set(userIds)];

      // 3. Add members
      await tx.inboxMember.createMany({
        data: filteredUserIds.map((userId) => ({
          userId,
          inboxId: createdInbox.id,
        })),
      });

      return createdInbox;
    });

    return res.status(201).json({
      message: "Inbox created successfully",
      inbox: result,
    });
  } catch (err) {
    console.error("Error creating group inbox:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
