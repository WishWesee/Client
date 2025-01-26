import { api } from "..";

//참석 여부 투표 (토큰이 없는 경우에만 닉네임으로 보내기 가능)
export const postAttendance = async (
  invitationId: number,
  nickname: string,
  isAttending: boolean
) => {
  const requestBody: { isAttending: boolean; nickname?: string } = {
    isAttending,
  };

  if (nickname.trim()) {
    requestBody.nickname = nickname;
  }

  try {
    const response = await api.post(
      `/api/v1/invitation/${invitationId}/attendance`,
      requestBody
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
