import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM3OTAxODkwLCJleHAiOjE3Mzc5MDU0OTB9.mb1d9OdHL8hj6IYO4Vl7WhwByJVDi7pkqnNz8J3307Y1gRQOheZRe1fvvXtCRZbv_s-L_FNHpaj7DpAClHbanQ";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
