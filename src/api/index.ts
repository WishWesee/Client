import axios from "axios";

const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find((cookie) => cookie.startsWith("Authorization="));
  
  if (authCookie) {
    const tokenValue = authCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null;
  }
  return null;
};

const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find((cookie) => cookie.startsWith("Refresh_Token="));
  
  if (authCookie) {
    const tokenValue = authCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null;
  }
  return null;
};

const refreshAuthToken = async () => {
  try {
    const response = await axios.post("/auth/refresh", { 
      refreshToken: getRefreshTokenFromCookie() 
    });

    if (response.data?.token) {
      document.cookie = `Authorization=Bearer_${response.data.token}; path=/`;
      return response.data.token;
    }

    return null;
  } catch (error) {
    console.error("토큰 갱신 실패:", error);
    console.log("다시 로그인하세요.");
    return null;
  }
};


export const api = axios.create({
  baseURL: "https://wishwesee.n-e.kr",
  timeout: 3000,
});

api.interceptors.request.use(async (config) => {
  let token = getAuthTokenFromCookie();
  if (!token) {
    token = await refreshAuthToken();
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
