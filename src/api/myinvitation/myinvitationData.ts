import { api } from "..";

export const fetchMyInvitations = async() => {
  try {
    const response = await api.get("/api/v1/invitation/my-invitations", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGhtMzc4N0BnbWFpbC5jb20iLCJpYXQiOjE3Mzc5NzMwMTksImV4cCI6MTczNzk4MDIxOX0.zh0SUiqv5bR92akDAXW9j2qz28O-80dFxWWcbW9IbSY9BMDQZU2UKOlNxPaBQ4wAaVziRBgCbN4t_8MX_dXyHA`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching invitations:", error);
    throw error;
  }
};
