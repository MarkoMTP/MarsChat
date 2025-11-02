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

    let inbox;

    // Try to find existing inbox
    const existing = await prisma.inbox.findFirst({
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
            user: {
              select: {
                id: true,
                username: true,
                bio: true,
                profilePicUrl: true,
              },
            },
          },
        },
        messages: {
          include: { sender: { select: { id: true, username: true } } },
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (existing) {
      inbox = { ...existing, isNew: false };
    } else {
      // Create new inbox
      const created = await prisma.inbox.create({
        data: { isGroup: false, name: user.username },
      });

      await prisma.inboxMember.createMany({
        data: [
          { inboxId: created.id, userId: requesterId },
          { inboxId: created.id, userId },
        ],
      });

      const newInbox = await prisma.inbox.findUnique({
        where: { id: created.id },
        include: {
          members: {
            select: {
              id: true,
              userId: true,
              user: {
                select: {
                  id: true,
                  username: true,
                  bio: true,
                  profilePicUrl: true,
                },
              },
            },
          },
          messages: {
            include: { sender: { select: { id: true, username: true } } },
            orderBy: { createdAt: "asc" },
          },
        },
      });

      inbox = { ...newInbox, isNew: true };
    }

    console.log("FINAL inbox response:", inbox);
    return res.status(200).json(inbox);
  } catch (err) {
    console.error("Error getting the inbox:", err);
    return res.status(500).json({ error: "Failed to get the inbox" });
  }
}
