import api from "../api";

export default async function handleCreateGroup({
  e,
  choosenUsers,
  userId,
  groupName,
  navigate,
}) {
  e.preventDefault();
  try {
    const finalUserIds = Array.from(new Set([...choosenUsers, userId]));

    await api.post("/inbox/group", {
      userIds: finalUserIds,
      name: groupName,
    });

    navigate("/");
  } catch (error) {
    console.error(
      "Creating inbox Error:",
      error.response ? error.response.data : error.message
    );
  }
}
