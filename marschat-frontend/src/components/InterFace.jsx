import { jwtDecode } from "jwt-decode";
import api from "../api";
import { useEffect } from "react";

export default function InterFace() {
  const token = localStorage.getItem("token");

  let userId = null;
  if (typeof token === "string") {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  useEffect(() => {
    if (userId) {
      api.get(`/users/${userId}`).then((res) => {
        console.log(res.data.username);
      });
    }
  }, [userId]);

  return (
    <>
      <h1>Hey</h1>
    </>
  );
}
