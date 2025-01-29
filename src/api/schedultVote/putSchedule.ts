import { api } from "..";

//일정 투표 확정
export const putSchedule = async (
  invitationId: number,
  scheduleVoteId: number
) => {
  try {
    const response = await api.put(
      `/api/v1/invitation/${invitationId}/schedule?scheduleVoteId=${scheduleVoteId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
