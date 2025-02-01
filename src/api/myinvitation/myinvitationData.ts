import { api } from "..";

export const fetchMyInvitations = async() => {
  try {
    const response = await api.get("/api/v1/invitation/my-invitations")
    return response.data;
  } catch (error) {
    console.error("Error fetching invitations:", error);
    throw error;
  }
};
