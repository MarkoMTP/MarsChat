// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:12345",
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
