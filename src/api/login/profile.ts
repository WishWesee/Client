import { api } from "../index";

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