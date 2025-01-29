import { api } from "..";

//후기 삭제
export const deleteFeedback = async (
  invitationId: number,
  feedbackId: number
) => {
  try {
    const response = await api.delete(
      `/api/v1/invitation/${invitationId}/feedback/${feedbackId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
