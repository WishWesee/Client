import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM4MjM2MzY5LCJleHAiOjE3MzgyMzk5Njl9.a0yBGWE5FEcfDYO4hx7jWp5OeWe-FJjZ658QNK9bKztxC1vVoAyC-ZZpalzH0KWiZKt97UjXkhsEh2qUMpiUmg";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
