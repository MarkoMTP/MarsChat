export default function InboxComponent({ inbox, setOpenChat }) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-800 truncate">
          {inbox.name}
        </h1>
        <button
          className="
            bg-red-600 
            text-white 
            text-sm 
            font-medium
            px-4 py-1.5 
            rounded-lg 
            shadow-sm 
            hover:bg-red-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-red-300 
            transition 
            cursor-pointer
          "
          onClick={() => setOpenChat(inbox)}
        >
          Open
        </button>
      </div>
    </div>
  );
}
