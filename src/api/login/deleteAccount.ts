import { api } from "../index";

export const DeleteAccount = async (): Promise<void> => {
    try {
      await api.post("/api/v1/user/delete"); // ✅ 헤더 없이 요청 가능
      console.log("탈퇴 성공");
    } catch (error) {
      console.error("탈퇴 요청 실패:", error);
      throw error;
    }
  };