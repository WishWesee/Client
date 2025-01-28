import { api } from "..";

//보낸 초대장 삭제
export const deleteSentInvite = async (invitationId: number) => {
  try {
    const response = await api.delete(
      `/api/v1/invitation/sent/${invitationId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
