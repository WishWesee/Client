import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM4MjQzOTQzLCJleHAiOjE3MzgyNDc1NDN9.vSig5efOQ0aST_IHg8cHBq_FWzOMQ9KZUlqtniEc2lwoQskV38yQJo6DSp9aVi0jnP3ENwpM-ZK7oo02boF_fQ";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
