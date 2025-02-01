import axios from "axios";

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

// 토큰이 URL에 있으면 로컬 스토리지에 저장
if (token) {
  localStorage.setItem("authToken", token);
}

// 로컬 스토리지에서 토큰 가져오기
const storedToken = localStorage.getItem("authToken");

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: storedToken ? { Authorization: `Bearer ${storedToken}` } : {},
});
