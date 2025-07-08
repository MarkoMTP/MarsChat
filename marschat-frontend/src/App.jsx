import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UsersSection from "./components/UsersSection";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<UsersSection />} />
    </Routes>
  );
}
