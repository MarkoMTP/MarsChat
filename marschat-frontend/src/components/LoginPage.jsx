import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/login", { username, password });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        setError("No token received!");
      }
    } catch (err) {
      if (err.response) {
        if (typeof err.response.data === "string") {
          setError(err.response.data);
        } else if (err.response.data?.error) {
          setError(err.response.data.error);
        } else {
          setError("Unexpected error occurred");
        }
      } else {
        setError(err.message || "Network error");
      }
    }
  };

  const handleGoBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-red-400">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Welcome Back to MarsChat
        </h1>

        {/* Success banner from Register */}
        {location.state?.registered && (
          <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-md text-center animate-fade-in">
            🎉 Account created successfully! Please log in.
          </div>
        )}

        {/* Error banner */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md text-center animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <button className="hover:underline" onClick={handleGoBack}>
            ← Go back
          </button>
          <p>
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-red-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
