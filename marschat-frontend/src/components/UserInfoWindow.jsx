export default function UserInfoWindow({ user, handleFunction }) {
  return (
    <>
      <h1>{user.username}</h1>
      <p>{user.bio}</p>

      <button onClick={handleFunction}>Close</button>
    </>
  );
}
