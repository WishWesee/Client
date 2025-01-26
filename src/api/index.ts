import axios from "axios";

const Token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzM3OTA1Nzg3LCJleHAiOjE3Mzc5MDkzODd9.rUaUc_scVEfJbo2GMfCH27lJY3p3Q9658eCKuigIMbVMAdYGfrD9_oBNb8l386SdxYQYAvKRkE4FNzcY_crOtA";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
