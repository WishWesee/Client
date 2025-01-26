import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM3ODkzODI5LCJleHAiOjE3Mzc4OTc0Mjl9.7gzsq4og3sP-Hnn2Ttae-Zqqap7ZZJcJxdsONU80jI1WiMsy9JEvggLBsPPl6smFbu2oI0AtO0Y-_2tvtXIfoQ";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
