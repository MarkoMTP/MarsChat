import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UsersSection from "./components/UsersSection";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateGroupForm from "./components/CreatGroupForm";
import StartPage from "./components/StartPage";
import RegisterPage from "./components/RegisterPage";
import EditProfileComponent from "./components/EditProfileComponent";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/edit/profile"
        element={<EditProfileComponent></EditProfileComponent>}
      />

      <Route
        path="/home"
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
