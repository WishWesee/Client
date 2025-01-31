import axios from "axios";

function getBearerTokenFromCookie() {
  const authorizationCookie = getCookieValue("Authorization");
  if (!authorizationCookie) return "";
  const parts = authorizationCookie.split("_");
  return parts[1] ?? "";
}

function getCookieValue(name:string) {
  const cookieStr = document.cookie ?? "";
  const cookies = cookieStr.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

const token = getBearerTokenFromCookie();

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
