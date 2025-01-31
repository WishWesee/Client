import { TInviteListRes } from "@/types/invite";
import { api } from "..";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

//연도별 내가 보낸 초대장 목록
export const getSentInvitation = async (year: number) => {
  const response = await api.get(`/api/v1/invitation/sent/${year}`);
  return response.data;
};

export const useSentInvitationQuery = (
  year: number
): UseSuspenseQueryResult<TInviteListRes, Error> => {
  return useSuspenseQuery({
    queryKey: ["sentInvitation", year],
    queryFn: () => getSentInvitation(year),
  });
};
