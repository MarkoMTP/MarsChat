// src/api.js
import axios from "axios";

const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExZjA2NWEwLTQxMDEtNDFjZi04ZGFiLWQ0ZDViYzNmZDc3YSIsImlhdCI6MTc1MjAwNDY2NiwiZXhwIjoxNzUyMDMzNDY2fQ.2DSvuKNjCSkXXALXwj8DbxHWhfLAmx1kNlKjjsw4sq0"; // TEMP ONLY

const api = axios.create({
  baseURL: "http://localhost:12345",
  headers: {
    Authorization: `Bearer ${testToken}`,
  },
});

export default api;
