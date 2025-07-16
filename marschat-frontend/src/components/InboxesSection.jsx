import InboxComponent from "./InboxComponent";

export default function InboxesSection({ inboxes }) {
  return (
    <div>
      <h2>Inboxes Section</h2>
      <div>
        {inboxes.map((inbox) => (
          <InboxComponent key={inbox.id} inbox={inbox} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
