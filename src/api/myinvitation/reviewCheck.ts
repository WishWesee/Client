import { api } from "..";

export const reviewCheck = async() => {
  try {
    const response = await api.get("/api/v1/invitation/my-invitations/feedback")
    return response.data.information;
  } catch (error) {
    console.error("Error fetching invitations:", error);
    throw error;
  }
};
