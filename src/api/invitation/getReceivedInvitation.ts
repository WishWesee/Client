import { TInviteListRes } from "@/types/invite";
import { api } from "..";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

//연도별 내가 받은 초대장 목록
export const getReceivedInvitation = async (year: number) => {
  const response = await api.get(`/api/v1/invitation/received/${year}`);
  return response.data;
};

export const useReceivedInvitationQuery = (
  year: number
): UseSuspenseQueryResult<TInviteListRes, Error> => {
  return useSuspenseQuery({
    queryKey: ["receivedInvitation", year],
    queryFn: () => getReceivedInvitation(year),
  });
};
