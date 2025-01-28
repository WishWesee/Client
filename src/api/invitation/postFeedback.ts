import { api } from "..";

//후기 작성
export const postFeedback = async (
  invitationId: number,
  image: File | null,
  content: string
) => {
  try {
    const formData = new FormData();

    formData.append(
      "createFeedbackReq",
      new Blob([JSON.stringify({ content })], { type: "application/json" })
    );

    if (image) formData.append("image", image);

    const response = await api.post(
      `/api/v1/invitation/${invitationId}/feedback`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
