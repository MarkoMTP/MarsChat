import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { username, password });

      const token = response.data.token;
      if (token) {
        await localStorage.setItem("token", token);
        navigate("/");
      } else {
        console.error("No token received!");
      }
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleGoBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />
        <button
          type="submit"
          className="bg-sky-500 
    text-white 
    px-4 py-2 
    rounded-lg 
    shadow-md 
    hover:bg-sky-600 
    hover:cursor-pointer
    focus:outline-none 
    focus:ring-2 
    focus:ring-sky-300 
    transition 
    duration-200 
    ease-in-out"
        >
          Login
        </button>
      </form>
      <button className="go-back-btn" onClick={handleGoBack}>
        go back
      </button>
    </div>
  );
}

export default LoginForm;
