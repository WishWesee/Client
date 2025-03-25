import { TInvitationRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//완성된 초대장 조회
export const getInvitation = async (invitationToken: string) => {
  const response = await api.get(`/api/v1/invitation/${invitationToken}`);
  return response.data;
};

export const useInvitationQuery = (
  invitationToken: string
): UseQueryResult<TInvitationRes, Error> => {
  return useQuery({
    queryKey: ["invitation", invitationToken],
    queryFn: () => getInvitation(invitationToken),
  });
};
