import { api } from "..";

//초대장 받기
export const postSaveReceived = async (invitationId: number) => {
  try {
    const response = await api.post(`/api/v1/invitation/save-received`, {
      invitationId,
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
