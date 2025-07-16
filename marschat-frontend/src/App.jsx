import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UsersSection from "./components/UsersSection";
import InterFace from "./components/InterFace";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<InterFace />} />
    </Routes>
  );
}
