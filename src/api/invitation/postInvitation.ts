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

// 초대장 임시 저장
export const postInvitationSave = async (invitationReq: FormData) => {
  try {
    for (const pair of invitationReq.entries()) {
      console.log("form", pair[0], pair[1]);
    }
    const response = await api.post(
      `/api/v1/invitation/temporary`,
      invitationReq
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
