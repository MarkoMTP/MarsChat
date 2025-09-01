// controllers/inbox/addMultipleMembersController.js
import prisma from "../../prisma/prismaClient.js";
import { getInboxById } from "../../queries.js";

export default async function addMultipleMembersController(req, res) {
  const { inboxId } = req.params;
  const { userIds } = req.body; // expect array of IDs

  try {
    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res
        .status(400)
        .json({ error: "UserIds must be a non-empty array" });
    }

    const inbox = await getInboxById(inboxId);

    if (!inbox) {
      return res.status(400).json({ error: "Inbox does not exist" });
    }

    // check if already members
    const existingMembers = await prisma.inboxMember.findMany({
      where: { inboxId, userId: { in: userIds } },
    });

    if (existingMembers.length > 0) {
      return res
        .status(404)
        .json({ error: "Error users are already members of inbox" });
    }

    const existingIds = inbox.members.map((m) => m.id);

    const filteredUserIds = userIds.filter(
      (id, index, self) =>
        !existingIds.includes(id) && self.indexOf(id) === index
    );

    if (filteredUserIds.length === 0) {
      return res.status(400).json({ error: "No valid new users to add" });
    }

    await prisma.inboxMember.createMany({
      data: filteredUserIds.map((userId) => ({
        userId,
        inboxId,
      })),
    });

    res.status(200).json({ added: filteredUserIds });
  } catch (err) {
    console.error("Error adding multiple members:", err);
    res.status(500).json({ error: "Failed to add members" });
  }
}
