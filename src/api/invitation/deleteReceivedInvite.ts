import { api } from "..";

//받은 초대장 삭제
export const deleteReceivedInvite = async (invitationId: number) => {
  try {
    const response = await api.delete(
      `/api/v1/invitation/received/${invitationId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
