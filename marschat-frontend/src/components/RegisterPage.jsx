import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", bio: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await api.post("/register", {
        username: form.username,
        password: form.password,
        bio: form.bio,
        profilePicUrl: null,
      });

      if (response.status === 200) {
        setSuccess(true);

        // Delay navigation so user sees animation
        setTimeout(() => {
          navigate("/login", { state: { registered: true } });
        }, 2000);
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-500 to-red-400">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md relative">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Create Your MarsChat Account
        </h1>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm text-center animate-shake">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 rounded-xl animate-fade-in">
            <div className="text-center">
              <div className="text-4xl mb-2">🎉</div>
              <p className="text-lg font-semibold text-green-600">
                Registered Successfully!
              </p>
              <p className="text-sm text-gray-600">Redirecting to login...</p>
            </div>
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
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Create a password"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              required
              rows={3}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Tell us something about you"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg shadow-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
