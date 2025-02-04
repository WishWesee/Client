import { api } from "..";

//초대장 작성하기
export const postInvitation = async (invitationReq: FormData) => {
  try {
    for (const pair of invitationReq.entries()) {
      console.log("form", pair[0], pair[1]);
    }
    const response = await api.post(`/api/v1/invitation`, invitationReq);

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
