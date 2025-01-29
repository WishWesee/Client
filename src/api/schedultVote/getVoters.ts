import { TVoterRes } from "@/types/invite";
import { api } from "..";

//투표자 목록 조회
export const getVoters = async (
  invitationId: number,
  scheduleVoteId: number
): Promise<
  | {
      check: boolean;
      information: TVoterRes;
    }
  | undefined
> => {
  try {
    const response = await api.get(
      `/api/v1/invitation/${invitationId}/schedule/${scheduleVoteId}/voters`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
