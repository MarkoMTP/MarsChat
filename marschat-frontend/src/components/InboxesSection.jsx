import InboxComponent from "./InboxComponent";

export default function InboxesSection({ inboxes, setOpenChat }) {
  const groupChats = inboxes.filter((inbox) => inbox.isGroup === true);

  return (
    <div className="space-y-3">
      {Array.isArray(groupChats) && groupChats.length > 0 ? (
        groupChats.map((inbox) => (
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
