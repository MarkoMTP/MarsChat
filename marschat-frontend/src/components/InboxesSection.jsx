import InboxComponent from "./InboxComponent";

export default function InboxesSection({ inboxes, setOpenChat }) {
  return (
    <div className="space-y-3">
      {Array.isArray(inboxes) && inboxes.length > 0 ? (
        inboxes.map((inbox) => (
          <InboxComponent
            key={inbox.id}
            inbox={inbox}
            setOpenChat={setOpenChat}
          />
        ))
      ) : (
        <p className="text-sm text-gray-500 italic px-2">No inboxes</p>
      )}
    </div>
  );
}
