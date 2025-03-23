import axios from "axios";

const TOKEN_REFRESH_INTERVAL = 300000; //5분

//Authorization 토큰 가져오기
const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find((cookie) =>
    cookie.startsWith("Authorization=")
  );

  if (authCookie) {
    const tokenValue = authCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null;
  }
  return null;
};

//Refresh 토큰 가져오기
const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const refreshCookie = cookies.find((cookie) =>
    cookie.startsWith("Refresh_Token=")
  );

  if (refreshCookie) {
    const tokenValue = refreshCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null; // 저장형태: Bearer_~~~ 형태
  }
  return null;
};

//쿠키 전체 리프레시 (자동 갱신)
const refreshAuthToken = async () => {
  try {
    const refreshToken = getRefreshTokenFromCookie();
    if (!refreshToken) {
      console.warn("리프레시 토큰이 없습니다. 다시 로그인하세요.");
      return null;
    }

    const response = await axios.post("/auth/refresh", {
      refreshToken: refreshToken,
    });

    if (response.data?.accessToken) {
      document.cookie = `Authorization=Bearer_${response.data.accessToken}; path=/; max-age=1800; Secure`;
      document.cookie = `Refresh_Token=Bearer_${response.data.refreshToken}; path=/; max-age=1209600; Secure`;

      console.log("토큰 자동 갱신", response.data.accessToken);
      return response.data.accessToken; //Bearer_~~~ 형태 아님
    }

    return null;
  } catch (error) {
    console.error("토큰 갱신 실패:", error);
    console.warn("다시 로그인하세요.");
    return null;
  }
};

//////////////////////////////////////////
export const api = axios.create({
  baseURL: "https://wishwesee.n-e.kr",
  timeout: 3000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMzE0a2VsZWVAZ21haWwuY29tIiwiaWF0IjoxNzQyNzYzNTY4LCJleHAiOjE3NDI3NjUzNjh9.C6tXjYYSbwjXk9aJHOSqsTFaLta2Qh7uK7x8yU2WzIQ",
  },
});
//////////////////////////////////////////

//요청 인터셉트해서 Authorization 헤더 추가, 요청할때마다 리프레시
api.interceptors.request.use(
  async (config) => {
    let token = getAuthTokenFromCookie();
    if (!token) {
      token = await refreshAuthToken();
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//5분마다 자동으로 토큰 리프레시함
let tokenRefreshInterval: NodeJS.Timeout | null = null;

const startTokenRefresh = () => {
  if (!tokenRefreshInterval) {
    tokenRefreshInterval = setInterval(async () => {
      console.log("자동 토큰 갱신");
      await refreshAuthToken();
    }, TOKEN_REFRESH_INTERVAL);
  }
};

startTokenRefresh();
