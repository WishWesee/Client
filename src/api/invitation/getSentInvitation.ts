import { TInviteListRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//연도별 내가 보낸 초대장 목록
export const getSentInvitation = async (year: number) => {
  const response = await api.get(`/api/v1/invitation/sent/${year}`);
  return response.data;
};

export const useSentInvitationQuery = (
  year: number
): UseQueryResult<TInviteListRes, Error> => {
  return useQuery({
    queryKey: ["sentInvitation", year],
    queryFn: () => getSentInvitation(year),
  });
};
