import axios from "axios";
//Authorization 토큰 가져오기
const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find((cookie) => cookie.startsWith("Authorization="));
  
  if (authCookie) {
    const tokenValue = authCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null;
  }
  return null;
};
//Refresh 토큰 가져오기
const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find((cookie) => cookie.startsWith("Refresh_Token="));
  
  if (authCookie) {
    const tokenValue = authCookie.split("=")[1];
    return tokenValue.startsWith("Bearer_") ? tokenValue.slice(7) : null; //저장형태 Bearer_~~~ 형태라서
  }
  return null;
};
//쿠키전체리프레시(fire타임 어떻게할지는 리프레시 기능 다되면.)
const refreshAuthToken = async () => {
  try {
    const response = await axios.post("/auth/refresh", { 
      refreshToken: getRefreshTokenFromCookie()  
    });

    if (response.data?.accessToken) {
      document.cookie = `Authorization=Bearer_${response.data.accessToken}; path=/`; //auth토큰 다시세팅
      document.cookie = `Refresh_Token=Bearer_${response.data.refreshToken}; path=/`; //refresh토큰 다시세팅
      return response.data.accessToken; //여기 access는 Bearer_~~~ 형태 아님
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
//요청할때 가로채서 헤더넣기, auth토큰 없으면 리프레시
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
