import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM3ODg4MDkzLCJleHAiOjE3Mzc4OTE2OTN9.dyjl6m8ZjiJ_YBx0zkg74whXG89W3ob1wIFa4baz2q9KMLMckufvEYSoGe0oLglj7H6fLXy9EgWNUXPG1Wen7A";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
