import InboxComponent from "./InboxComponent";

export default function InboxesSection({ inboxes, setOpenChat }) {
  return (
    <div>
      <h2 className="text-2xl">Inboxes Section</h2>
      <div>
        {Array.isArray(inboxes) && inboxes.length > 0 ? (
          inboxes.map((inbox) => (
            <InboxComponent
              key={inbox.id}
              inbox={inbox}
              setOpenChat={setOpenChat}
            />
          ))
        ) : (
          <p>No inboxes</p>
        )}
      </div>
    </div>
  );
}
