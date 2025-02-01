import { api } from "../index";

// ✅ 로그아웃 요청 (토큰 없어도 가능)
export const Logout = async (): Promise<void> => {
  try {
    await api.post("/auth/sign-out"); // ✅ 헤더 없이 요청 가능
    console.log("로그아웃 성공");
  } catch (error) {
    console.error("로그아웃 요청 실패:", error);
    throw error;
  }
};