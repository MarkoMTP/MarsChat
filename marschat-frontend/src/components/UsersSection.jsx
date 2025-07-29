import UserComponent from "./UserComponent";

export default function UsersSection({ users }) {
  return (
    <div>
      <h2>Users Section</h2>
      <div>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <UserComponent key={user.id} user={user} onClick={() => {}} />
          ))
        ) : (
          <p>No users </p>
        )}
      </div>
    </div>
  );
}
