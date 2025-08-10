export default function InboxComponent({ inbox, setOpenChat }) {
  return (
    <div>
      <h1 className="text-red">{inbox.name}</h1>
      <button
        className="
    bg-sky-500 
    text-white 
    font-semibold 
    px-4 py-2 
    rounded-lg 
    shadow-md 
    hover:bg-sky-600 
    focus:outline-none 
    focus:ring-2 
    focus:ring-sky-300 
    transition 
    duration-200 
    ease-in-out
  "
        setOpenChat={() => setOpenChat(inbox)}
      >
        Open Chat
      </button>
    </div>
  );
}
