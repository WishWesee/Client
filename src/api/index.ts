import axios from "axios";

// const Token =
//   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM3OTc5NTA3LCJleHAiOjE3Mzc5ODY3MDd9.K07_aR6aNafV2fnbGjQQyAoHW5iBGx1yMrGl3UurLexYVvcZ-IQ6LsDVC-4lio5t9xQVNZYl5YyNMObC9l0w0Q";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  // headers: {
  //   Authorization: `Bearer ${Token}`,
  // },
});
