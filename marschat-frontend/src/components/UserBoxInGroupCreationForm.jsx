export default function UserBoxInGroupCreationForm({
  user,
  chosenUsers,
  setChosenUsers,
}) {
  const isSelected = chosenUsers.includes(user.id);

  const toggleUser = () => {
    if (isSelected) {
      setChosenUsers(chosenUsers.filter((id) => id !== user.id));
    } else {
      setChosenUsers([...chosenUsers, user.id]);
    }
  };

  return (
    <div
      onClick={toggleUser}
      className={`flex items-center max-w-68 justify-between p-3 border rounded-lg cursor-pointer transition
        ${
          isSelected ? "bg-sky-100 border-sky-400" : "bg-white hover:bg-gray-50"
        }`}
    >
      <p className="text-gray-800 font-medium">{user.username}</p>

      {/* checkmark */}
      <div
        className={`w-5 h-5 rounded border flex items-center justify-center
          ${isSelected ? "bg-sky-500 border-sky-500" : "border-gray-300"}`}
      >
        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
