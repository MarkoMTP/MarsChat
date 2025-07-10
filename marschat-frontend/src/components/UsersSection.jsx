import { useEffect, useState } from "react";
import api from "../api";
import UserComponent from "./UserComponent";

export default function UsersSection({ users }) {
  return (
    <div>
      <h2>Users Section</h2>
      <div>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
