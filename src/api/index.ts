import axios from "axios";

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

if (token) {
  localStorage.setItem("authToken", token);
}

const storedToken = localStorage.getItem("authToken");

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: storedToken ? { Authorization: `Bearer ${storedToken}` } : {},
});
