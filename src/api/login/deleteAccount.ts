import { api } from "../index";

export const DeleteAccount = async (): Promise<void> => {
    try {
      await api.delete("/api/v1/user");

      document.cookie.split(";").forEach((cookie) => {
        const [name] = cookie.split("=");
        document.cookie = `${name.trim()}=; max-age=-1; path=/; domain=.wishwesee.n-e.kr`;
      });
  
      console.log("쿠키 삭제 완료");
      window.location.href = "/";
    } catch (error) {
      console.error("탈퇴 요청 실패:", error);
      throw error;
    }
  };