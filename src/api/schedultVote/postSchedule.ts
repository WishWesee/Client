import { api } from "..";

//일정 투표 (토큰이 없는 경우에만 닉네임으로 보내기 가능)
export const postSchedule = async (
  invitationId: number,
  nickname: string,
  scheduleVoteIds: number[]
) => {
  const requestBody: { scheduleVoteIds: number[]; nickname?: string } = {
    scheduleVoteIds,
  };

  if (nickname.trim()) {
    requestBody.nickname = nickname;
  }

  try {
    const response = await api.post(
      `/api/v1/invitation/${invitationId}/schedule`,
      requestBody
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
