import { TAttendanceRes } from "@/types/invite";
import { api } from "..";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

//참석 조사 조회
export const getAttendance = async (invitationId: number) => {
  const response = await api.get(
    `/api/v1/invitation/${invitationId}/attendance`
  );
  return response.data;
};

export const useAttendanceQuery = (
  invitationId: number
): UseQueryResult<TAttendanceRes, Error> => {
  return useQuery({
    queryKey: ["attendance", invitationId],
    queryFn: () => getAttendance(invitationId),
  });
};
