import { TFeedbackRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//후기 조회
export const getFeedback = async (invitationId: number) => {
  const response = await api.get(`/api/v1/invitation/${invitationId}/feedback`);
  return response.data;
};

export const useFeedbackQuery = (
  invitationId: number
): UseQueryResult<TFeedbackRes, Error> => {
  return useQuery({
    queryKey: ["feedback", invitationId],
    queryFn: () => getFeedback(invitationId),
  });
};
