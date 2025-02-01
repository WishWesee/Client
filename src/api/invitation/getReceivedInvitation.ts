import { TInviteListRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//연도별 내가 받은 초대장 목록
export const getReceivedInvitation = async (year: number) => {
  const response = await api.get(`/api/v1/invitation/received/${year}`);
  return response.data;
};

export const useReceivedInvitationQuery = (
  year: number
): UseQueryResult<TInviteListRes, Error> => {
  return useQuery({
    queryKey: ["receivedInvitation", year],
    queryFn: () => getReceivedInvitation(year),
  });
};
