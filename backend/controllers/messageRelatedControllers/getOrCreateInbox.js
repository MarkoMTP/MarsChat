import prisma from "../../prisma/prismaClient.js";
import { findUserById } from "../../queries.js"; // keep your helper

export default async function getOrCreateInbox(req, res) {
  try {
    const requesterId = req.user.id; // from JWT middleware
    const { userId } = req.params;

    if (!userId) return res.status(400).json({ error: "userId missing" });
    if (requesterId === userId) {
      return res
        .status(400)
        .json({ error: "Cannot create a DM with yourself" });
    }

    const user = await findUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const inbox = await prisma.$transaction(async (tx) => {
      // 1) Try to find existing DM that has exactly these two members
      const existing = await tx.inbox.findFirst({
        where: {
          isGroup: false,
          AND: [
            { members: { some: { userId: requesterId } } },
            { members: { some: { userId } } },
            { members: { every: { userId: { in: [requesterId, userId] } } } },
          ],
        },
        include: {
          members: {
            select: {
              id: true,
              userId: true,
              user: { select: { id: true, username: true } }, // drop if you don't need user
            },
          },
        },
      });
      if (existing) return existing;

      // 2) Create inbox + both memberships atomically
      const created = await tx.inbox.create({
        data: { isGroup: false, name: user.username },
      });

      await tx.inboxMember.createMany({
        data: [
          { inboxId: created.id, userId: requesterId },
          { inboxId: created.id, userId },
        ],
      });

      return tx.inbox.findUnique({
        where: { id: created.id },
        include: {
          members: true,
          messages: {
            orderBy: { createdAt: "asc" },
          },
        },
      });
    });

    return res.status(200).json(inbox);
  } catch (err) {
    console.error("Error getting the inbox:", err);
    return res.status(500).json({ error: "Failed to get the inbox" });
  }
}
