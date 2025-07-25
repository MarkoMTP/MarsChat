import api from "../api";

export default async function fetchInboxes() {
  try {
    const inboxes = await api.get("/inboxes");

    return inboxes.data;
  } catch (err) {
    console.error(`Error while fetching inboxes: ${err}`);
  }
}
