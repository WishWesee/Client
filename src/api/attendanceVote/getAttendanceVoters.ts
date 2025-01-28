import { TAttendanceVotersRes } from "@/types/invite";
import { api } from "..";

//투표자 목록 조회
export const getAttendanceVoters = async (
  invitationId: number,
  isAttend: boolean
): Promise<
  | {
      check: boolean;
      information: TAttendanceVotersRes;
    }
  | undefined
> => {
  try {
    const response = await api.get(
      `/api/v1/invitation/${invitationId}/attendance/voters?isAttend=${isAttend}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
