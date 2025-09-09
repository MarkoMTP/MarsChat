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
    await api.post("/inbox/group", {
      userIds: choosenUsers,
      name: groupName,
      adminId: userId,
    });

    navigate("/");
  } catch (error) {
    console.error(
      "Creating inbox Error:",
      error.response ? error.response.data : error.message
    );
  }
}
