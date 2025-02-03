import axios from "axios";

const storedToken = localStorage.getItem("Authorization");

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: storedToken ? { Authorization: `Bearer ${storedToken}` } : {},
});
