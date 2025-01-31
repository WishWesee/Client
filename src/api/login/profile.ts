import { api } from "..";

export const FetchMyInfo = async() => {
  try {
    const response = await api.get("/api/v1/user");
    console.log("API Response:", response.data);
    return response.data.information;
  } catch (error) {
    console.error("Error fetching info:", error);
    throw error;
  }
};
