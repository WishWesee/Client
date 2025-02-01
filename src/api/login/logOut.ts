import { api } from "../index";

export const Logout = async (): Promise<void> => {
  try {
    await api.post("/auth/sign-out");
    console.log("로그아웃 성공");
  } catch (error) {
    console.error("로그아웃 요청 실패:", error);
    throw error;
  }
};