import { api } from "../index";

// ✅ 유저 정보 가져오기 (토큰 없이도 요청 가능)
export const FetchMyInfo = async () => {
  try {
    const response = await api.get("/api/v1/user"); 
    console.log("API Response:", response.data);
    return response.data.information;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};