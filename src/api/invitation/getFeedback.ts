import { TFeedbackRes } from "@/types/invite";
import { api } from "..";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

//후기 조회
export const getFeedback = async (invitationId: number) => {
  const response = await api.get(`/api/v1/invitation/${invitationId}/feedback`);
  return response.data;
};

export const useFeedbackQuery = (
  invitationId: number
): UseSuspenseQueryResult<TFeedbackRes, Error> => {
  return useSuspenseQuery({
    queryKey: ["feedback", invitationId],
    queryFn: () => getFeedback(invitationId),
  });
};
