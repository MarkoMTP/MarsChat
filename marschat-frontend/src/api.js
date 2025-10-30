// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://marschat-backend.up.railway.app",
});

// Add the token dynamically before each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
