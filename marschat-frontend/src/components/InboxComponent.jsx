export default function InboxComponent({ inbox, onClick }) {
  return (
    <div>
      <h1>{inbox.name}</h1>
      <button onClick={() => onClick(inbox.id)}>Open Chat</button>
    </div>
  );
}
