import { TInvitationRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//완성된 초대장 조회
export const getInvitation = async (invitationId: number) => {
  const response = await api.get(`/api/v1/invitation/${invitationId}`);
  return response.data;
};

export const useInvitationQuery = (
  invitationId: number
): UseQueryResult<TInvitationRes, Error> => {
  return useQuery({
    queryKey: ["invitation", invitationId],
    queryFn: () => getInvitation(invitationId),
  });
};
