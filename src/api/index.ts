import axios from "axios";

// const Token =
//   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM4MDYxNDA2LCJleHAiOjE3MzgwNjg2MDZ9.2ssynO7fG2zP0oRGIgIZ4UWZQE_31YfV1tht8wFz4zLFqvZYnblXrOlMp8Pmq0wYE9Hbl7WUx-JhWO9dIC1okw";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  // headers: {
  //   Authorization: `Bearer ${Token}`,
  // },
});
