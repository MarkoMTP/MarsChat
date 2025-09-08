import api from "../api";

export default async function handleAddingNewMembers(
  e,
  inboxId,
  chosenUsers,
  onClose
) {
  e.preventDefault();
  try {
    await api.post(`/inbox/${inboxId}/members`, {
      userIds: chosenUsers,
    });

    if (onClose) onClose();
  } catch (error) {
    console.error(
      "Error adding users:",
      error.response ? error.response.data : error.message
    );
  }
}
