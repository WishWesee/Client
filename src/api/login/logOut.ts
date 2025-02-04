import { api } from "../index";

export const Logout = async (): Promise<void> => {
  try {
    await api.post("/auth/sign-out");

    document.cookie.split(";").forEach((cookie) => {
      const [name] = cookie.split("=");
      document.cookie = `${name.trim()}=; max-age=-1; path=/; domain=.wishwesee.n-e.kr`;
    });

    console.log("로그아웃 성공, 쿠키 삭제 완료");
    window.location.href = "/";
  } catch (error) {
    console.error("로그아웃 요청 실패:", error);
    throw error;
  }
};