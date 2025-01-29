import { api } from "..";

//참석 조사 마감 여부 수정
export const putAttendance = async (invitationId: number) => {
  try {
    const response = await api.put(
      `/api/v1/invitation/${invitationId}/attendance`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
