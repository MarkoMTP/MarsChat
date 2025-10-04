import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-gray-900 text-white">
      <div className="text-center space-y-8">
        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Mars<span className="text-red-500">Chat</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-md mx-auto">
          Connect beyond Earth. Fast, simple, and secure messaging.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-lg hover:shadow-red-500/50 font-medium"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition shadow-lg hover:shadow-gray-600/50 font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
