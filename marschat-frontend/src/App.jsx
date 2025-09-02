import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UsersSection from "./components/UsersSection";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateGroupForm from "./components/CreatGroupForm";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route path="/chat/new" element={<CreateGroupForm />} />
    </Routes>
  );
}
