import { api } from "..";

//(비회원) 특정 닉네임의 참석 조사 결과 조회
export const getGuestAttendance = async (
  invitationId: number,
  nickname: string
) => {
  try {
    const response = await api.get(
      `/api/v1/invitation/${invitationId}/attendance/guest?nickname=${nickname}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
